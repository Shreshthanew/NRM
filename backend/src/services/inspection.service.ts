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
  validateOrderFields,
  ValidationError,
  type Errors,
} from "./orderFields";

export { RateLimitError, ValidationError };

export type InspectionInput = OrderFields & {
  poNumber: string;
  specialRequirements: string;
  inspectionDate: string; // YYYY-MM-DD
};

const DAY_MS = 24 * 60 * 60 * 1000;

function parseDate(value: string): Date | null {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return null;
  const date = new Date(`${value}T00:00:00Z`);
  return Number.isNaN(date.getTime()) || date.toISOString().slice(0, 10) !== value ? null : date;
}

export function formatDate(value: string): string {
  const date = parseDate(value);
  return date
    ? date.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" })
    : value;
}

export function validateInspection(body: any): InspectionInput {
  const b = body ?? {};
  const errors: Errors = {};

  // Every field on the Request Inspection form is mandatory.
  const fields = validateOrderFields(b, errors, {
    poNumberRequired: true,
    specialRequirementsRequired: true,
  });

  const inspectionDate = text(b.inspectionDate);
  const date = parseDate(inspectionDate);
  if (!inspectionDate) errors.inspectionDate = "Date of inspection is required.";
  else if (!date) errors.inspectionDate = "Enter a valid date.";
  // Allow one day of slack so users ahead of UTC (e.g. India) can pick "today".
  else if (date.getTime() < Date.now() - 2 * DAY_MS)
    errors.inspectionDate = "Choose today or a later date.";
  else if (date.getTime() > Date.now() + 730 * DAY_MS)
    errors.inspectionDate = "Choose a date within the next two years.";

  if (Object.keys(errors).length > 0) throw new ValidationError(errors);

  return {
    ...fields,
    poNumber: fields.poNumber as string,
    specialRequirements: fields.specialRequirements as string,
    inspectionDate,
  };
}

function inspectionRows(i: InspectionInput): [string, string][] {
  return [
    ...orderRows(i),
    ["Special requirements", i.specialRequirements],
    ["Requested date of inspection", `${formatDate(i.inspectionDate)} (can vary according to availability)`],
  ];
}

async function notify(i: InspectionInput, requestId: string) {
  const teamEmail = teamEmailAddress();
  const table = detailsTable(inspectionRows(i));
  const date = formatDate(i.inspectionDate);

  const teamHtml = `
    <div style="font-family:Arial,sans-serif;color:#2E3440">
      <h2 style="color:#1F3A5F">New inspection request</h2>
      <p>Reply to this email to confirm the inspection date with the customer.</p>
      ${table}
      <p style="color:#4B5563;font-size:12px">Request ID: ${escapeHtml(requestId)}</p>
    </div>`;

  const customerHtml = `
    <div style="font-family:Arial,sans-serif;color:#2E3440">
      <p>Dear ${escapeHtml(i.name)},</p>
      <p>Thank you for your inspection request for ${escapeHtml(date)}. Our team will confirm
      the inspection date with you by email. Please note that the date can vary according
      to inspector availability.</p>
      <p>Here is a copy of the details you submitted:</p>
      ${table}
      <p>If anything needs to change, simply reply to this email.</p>
      <p>Regards,<br/>NRM Global Inspection</p>
    </div>`;

  await Promise.all([
    sendEmail({
      to: teamEmail,
      subject: `New inspection request from ${i.name} (PO ${i.poNumber}, ${date})`,
      html: teamHtml,
      replyTo: i.email,
    }),
    sendEmail({
      to: i.email,
      subject: "We've received your inspection request",
      html: customerHtml,
      replyTo: teamEmail,
    }),
  ]);
}

export async function createInspectionRequest(userId: string, input: InspectionInput) {
  const recent = await prisma.inspectionRequest.count({
    where: { userId, createdAt: { gte: oneHourAgo() } },
  });
  if (recent >= MAX_REQUESTS_PER_HOUR) throw new RateLimitError();

  const request = await prisma.inspectionRequest.create({
    data: {
      ...input,
      inspectionDate: new Date(`${input.inspectionDate}T00:00:00Z`),
      userId,
    },
  });

  await notify(input, request.id);

  return request;
}
