import Link from "next/link";

const resources = [
  {
    title: "Inspection & Audit Guides",
    description:
      "Practical guides to help you understand inspection processes, compliance requirements, and quality assurance best practices.",
    cta: "View Guides",
    href: "#",
  },
  {
    title: "Sample Inspection Reports",
    description:
      "Explore sample reports to understand our reporting format, transparency, and level of detail delivered to clients.",
    cta: "View Samples",
    href: "#",
  },
  {
    title: "FAQs & Support",
    description:
      "Answers to commonly asked questions about inspections, audits, timelines, and global compliance standards.",
    cta: "Read FAQs",
    href: "#",
  },
  {
    title: "Coverage & Standards",
    description:
      "Learn about our global coverage, inspection locations, and international standards we operate against.",
    cta: "Explore Coverage",
    href: "#",
  },
];

export default function ResourcesPage() {
  return (
    <section className="bg-brand-surface">
      <div className="max-w-7xl mx-auto px-6 py-28">

        {/* Header */}
        <div className="max-w-3xl mb-20">
          <h1 className="text-4xl font-extrabold text-brand-primary">
            Resources
          </h1>
          <div className="w-20 h-1 bg-brand-secondary mt-4 rounded-full" />
          <p className="mt-6 text-lg text-brand-muted leading-relaxed">
            Access helpful resources designed to give you clarity, confidence,
            and transparency across inspection, audit, and compliance processes.
          </p>
        </div>

        {/* Resource Cards */}
        <div className="grid md:grid-cols-2 gap-12">
          {resources.map((item) => (
            <div
              key={item.title}
              className="group relative bg-white border border-brand-border rounded-2xl p-10 shadow-sm
              transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-surface opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />

              <div className="relative z-10">
                <h2 className="text-2xl font-bold text-brand-primary">
                  {item.title}
                </h2>

                <p className="mt-4 text-brand-muted leading-relaxed">
                  {item.description}
                </p>

                <Link
                  href={item.href}
                  className="inline-flex items-center mt-6 font-semibold text-brand-primary hover:underline"
                >
                  {item.cta} →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-md
            bg-brand-primary text-white font-semibold hover:bg-brand-secondary transition"
          >
            Need Help? Contact Our Experts
          </Link>
        </div>

      </div>
    </section>
  );
}