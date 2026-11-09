import { notFound } from "next/navigation";
import Link from "next/link";

const industryData: Record<
  string,
  {
    title: string;
    description: string;
    items: string[];
  }
> = {
  "softline": {
    title: "Softline",
    description:
      "Inspection and compliance services tailored for apparel, textiles, and home furnishing products.",
    items: ["Apparel & Textiles", "Home Furnishings"],
  },

  "hard-goods": {
    title: "Hard Goods",
    description:
      "Comprehensive inspection solutions for durable and utility-based consumer products.",
    items: [
      "Furniture",
      "Cutlery",
      "Decorative Items",
      "Hand Tools",
      "Tiles",
      "Kitchen Accessories",
    ],
  },

  "electronics": {
    title: "Electronics",
    description:
      "Safety, performance, and compliance inspections for electrical and electronic products.",
    items: ["Lights", "Electric Lamps", "Fans", "Remote Devices"],
  },

  "children-toys": {
  title: "Children Toys",
  description:
    "Inspection and compliance services for toys and juvenile products, ensuring safety, quality, and regulatory compliance across global markets.",
  items: ["Toys & Juvenile Products"],
},

  "industrial-products": {
    title: "Industrial Products",
    description:
      "Inspection services for heavy-duty, static, and industrial-grade equipment.",
    items: ["Electric Equipment", "Static Equipment"],
  },
};

export default async function IndustryDetailPage({
    params,
  }: {
    params: Promise<{ slug: string }>;
  }) {
    const { slug } = await params;
    const industry = industryData[slug.toLowerCase()];

  if (!industry) {
    notFound();
  }

  return (
    <section className="bg-brand-surface">
      {/* Hero */}
      <div className="bg-gradient-to-b from-white to-brand-surface border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <nav className="text-sm text-brand-muted mb-6">
            <Link href="/" className="hover:text-brand-primary">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/industries" className="hover:text-brand-primary">Industries</Link>
            <span className="mx-2">/</span>
            <span className="text-brand-text font-medium">
              {industry.title}
            </span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-primary">
            {industry.title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-brand-muted leading-relaxed">
            {industry.description}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <h2 className="text-2xl font-bold text-brand-text mb-6">
              Coverage Areas
            </h2>

            <ul className="space-y-4">
              {industry.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-brand-muted text-lg"
                >
                  <span className="mt-2 w-2 h-2 rounded-full bg-brand-secondary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right CTA */}
          <div className="relative group rounded-2xl border border-brand-border bg-gradient-to-b from-white to-brand-surface p-10 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-border/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />

            <div className="relative z-10">
              <h3 className="text-xl font-bold text-brand-primary">
                Need inspection support for this industry?
              </h3>

              <p className="mt-4 text-brand-muted leading-relaxed">
                Our experts deliver reliable inspection and audit services tailored
                specifically for your industry requirements.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-md bg-brand-primary text-white font-semibold hover:bg-brand-secondary transition"
                >
                  Request Inspection
                </Link>

                <Link
                  href="/services"
                  className="px-6 py-3 rounded-md border border-brand-border text-brand-primary font-semibold bg-white hover:bg-brand-surface transition"
                >
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}