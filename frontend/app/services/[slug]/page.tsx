import Link from "next/link";

const serviceData: Record<string, any> = {
  "product-quality-inspection": {
    title: "Product Quality Inspection",
    intro:
      "Independent on-site inspections to ensure products meet quality, quantity, and compliance requirements.",
    points: [
      "Pre-production, during production, and pre-shipment inspections",
      "Verification of quantity, packaging, and labeling",
      "Defect classification based on AQL standards",
      "Detailed inspection reports with photos",
    ],
  },
  "factory-audit": {
    title: "Factory Audit",
    intro:
      "Comprehensive evaluation of factories to assess capability, compliance, and ethical practices.",
    points: [
      "Quality management system assessment",
      "Production capability and capacity evaluation",
      "Social and ethical compliance checks",
      "Risk identification and improvement recommendations",
    ],
  },
  "merchandising": {
    title: "Merchandising",
    intro:
      "End-to-end production coordination to ensure smooth manufacturing and timely delivery.",
    points: [
      "Order follow-up and production tracking",
      "Sampling coordination",
      "Timeline and shipment monitoring",
      "Supplier communication and reporting",
    ],
  },
};

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const normalizedSlug = slug.toLowerCase();
  const service = serviceData[normalizedSlug];

  if (!service) {
    return (
      <div className="py-40 text-center text-brand-muted">
        Service not found.
      </div>
    );
  }

  return (
    <section className="bg-brand-surface py-28">
      <div className="max-w-4xl mx-auto px-6">

        {/* Breadcrumb */}
        <p className="text-sm text-brand-muted mb-6">
          <Link href="/services" className="hover:underline">
            Services
          </Link>{" "}
          / {service.title}
        </p>

        {/* Header */}
        <h1 className="text-4xl font-extrabold text-brand-primary mb-6">
          {service.title}
        </h1>
        <p className="text-lg text-brand-muted mb-12 leading-relaxed">
          {service.intro}
        </p>

        {/* Content */}
        <div className="bg-white border border-brand-border rounded-2xl p-10 shadow-sm">
          <h2 className="text-2xl font-bold text-brand-text mb-6">
            What This Service Includes
          </h2>

          <ul className="space-y-4 text-brand-muted">
            {service.points.map((point: string) => (
              <li key={point}>• {point}</li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-md
            bg-brand-primary text-white font-semibold hover:bg-brand-secondary transition"
          >
            Request a Quotation
          </Link>
        </div>

      </div>
    </section>
  );
}