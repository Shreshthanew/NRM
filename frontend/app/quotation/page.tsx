import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/server-auth";
import RequestForm from "@/components/RequestForm";

export const metadata = {
  title: "Get a Quotation",
};

export default async function QuotationPage() {
  const user = await getCurrentUser();

  // Only logged-in users can request a quotation.
  if (!user) {
    redirect(`/login?next=${encodeURIComponent("/quotation")}`);
  }

  return (
    <section className="bg-white">
      <div className="max-w-4xl mx-auto px-6 pt-20 pb-24 md:pt-24">
        <h1 className="text-5xl md:text-6xl font-bold text-brand-primary">
          Get a Quotation
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-brand-muted">
          Tell us about your order and inspection needs. Our team will prepare
          a quotation and send it to the email address you provide.
        </p>

        <RequestForm kind="quotation" initialName={user.name ?? ""} initialEmail={user.email ?? ""} />
      </div>
    </section>
  );
}
