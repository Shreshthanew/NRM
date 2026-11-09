import Link from "next/link";

const industries = [
  {
    title: "Softline",
    slug: "softline",
    items: ["Apparel & Textiles", "Home Furnishings"],
  },
  {
    title: "Hard Goods",
    slug:"hard-goods",
    items: [
      "Furniture",
      "Cutlery",
      "Decorative Items",
      "Hand Tools",
      "Tiles",
      "Kitchen Accessories",
    ],
  },
  {
    title: "Children Toys",
    slug: "children-toys",
    items: ["Toys & Juvenile Products"],
  },
  {
    title: "Electronics",
    slug:"electronics",
    items: ["Lights", "Electric Lamps", "Fans", "Remote Devices"],
  },
  {
    title: "Industrial Products",
    slug:"industrial-products",
    items: ["Electric Equipment", "Static Equipment"],
  },
];

export default function IndustriesPage() {
  return (
    <section className="bg-brand-surface py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Page Header */}
        <div className="max-w-3xl mb-20">
          <h1 className="text-4xl font-extrabold text-brand-primary">
            Industries We Serve
          </h1>
          <p className="mt-4 text-brand-muted text-lg leading-relaxed">
            NRM provides independent inspection and audit services across a wide
            range of industries, helping businesses ensure quality, safety, and
            compliance throughout their supply chains.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch">
          {industries.map((industry) => (
            <Link
            key={industry.slug}
            href={`/industries/${industry.slug}`}
            className="block h-full"
          >
            <div className="group relative h-full overflow-hidden rounded-2xl border border-brand-border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              {/* Light → dark hover overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-brand-surface opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-xl font-semibold text-brand-primary mb-6">
                  {industry.title}
                </h3>

                <ul className="space-y-3 text-brand-muted">
                  {industry.items.map((item) => (
                    <li
                      key={item}
                      className="transition-colors duration-300 group-hover:text-brand-text"
                    >
                      • {item}
                    </li>
                  ))}
                </ul>

                {/* Accent line */}
                <div className="mt-auto pt-6">
                  <div className="h-1 w-0 bg-brand-secondary transition-all duration-300 group-hover:w-16 rounded-full" />
                </div>
              </div>
            </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-md
            bg-brand-primary text-white font-semibold hover:bg-brand-secondary transition"
          >
            Request Industry-Specific Inspection
          </Link>
        </div>

      </div>
    </section>
  );
}