import { cookies } from "next/headers";

const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:4000";

export async function getCurrentUser() {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth_token")?.value;

  if (!token) return null;

  try {
    const res = await fetch(`${BACKEND_URL}/api/auth/me`, {
      headers: {
        Cookie: `auth_token=${token}`,
      },
      cache: "no-store",
    });

    if (!res.ok) return null;

    return res.json();
  } catch {
    // Backend unreachable — render the page as logged-out instead of crashing.
    return null;
  }
}
