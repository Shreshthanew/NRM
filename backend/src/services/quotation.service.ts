import { prisma } from "../prisma/client";
import { escapeHtml, sendEmail } from "../utils/email";
import {
  detailsTable,
  MAX_REQUESTS_PER_HOUR,
  oneHourAgo,
  OrderFields,
  orderRows,
  RateLimitError,
  teamEmailAddress,
  text,
  toNumber,
  validateOrderFields,
  ValidationError,
  type Errors,
} from "./orderFields";

export { RateLimitError, ValidationError };

const INSPECTIONS_PER_MONTH: Record<string, string> = {
  "1": "1 per month",
  "2": "2 per month",
  FREQUENT: "Frequently (more than 2 per month)",
};

export type QuotationInput = OrderFields & {
  manDays: number | null;
  inspectionsPerMonth: string;
};

export function validateQuotation(body: any): QuotationInput {
  const b = body ?? {};
  const errors: Errors = {};

  const fields = validateOrderFields(b, errors, {
    poNumberRequired: false,
    specialRequirementsRequired: false,
  });

  const manDays = toNumber(b.manDays);
  if (manDays !== null && (!Number.isFinite(manDays) || manDays < 0 || manDays > 1000))
    errors.manDays = "Enter a number between 0 and 1000.";

  const inspectionsPerMonth = text(b.inspectionsPerMonth);
  if (!INSPECTIONS_PER_MONTH[inspectionsPerMonth])
    errors.inspectionsPerMonth = "Select how many inspections you need per month.";

  if (Object.keys(errors).length > 0) throw new ValidationError(errors);

  return { ...fields, manDays, inspectionsPerMonth };
}

function quotationRows(q: QuotationInput): [string, string][] {
  return [
    ...orderRows(q),
    ["Number of man-days", q.manDays === null ? "Not provided" : String(q.manDays)],
    ["Inspections per month", INSPECTIONS_PER_MONTH[q.inspectionsPerMonth]],
    ["Special requirements", q.specialRequirements ?? "None"],
  ];
}

async function notify(q: QuotationInput, requestId: string) {
  const teamEmail = teamEmailAddress();
  const table = detailsTable(quotationRows(q));

  const teamHtml = `
    <div style="font-family:Arial,sans-serif;color:#2E3440">
      <h2 style="color:#1F3A5F">New quotation request</h2>
      <p>Reply to this email to respond to the customer directly.</p>
      ${table}
      <p style="color:#4B5563;font-size:12px">Request ID: ${escapeHtml(requestId)}</p>
    </div>`;

  const customerHtml = `
    <div style="font-family:Arial,sans-serif;color:#2E3440">
      <p>Dear ${escapeHtml(q.name)},</p>
      <p>Thank you for your quotation request. Our team will review your requirements and
      send your quotation to this email address.</p>
      <p>Here is a copy of the details you submitted:</p>
      ${table}
      <p>If anything needs to change, simply reply to this email.</p>
      <p>Regards,<br/>NRM Global Inspection</p>
    </div>`;

  await Promise.all([
    sendEmail({
      to: teamEmail,
      subject: `New quotation request from ${q.name} (${q.styles} styles)`,
      html: teamHtml,
      replyTo: q.email,
    }),
    sendEmail({
      to: q.email,
      subject: "We've received your quotation request",
      html: customerHtml,
      replyTo: teamEmail,
    }),
  ]);
}

export async function createQuotationRequest(userId: string, input: QuotationInput) {
  const recent = await prisma.quotationRequest.count({
    where: { userId, createdAt: { gte: oneHourAgo() } },
  });
  if (recent >= MAX_REQUESTS_PER_HOUR) throw new RateLimitError();

  const request = await prisma.quotationRequest.create({
    data: { ...input, userId },
  });

  await notify(input, request.id);

  return request;
}
