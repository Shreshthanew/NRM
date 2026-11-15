import Link from "next/link";

export const metadata = {
  title: "About Us",
};

// One type scale for every About page:
//   page title    text-5xl md:text-6xl font-bold
//   section title text-3xl md:text-4xl font-bold
//   statement     text-2xl md:text-3xl font-semibold
//   item title    text-xl font-semibold
//   body          text-lg leading-relaxed

const services = [
  "Pre-Production Inspection (PPI)",
  "During Production Inspection (DPI)",
  "Final Random Inspection (FRI)",
  "Container Loading Supervision (CLS)",
  "Factory Audits",
  "Supplier Capability Assessments",
  "Quality Management System Audits",
];

const reasons = [
  {
    title: "Independent & Unbiased",
    text: "As a third-party inspection company, our assessments are objective, transparent, and focused solely on delivering accurate results.",
  },
  {
    title: "Experienced Professionals",
    text: "Our inspectors and auditors bring industry knowledge, technical expertise, and hands-on experience across multiple product categories and manufacturing sectors.",
  },
  {
    title: "Faster Decision Making",
    text: "Timely inspections and detailed reporting enable clients to identify issues early and take corrective action before products leave the factory.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Intro */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-20 md:pt-24">
          <h1 className="text-5xl md:text-6xl font-bold text-brand-primary">
            About Us
          </h1>
          <p className="mt-5 max-w-3xl text-2xl md:text-3xl font-semibold leading-snug text-brand-secondary">
            Your Trusted Partner in Quality Assurance &amp; Factory Audits
          </p>

          <div className="mt-10 max-w-3xl space-y-6 text-lg leading-relaxed text-brand-muted">
            <p>
              At <strong className="font-semibold text-brand-primary">NORM GLOBAL</strong>,
              we help global brands, importers, retailers, and manufacturers
              safeguard product quality, supplier performance, and supply chain
              reliability through independent third-party inspection and audit
              services.
            </p>
            <p>
              In today&apos;s competitive marketplace, quality failures, supplier
              inconsistencies, and compliance risks can lead to costly delays,
              reputational damage, and customer dissatisfaction. Our mission is to
              provide transparent, accurate, and reliable quality assurance
              solutions that empower businesses to make informed decisions with
              confidence.
            </p>
            <p>
              With a commitment to integrity, professionalism, and excellence, we
              serve as our clients&apos; trusted eyes and ears on the factory
              floor. From production monitoring to comprehensive factory
              evaluations, we deliver actionable insights that help prevent
              defects, reduce risk, and ensure compliance before shipment.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-brand-surface border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-6 py-20 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">
              What We Do
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-brand-muted">
              We provide independent quality control and factory assessment
              services across a wide range of industries, helping clients
              maintain the highest standards throughout their supply chain.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-brand-text">Our Services</h3>
            <ul className="mt-4 divide-y divide-brand-border border-y border-brand-border">
              {services.map((service) => (
                <li key={service} className="py-4 text-lg text-brand-text">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">
            Why Choose Us
          </h2>

          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {reasons.map((reason) => (
              <div key={reason.title} className="border-t-2 border-brand-primary pt-6">
                <h3 className="text-xl font-semibold text-brand-text">
                  {reason.title}
                </h3>
                <p className="mt-3 text-lg leading-relaxed text-brand-muted">
                  {reason.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="bg-brand-primary text-white">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <h2 className="text-3xl md:text-4xl font-bold">Our Commitment</h2>
          <p className="mt-6 text-2xl md:text-3xl font-semibold leading-snug">
            We believe quality is not merely a checkpoint. It is a promise.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-white/80">
            A promise that products are manufactured according to
            specifications, suppliers operate responsibly, and customers receive
            what they expect. Through every inspection, audit, and assessment, we
            are committed to delivering the confidence our clients need to grow
            their businesses and protect their brands.
          </p>
        </div>
      </section>

      {/* Next steps */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-14 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/about/mission-vision"
            className="text-lg font-semibold text-brand-primary hover:underline"
          >
            Read our mission &amp; vision →
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-brand-primary text-lg text-white font-semibold hover:bg-brand-secondary transition-colors"
          >
            Request an Inspection
          </Link>
        </div>
      </section>
    </>
  );
}
