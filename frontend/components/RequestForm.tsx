"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// One form for both "Get a Quotation" and "Request Inspection".
export type RequestKind = "quotation" | "inspection";

type Values = {
  name: string;
  email: string;
  phone: string;
  styles: string;
  poNumber: string;
  poQuantity: string;
  inspectionLevel: string;
  pomCount: string;
  aqlCritical: string;
  aqlMajor: string;
  aqlMinor: string;
  specialRequirements: string;
  // quotation only
  manDays: string;
  inspectionsPerMonth: string;
  // inspection only
  inspectionDate: string;
};

type Field = keyof Values;
type Errors = Partial<Record<Field, string>>;

const COMMON_REQUIRED: Field[] = [
  "name",
  "email",
  "phone",
  "styles",
  "poQuantity",
  "inspectionLevel",
  "pomCount",
  "aqlCritical",
  "aqlMajor",
  "aqlMinor",
];

const CONFIG: Record<
  RequestKind,
  { endpoint: string; path: string; submitLabel: string; required: Field[] }
> = {
  quotation: {
    endpoint: "/api/quotations",
    path: "/quotation",
    submitLabel: "Request Quotation",
    required: [...COMMON_REQUIRED, "inspectionsPerMonth"],
  },
  inspection: {
    endpoint: "/api/inspection-requests",
    path: "/request-inspection",
    submitLabel: "Request Inspection",
    // Every field is mandatory for an inspection request.
    required: [...COMMON_REQUIRED, "poNumber", "specialRequirements", "inspectionDate"],
  },
};

