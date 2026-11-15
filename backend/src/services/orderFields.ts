// Fields and helpers shared by the Get Quotation and Request Inspection forms.
import { escapeHtml } from "../utils/email";

export const INSPECTION_LEVELS: Record<string, string> = {
  I: "Level I",
  II: "Level II",
  III: "Level III",
};

export const MAX_REQUESTS_PER_HOUR = 5;

export type Errors = Record<string, string>;

export type OrderFields = {
  name: string;
  email: string;
  phone: string;
  styles: number;
  poNumber: string | null;
  poQuantity: number;
  inspectionLevel: string;
  pomCount: number;
  aqlCritical: string;
  aqlMajor: string;
  aqlMinor: string;
  specialRequirements: string | null;
};

export class ValidationError extends Error {
  constructor(public fields: Errors) {
    super("Please check the highlighted fields.");
  }
}

export class RateLimitError extends Error {
  constructor() {
    super("You have sent several requests in the last hour. Please try again later.");
  }
}

export function text(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export function toNumber(value: unknown): number | null {
  if (typeof value === "number") return value;
  if (typeof value === "string" && value.trim() !== "") return Number(value);
  return null;
}

// Validates the fields both forms share. Adds messages to `errors`; the caller throws.
export function validateOrderFields(
  b: any,
  errors: Errors,
  options: { poNumberRequired: boolean; specialRequirementsRequired: boolean }
): OrderFields {
  const name = text(b.name);
  if (!name) errors.name = "Name is required.";
  else if (name.length > 100) errors.name = "Name is too long.";

  const email = text(b.email);
  if (!email) errors.email = "Email is required.";
  else if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    errors.email = "Enter a valid email address.";

  const phone = text(b.phone);
  if (!phone) errors.phone = "Contact number is required.";
  else if (!/^\+?[\d\s\-()]{7,20}$/.test(phone)) errors.phone = "Enter a valid contact number.";

  const styles = toNumber(b.styles);
  if (styles === null) errors.styles = "Number of references / styles is required.";
  else if (!Number.isInteger(styles) || styles < 1 || styles > 100000)
    errors.styles = "Enter a whole number of 1 or more.";

  const poNumber = text(b.poNumber);
  if (!poNumber && options.poNumberRequired) errors.poNumber = "Purchase order number is required.";
  else if (poNumber.length > 100) errors.poNumber = "Purchase order number is too long.";

  const poQuantity = toNumber(b.poQuantity);
  if (poQuantity === null) errors.poQuantity = "Purchase order quantity is required.";
  else if (!Number.isInteger(poQuantity) || poQuantity < 1 || poQuantity > 100000000)
    errors.poQuantity = "Enter a whole number of 1 or more.";

  const inspectionLevel = text(b.inspectionLevel);
  if (!INSPECTION_LEVELS[inspectionLevel]) errors.inspectionLevel = "Select an inspection level.";

  const pomCount = toNumber(b.pomCount);
  if (pomCount === null) errors.pomCount = "Points of measurement is required.";
  else if (!Number.isInteger(pomCount) || pomCount < 0 || pomCount > 10000)
    errors.pomCount = "Enter a whole number of 0 or more.";

  const aql: Record<"aqlCritical" | "aqlMajor" | "aqlMinor", string> = {
    aqlCritical: text(b.aqlCritical),
    aqlMajor: text(b.aqlMajor),
    aqlMinor: text(b.aqlMinor),
  };
  const aqlLabels = { aqlCritical: "Critical", aqlMajor: "Major", aqlMinor: "Minor" };
  for (const key of Object.keys(aql) as (keyof typeof aql)[]) {
    if (!aql[key]) errors[key] = `${aqlLabels[key]} AQL is required.`;
    else if (aql[key].length > 20) errors[key] = "Keep this under 20 characters.";
  }

  const specialRequirements = text(b.specialRequirements);
  if (!specialRequirements && options.specialRequirementsRequired)
    errors.specialRequirements = "Special requirements are required.";
  else if (specialRequirements.length > 2000)
    errors.specialRequirements = "Keep this under 2000 characters.";

  return {
    name,
    email,
    phone,
    styles: styles as number,
    poNumber: poNumber || null,
    poQuantity: poQuantity as number,
    inspectionLevel,
    pomCount: pomCount as number,
    ...aql,
    specialRequirements: specialRequirements || null,
  };
}

export function orderRows(f: OrderFields): [string, string][] {
  return [
    ["Name", f.name],
    ["Email", f.email],
    ["Contact number", f.phone],
    ["Number of references / styles", String(f.styles)],
    ["Purchase order number", f.poNumber ?? "Not provided"],
    ["Purchase order quantity", String(f.poQuantity)],
    ["Inspection level", INSPECTION_LEVELS[f.inspectionLevel]],
    ["Points of measurement (POM)", String(f.pomCount)],
    ["AQL - Critical", f.aqlCritical],
    ["AQL - Major", f.aqlMajor],
    ["AQL - Minor", f.aqlMinor],
  ];
}

export function detailsTable(rows: [string, string][]): string {
  const body = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 12px;border:1px solid #D6DBE1;background:#F3F5F7;font-weight:600;width:40%">${escapeHtml(label)}</td>` +
        `<td style="padding:8px 12px;border:1px solid #D6DBE1;white-space:pre-wrap">${escapeHtml(value)}</td></tr>`
    )
    .join("");
  return `<table style="border-collapse:collapse;width:100%;max-width:640px;font-family:Arial,sans-serif;font-size:14px">${body}</table>`;
}

export function teamEmailAddress(): string {
  return process.env.QUOTE_NOTIFY_EMAIL || "rahul@nrminspection.com";
}

export function oneHourAgo(): Date {
  return new Date(Date.now() - 60 * 60 * 1000);
}
