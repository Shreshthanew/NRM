const RESEND_API_URL = "https://api.resend.com/emails";

type EmailInput = {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
};

// Escape user-provided text before putting it into an HTML email.
export function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Sends an email through Resend's HTTP API (Railway blocks SMTP on free/hobby plans).
// Returns false instead of throwing, so a failed email never loses a saved request.
export async function sendEmail({ to, subject, html, replyTo }: EmailInput): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn(`[email] RESEND_API_KEY not set, skipped email: "${subject}"`);
    return false;
  }

  const from = process.env.EMAIL_FROM || "NRM Global Inspection <onboarding@resend.dev>";

  try {
    const res = await fetch(RESEND_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject,
        html,
        ...(replyTo ? { reply_to: replyTo } : {}),
      }),
    });

    if (!res.ok) {
      console.error(`[email] Resend returned ${res.status}: ${await res.text()}`);
      return false;
    }
    return true;
  } catch (error) {
    console.error("[email] Failed to send:", error);
    return false;
  }
}
