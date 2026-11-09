const industries = [
    {
      title: "Softline",
      items: ["Apparel & Textiles", "Home Furnishings"],
    },
    {
      title: "Hard Goods",
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
      items: ["Toys & Juvenile Products"],
    },
    {
      title: "Electronics",
      items: ["Lights", "Electric Lamps", "Fans", "Remote Devices"],
    },
    {
      title: "Industrial Products",
      items: ["Electric Equipment", "Static Equipment"],
    },
  ];
  
  export default function Industries() {
    return (
      <section className="bg-brand-surface py-28">
        <div className="max-w-7xl mx-auto px-6">
  
          {/* Heading */}
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-3xl font-bold text-brand-text">
              Industries We Serve
            </h2>
            <div className="w-16 h-1 bg-brand-secondary mx-auto mt-4 rounded-full" />
            <p className="mt-6 text-brand-muted text-lg">
              Specialized inspection and audit solutions tailored to your industry.
            </p>
          </div>
  
          {/* Industry Grid */}
          <div className="grid md:grid-cols-2 gap-10 items-stretch">
            {industries.map((industry) => (
              <div
                key={industry.title}
                className="relative group h-full transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-full flex flex-col bg-gradient-to-b from-white to-brand-surface border border-brand-border rounded-2xl p-8 shadow-sm transition-all duration-300
                  group-hover:from-brand-surface group-hover:to-brand-border/40 group-hover:shadow-lg">
  
                  {/* Card Header */}
                  <h3 className="text-xl font-semibold text-brand-primary mb-6">
                    {industry.title}
                  </h3>
  
                  {/* Items */}
                  <ul className="space-y-3">
                    {industry.items.map((item) => (
                      <li
                        key={item}
                        className="text-brand-muted group-hover:text-brand-text transition-colors duration-300"
                      >
                        • {item}
                      </li>
                    ))}
                  </ul>
  
                  {/* Hover Accent */}
                  <div className="mt-auto h-1 w-0 bg-brand-secondary transition-all duration-300 group-hover:w-16 rounded-full" />
                </div>
              </div>
            ))}
          </div>
  
        </div>
      </section>
    );
  }