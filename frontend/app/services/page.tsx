import Link from "next/link";

const services = [
  {
    title: "Product Quality Inspection",
    slug: "product-quality-inspection",
    description:
      "On-site inspections to verify product quality, quantity, packaging, and compliance.",
  },
  {
    title: "Factory Audit",
    slug: "factory-audit",
    description:
      "Comprehensive factory evaluations covering capability, systems, and compliance.",
  },
  {
    title: "Merchandising",
    slug: "merchandising",
    description:
      "Production coordination, order tracking, and shipment follow-ups.",
  },
];

export default function ServicesPage() {
  return (
    <section className="bg-brand-surface py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-20 max-w-3xl">
          <h1 className="text-4xl font-extrabold text-brand-primary">
            Our Services
          </h1>
          <p className="mt-4 text-brand-muted text-lg">
            Independent inspection and audit services designed to protect
            your supply chain and ensure compliance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group bg-white border border-brand-border rounded-2xl p-8 shadow-sm
              transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold text-brand-primary mb-4">
                {service.title}
              </h3>
              <p className="text-brand-muted leading-relaxed">
                {service.description}
              </p>

              <span className="inline-block mt-6 text-brand-primary font-semibold group-hover:underline">
                Learn more →
              </span>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}