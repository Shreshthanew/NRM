import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/server-auth";
import RequestForm from "@/components/RequestForm";

export const metadata = {
  title: "Request Inspection",
};

export default async function RequestInspectionPage() {
  const user = await getCurrentUser();

  // Only logged-in users can request an inspection.
  if (!user) {
    redirect(`/login?next=${encodeURIComponent("/request-inspection")}`);
  }

  return (
    <section className="bg-white">
      <div className="max-w-4xl mx-auto px-6 pt-20 pb-24 md:pt-24">
        <h1 className="text-5xl md:text-6xl font-bold text-brand-primary">
          Request Inspection
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-brand-muted">
          Tell us about your order and when you need it inspected. Our team will
          confirm the inspection date with you by email.
        </p>

        <RequestForm kind="inspection" initialName={user.name ?? ""} initialEmail={user.email ?? ""} />
      </div>
    </section>
  );
}