function todayLocal(): string {
  const d = new Date();
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

function formatDate(value: string): string {
  const d = new Date(`${value}T00:00:00`);
  return Number.isNaN(d.getTime())
    ? value
    : d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

function inputClass(hasError: boolean) {
  return `w-full rounded-md border bg-white px-4 py-3 text-lg text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-secondary ${
    hasError ? "border-red-500" : "border-brand-border"
  }`;
}

function FieldError({ message }: { message?: string }) {
  return message ? <p className="mt-1 text-sm text-red-600">{message}</p> : null;
}

function Label({
  htmlFor,
  children,
  required,
  note,
}: {
  htmlFor: string;
  children: React.ReactNode;
  required: boolean;
  note?: string;
}) {
  return (
    <label htmlFor={htmlFor} className="block text-base font-semibold text-brand-text">
      {children}
      {required ? (
        <span className="text-red-600"> *</span>
      ) : (
        <span className="font-normal text-brand-muted"> (optional)</span>
      )}
      {note && <span className="block font-normal text-brand-muted">({note})</span>}
    </label>
  );
}

export default function RequestForm({
  kind,
  initialName,
  initialEmail,
}: {
  kind: RequestKind;
  initialName: string;
  initialEmail: string;
}) {
  const config = CONFIG[kind];
  const router = useRouter();
  const [values, setValues] = useState<Values>({
    name: initialName,
    email: initialEmail,
    phone: "",
    styles: "",
    poNumber: "",
    poQuantity: "",
    inspectionLevel: "",
    pomCount: "",
    aqlCritical: "",
    aqlMajor: "",
    aqlMinor: "",
    specialRequirements: "",
    manDays: "",
    inspectionsPerMonth: "",
    inspectionDate: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [formError, setFormError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState<{ name: string; email: string; inspectionDate?: string } | null>(null);
  const [minDate, setMinDate] = useState<string>();

  // Set after mount so the server and browser agree on the initial HTML.
  useEffect(() => setMinDate(todayLocal()), []);

  const isRequired = (field: Field) => config.required.includes(field);

  function update(key: Field) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setValues((v) => ({ ...v, [key]: e.target.value }));
      if (errors[key]) setErrors((err) => ({ ...err, [key]: undefined }));
    };
  }

  function validate(): Errors {
    const found: Errors = {};
    for (const key of config.required) {
      if (!values[key].trim()) found[key] = "This field is required.";
    }
    if (values.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      found.email = "Enter a valid email address.";
    }
    if (kind === "inspection" && values.inspectionDate && values.inspectionDate < todayLocal()) {
      found.inspectionDate = "Choose today or a later date.";
    }
    return found;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormError("");

    const clientErrors = validate();
    if (Object.keys(clientErrors).length > 0) {
      setErrors(clientErrors);
      setFormError("Please fill in the highlighted fields.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch(config.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(values),
      });
      const data = await res.json().catch(() => ({}));

      if (res.status === 401) {
        router.push(`/login?next=${encodeURIComponent(config.path)}`);
        return;
      }
      if (!res.ok) {
        if (data.fields) setErrors(data.fields);
        setFormError(data.message || "Something went wrong. Please try again.");
        return;
      }

      setSubmitted({ name: data.name, email: data.email, inspectionDate: data.inspectionDate });
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setFormError("Could not reach the server. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  function textInput(field: Field, props: React.InputHTMLAttributes<HTMLInputElement> = {}) {
    return (
      <>
        <input
          id={field}
          name={field}
          value={values[field]}
          onChange={update(field)}
          className={`mt-2 ${inputClass(!!errors[field])}`}
          {...props}
        />
        <FieldError message={errors[field]} />
      </>
    );
  }

  if (submitted) {
    return (
      <div className="mt-12 rounded-xl border border-brand-border bg-brand-surface p-8 md:p-10">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">
          Thank you, {submitted.name}.
        </h2>
        {kind === "quotation" ? (
          <p className="mt-5 text-lg leading-relaxed text-brand-muted">
            We&apos;ve received your quotation request. Our team will review your
            requirements and send your quotation to{" "}
            <strong className="font-semibold text-brand-text">{submitted.email}</strong>.
          </p>
        ) : (
          <p className="mt-5 text-lg leading-relaxed text-brand-muted">
            We&apos;ve received your inspection request for{" "}
            <strong className="font-semibold text-brand-text">
              {formatDate(submitted.inspectionDate ?? "")}
            </strong>
            . Our team will confirm the inspection date with you at{" "}
            <strong className="font-semibold text-brand-text">{submitted.email}</strong>.
            The final date can vary according to availability.
          </p>
        )}
        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center px-6 py-3 rounded-md bg-brand-primary text-lg text-white font-semibold hover:bg-brand-secondary transition-colors"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="mt-12 space-y-14">
      {/* Your details */}
      <fieldset>
        <legend className="text-2xl font-semibold text-brand-primary">Your Details</legend>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div>
            <Label htmlFor="name" required={isRequired("name")}>Name</Label>
            {textInput("name", { type: "text", autoComplete: "name" })}
          </div>
          <div>
            <Label htmlFor="email" required={isRequired("email")}>Email</Label>
            {textInput("email", { type: "email", autoComplete: "email" })}
          </div>
          <div>
            <Label htmlFor="phone" required={isRequired("phone")}>Contact Number</Label>
            {textInput("phone", { type: "tel", autoComplete: "tel", placeholder: "+91 98765 43210" })}
          </div>
        </div>
      </fieldset>

      {/* Order details */}
      <fieldset>
        <legend className="text-2xl font-semibold text-brand-primary">Order Details</legend>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div>
            <Label htmlFor="styles" required={isRequired("styles")}>Number of References / Styles</Label>
            {textInput("styles", { type: "number", min: 1, step: 1, inputMode: "numeric" })}
          </div>
          <div>
            <Label htmlFor="poQuantity" required={isRequired("poQuantity")}>Purchase Order Quantity</Label>
            {textInput("poQuantity", { type: "number", min: 1, step: 1, inputMode: "numeric" })}
          </div>
          <div>
            <Label htmlFor="poNumber" required={isRequired("poNumber")}>Purchase Order Number</Label>
            {textInput("poNumber", { type: "text" })}
          </div>
        </div>
      </fieldset>

      {/* Inspection requirements */}
      <fieldset>
        <legend className="text-2xl font-semibold text-brand-primary">Inspection Requirements</legend>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div>
            <Label htmlFor="inspectionLevel" required={isRequired("inspectionLevel")}>Inspection Level</Label>
            <select id="inspectionLevel" name="inspectionLevel" value={values.inspectionLevel} onChange={update("inspectionLevel")} className={`mt-2 ${inputClass(!!errors.inspectionLevel)}`}>
              <option value="">Select a level</option>
              <option value="I">Level I</option>
              <option value="II">Level II</option>
              <option value="III">Level III</option>
            </select>
            <FieldError message={errors.inspectionLevel} />
          </div>

          {kind === "inspection" && (
            <div>
              <Label htmlFor="inspectionDate" required={isRequired("inspectionDate")} note="Date can vary according to availability">
                Date of Inspection
              </Label>
              {textInput("inspectionDate", { type: "date", min: minDate })}
            </div>
          )}

          {kind === "quotation" && (
            <div>
              <Label htmlFor="inspectionsPerMonth" required={isRequired("inspectionsPerMonth")}>Inspections Required per Month</Label>
              <select id="inspectionsPerMonth" name="inspectionsPerMonth" value={values.inspectionsPerMonth} onChange={update("inspectionsPerMonth")} className={`mt-2 ${inputClass(!!errors.inspectionsPerMonth)}`}>
                <option value="">Select an option</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="FREQUENT">Frequently (more than 2)</option>
              </select>
              <FieldError message={errors.inspectionsPerMonth} />
            </div>
          )}

          <div>
            <Label htmlFor="pomCount" required={isRequired("pomCount")}>Measurements: Points of Measurement (POM)</Label>
            {textInput("pomCount", { type: "number", min: 0, step: 1, inputMode: "numeric" })}
          </div>

          {kind === "quotation" && (
            <div>
              <Label htmlFor="manDays" required={isRequired("manDays")}>Number of Man-Days</Label>
              {textInput("manDays", { type: "number", min: 0, step: 0.5, inputMode: "decimal" })}
            </div>
          )}
        </div>

        <div className="mt-8">
          <p className="block text-base font-semibold text-brand-text">
            AQL Required<span className="text-red-600"> *</span>
          </p>
          <div className="mt-2 grid gap-6 sm:grid-cols-3">
            {(
              [
                ["aqlCritical", "Critical", "e.g. 0"],
                ["aqlMajor", "Major", "e.g. 2.5"],
                ["aqlMinor", "Minor", "e.g. 4.0"],
              ] as const
            ).map(([key, label, placeholder]) => (
              <div key={key}>
                <label htmlFor={key} className="block text-base text-brand-muted">
                  {label}
                </label>
                <input id={key} name={key} type="text" placeholder={placeholder} value={values[key]} onChange={update(key)} className={`mt-1 ${inputClass(!!errors[key])}`} />
                <FieldError message={errors[key]} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <Label htmlFor="specialRequirements" required={isRequired("specialRequirements")}>Special Requirements</Label>
          <textarea id="specialRequirements" name="specialRequirements" rows={4} value={values.specialRequirements} onChange={update("specialRequirements")} className={`mt-2 ${inputClass(!!errors.specialRequirements)}`} />
          <FieldError message={errors.specialRequirements} />
        </div>
      </fieldset>

      <div>
        {formError && <p className="mb-4 text-base font-semibold text-red-600">{formError}</p>}
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center justify-center px-8 py-4 rounded-md bg-brand-primary text-lg text-white font-semibold hover:bg-brand-secondary transition-colors disabled:opacity-60"
        >
          {submitting ? "Sending…" : config.submitLabel}
        </button>
      </div>
    </form>
  );
}
