import Link from "next/link";

export const metadata = {
  title: "Assurance",
};

// Same type scale as the About Us pages (see app/about/page.tsx).

const benefits = [
  {
    title: "Uncover hidden risks",
    text: "Spot weaknesses in production, quality control, or working conditions that a final inspection alone would miss.",
  },
  {
    title: "Validate supplier systems",
    text: "Confirm that a supplier's quality procedures exist, are documented, and are actually followed on the factory floor.",
  },
  {
    title: "See your supply chain clearly",
    text: "Get consistent, comparable reports on every factory, so sourcing decisions are based on evidence rather than assumptions.",
  },
  {
    title: "Support compliance",
    text: "Show customers and authorities that your suppliers meet your quality, social, and ethical requirements.",
  },
];

const assuranceServices = [
  {
    name: "Factory Audits",
    text: "A full on-site evaluation of a manufacturing facility, covering infrastructure, equipment, production processes, workforce, and in-house quality controls.",
  },
  {
    name: "Supplier Capability Assessments",
    text: "Find out whether a new or existing supplier can meet your specifications, volumes, and lead times before you commit to an order.",
  },
  {
    name: "Quality Management System Audits",
    text: "A review of the supplier's documented quality procedures and records, and how consistently they are applied in day-to-day production.",
  },
  {
    name: "Risk Identification & Improvement Plans",
    text: "Findings ranked by risk level, with practical recommendations and corrective actions agreed with the supplier.",
  },
];

export default function AssurancePage() {
  return (
    <>
      {/* Intro */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-20 md:pt-24">
          <p className="text-lg text-brand-muted">
            <Link href="/services" className="hover:text-brand-primary hover:underline">
              Services
            </Link>
            <span className="mx-2">/</span>
            <span className="text-brand-text">Assurance</span>
          </p>

          <h1 className="mt-4 text-5xl md:text-6xl font-bold text-brand-primary">
            Assurance
          </h1>
          <p className="mt-5 max-w-3xl text-2xl md:text-3xl font-semibold leading-snug text-brand-secondary">
            Find and reduce risk in your suppliers&apos; factories, systems, and
            processes.
          </p>
          <p className="mt-10 max-w-3xl text-lg leading-relaxed text-brand-muted">
            Inspection tells you whether a batch of products is right. Assurance
            tells you whether the supplier behind it can get it right every
            time. We audit and assess the factories, quality systems, and working
            practices in your supply chain, so you can rely on your suppliers and
            act on risks before they turn into failed shipments.
          </p>
        </div>
      </section>

      {/* What is Assurance? */}
      <section className="bg-brand-surface border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-6 py-20 grid gap-8 lg:grid-cols-2 lg:gap-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">
            What is Assurance?
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-brand-muted">
            <p>
              Assurance is a risk-based way of checking how products are made,
              not only what comes off the production line. Instead of looking at
              a finished product alone, an assurance audit examines the
              processes, procedures, and controls a supplier uses to deliver
              quality, safety, and compliance.
            </p>
            <p>
              The result is a clear, evidence-based picture of each
              supplier&apos;s strengths and weaknesses, giving you more
              transparency and accountability across your supply chain.
            </p>
          </div>
        </div>
      </section>

      {/* Why Assurance Matters */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">
            Why Assurance Matters
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-brand-muted">
            Global sourcing means working with suppliers you rarely see in
            person. Buyers, retailers, and regulators expect you to know how and
            where your products are made, and a single weak supplier can lead to
            delays, recalls, or damage to your brand.
          </p>

          <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="border-t-2 border-brand-primary pt-6">
                <h3 className="text-xl font-semibold text-brand-text">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-lg leading-relaxed text-brand-muted">
                  {benefit.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Can Help */}
      <section className="bg-brand-surface border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-6 py-20 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">
              How We Can Help
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-brand-muted">
              Our auditors visit your suppliers&apos; facilities and assess them
              against your requirements and recognised industry practices.
              Every engagement ends with a detailed report that ranks findings by
              severity and sets out clear corrective actions.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-brand-text">
              Our Assurance Services
            </h3>
            <ul className="mt-4 divide-y divide-brand-border border-y border-brand-border">
              {assuranceServices.map((service) => (
                <li key={service.name} className="py-5">
                  <p className="text-lg font-semibold text-brand-text">
                    {service.name}
                  </p>
                  <p className="mt-1 text-lg leading-relaxed text-brand-muted">
                    {service.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="bg-brand-primary text-white">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <h2 className="text-3xl md:text-4xl font-bold">
            Need to assess a supplier or factory?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/80">
            Tell us about the supplier and your requirements, and we&apos;ll
            recommend the right audit.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center px-6 py-3 rounded-md bg-white text-lg text-brand-primary font-semibold hover:bg-brand-surface transition-colors"
          >
            Request an Assessment
          </Link>
        </div>
      </section>

      {/* Related services */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-14 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/services"
            className="text-lg font-semibold text-brand-primary hover:underline"
          >
            ← All services
          </Link>
          <Link
            href="/services/product-quality-inspection"
            className="text-lg font-semibold text-brand-primary hover:underline"
          >
            Related: Product Quality Inspection →
          </Link>
        </div>
      </section>
    </>
  );
}
