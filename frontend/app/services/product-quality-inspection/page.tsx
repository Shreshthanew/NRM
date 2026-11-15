import Link from "next/link";

export const metadata = {
  title: "Product Quality Inspection",
};

// Same type scale as the About Us and Assurance pages (see app/about/page.tsx).

const benefits = [
  {
    title: "Catch defects early",
    text: "Find quality problems while there is still time to repair, rework, or replace the goods.",
  },
  {
    title: "Get what you ordered",
    text: "Confirm that quantities, materials, colours, and dimensions match your purchase order and approved sample.",
  },
  {
    title: "Protect your brand",
    text: "Stop faulty or non-compliant products from reaching your customers and damaging your reputation.",
  },
  {
    title: "Decide with facts",
    text: "Approve, hold, or reject a shipment based on a clear report rather than the supplier's word.",
  },
];

const inspections = [
  {
    name: "Pre-Production Inspection (PPI)",
    text: "Before production starts, we check raw materials, components, and the factory's preparation to confirm they match your specifications.",
  },
  {
    name: "During Production Inspection (DPI)",
    text: "When part of the order is complete, we inspect products from the line to catch defects early and confirm the schedule is on track.",
  },
  {
    name: "Final Random Inspection (FRI)",
    text: "When the order is finished and packed, we select a random sample using AQL sampling and inspect it against your requirements.",
  },
  {
    name: "Container Loading Supervision (CLS)",
    text: "We supervise loading at the factory or warehouse to confirm the right products, in the right quantity and condition, go into the container.",
  },
];

const checks = [
  {
    title: "Quantity",
    text: "Number of units and cartons checked against your purchase order.",
  },
  {
    title: "Workmanship",
    text: "Visual and workmanship defects, classified as critical, major, or minor.",
  },
  {
    title: "Specifications",
    text: "Measurements, materials, colours, and finish compared with your approved sample.",
  },
  {
    title: "Packaging & Labelling",
    text: "Retail packaging, labels, barcodes, and shipping marks.",
  },
  {
    title: "AQL Sampling",
    text: "Samples selected and results judged using internationally recognised AQL tables.",
  },
  {
    title: "Inspection Report",
    text: "A detailed report with photos of every finding, delivered within 24–48 hours.",
  },
];

const productCategories = [
  { title: "Softline", items: "Apparel & textiles, home furnishings" },
  {
    title: "Hard Goods",
    items: "Furniture, cutlery, decorative items, hand tools, tiles, kitchen accessories",
  },
  { title: "Children Toys", items: "Toys & juvenile products" },
  { title: "Electronics", items: "Lights, electric lamps, fans, remote devices" },
  { title: "Industrial Products", items: "Electric equipment, static equipment" },
];

export default function ProductQualityInspectionPage() {
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
            <span className="text-brand-text">Product Quality Inspection</span>
          </p>

          <h1 className="mt-4 text-5xl md:text-6xl font-bold text-brand-primary">
            Product Quality Inspection
          </h1>
          <p className="mt-5 max-w-3xl text-2xl md:text-3xl font-semibold leading-snug text-brand-secondary">
            Know your products are right before they leave the factory.
          </p>
          <p className="mt-10 max-w-3xl text-lg leading-relaxed text-brand-muted">
            We send independent inspectors to your supplier&apos;s factory to
            check your products against your specifications, your approved
            samples, and the requirements of your market. You get a clear report
            with photos, so you can approve the shipment, ask for rework, or stop
            it before it costs you money.
          </p>
        </div>
      </section>

      {/* What is Product Quality Inspection? */}
      <section className="bg-brand-surface border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-6 py-20 grid gap-8 lg:grid-cols-2 lg:gap-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">
            What is Product Quality Inspection?
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-brand-muted">
            <p>
              Product quality inspection is an independent, third-party check of
              your goods where they are made. Inspectors examine products at key
              stages of production, from raw materials to packed cartons, and
              record exactly what they find.
            </p>
            <p>
              We work for global brands, importers, retailers, and manufacturers
              who need an objective view of their orders, especially when the
              factory is far away.
            </p>
          </div>
        </div>
      </section>

      {/* Why Inspection Matters */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">
            Why Inspection Matters
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-brand-muted">
            Problems found after shipment are the most expensive to fix. By then
            the goods are paid for, in transit, or already with your customers.
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

      {/* Our Inspection Services */}
      <section className="bg-brand-surface border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-6 py-20 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">
              Our Inspection Services
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-brand-muted">
              Each inspection is timed to a stage of production, so you can
              choose the checks that fit your order and your level of risk.
            </p>
          </div>

          <ul className="divide-y divide-brand-border border-y border-brand-border">
            {inspections.map((inspection) => (
              <li key={inspection.name} className="py-5">
                <p className="text-lg font-semibold text-brand-text">
                  {inspection.name}
                </p>
                <p className="mt-1 text-lg leading-relaxed text-brand-muted">
                  {inspection.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What Every Inspection Covers */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">
            What Every Inspection Covers
          </h2>

          <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {checks.map((check) => (
              <div key={check.title} className="border-t-2 border-brand-primary pt-6">
                <h3 className="text-xl font-semibold text-brand-text">
                  {check.title}
                </h3>
                <p className="mt-3 text-lg leading-relaxed text-brand-muted">
                  {check.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products We Inspect */}
      <section className="bg-brand-surface border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">
            Products We Inspect
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-brand-muted">
            We inspect consumer and industrial products across these categories.
          </p>

          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
            {productCategories.map((category) => (
              <div key={category.title}>
                <h3 className="text-xl font-semibold text-brand-text">
                  {category.title}
                </h3>
                <p className="mt-2 text-lg leading-relaxed text-brand-muted">
                  {category.items}
                </p>
              </div>
            ))}
          </div>

          <Link
            href="/industries"
            className="mt-10 inline-block text-lg font-semibold text-brand-primary hover:underline"
          >
            Explore industries →
          </Link>
        </div>
      </section>

      {/* Call to action */}
      <section className="bg-brand-primary text-white">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to book an inspection?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/80">
            Tell us about your product, supplier, and shipment date, and
            we&apos;ll arrange the right inspection.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center px-6 py-3 rounded-md bg-white text-lg text-brand-primary font-semibold hover:bg-brand-surface transition-colors"
          >
            Request an Inspection
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
            href="/services/assurance"
            className="text-lg font-semibold text-brand-primary hover:underline"
          >
            Related: Assurance →
          </Link>
        </div>
      </section>
    </>
  );
}
