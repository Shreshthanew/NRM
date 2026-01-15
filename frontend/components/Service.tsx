"use client";
import { useReveal } from "@/hooks/useReveal";

const services = [
    {
      id: "01",
      title: "Product Quality Inspection",
      description:
        "Independent on-site inspections to verify product quality, quantity, packaging, and compliance before shipment—reducing risks and costly returns.",
    },
    {
      id: "02",
      title: "Factory Audit",
      description:
        "Comprehensive factory evaluations covering capability, quality systems, compliance, and ethical practices to help you choose reliable suppliers.",
    },
    {
      id: "03",
      title: "Merchandizing",
      description:
        "End-to-end production coordination including order tracking, sampling, timelines, and shipment follow-ups for smooth and on-time delivery.",
    },
  ];
  
  export default function Services() {
    const revealRef = useReveal();

    return (
      <section className="relative bg-brand-surface py-32">
        <div ref={revealRef} className="reveal max-w-7xl mx-auto px-6">
          {/* Section heading */}
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-primary">
              Our Core Services
            </h2>
            <p className="mt-4 text-brand-muted max-w-2xl mx-auto text-lg text-slate-700">
              Comprehensive inspection, audit and testing solutions designed to
              protect your supply chain and ensure global compliance.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {services.map((service) => (
              <div
                key={service.id}
                className="relative group transition-all duration-300 hover:-translate-y-1"
              >
                {/* Big background number */}
                <div className="absolute -top-10 left-0 text-[10rem] font-extrabold text-brand-border/70 group-hover:text-brand-border pointer-events-none">
                  {service.id}
                </div>

                {/* Card content */}
                <div className="relative bg-gradient-to-b from-white to-brand-surface border border-brand-border rounded-xl p-8 text-slate-700 transition-all duration-300 group-hover:from-brand-surface group-hover:to-brand-border/40 shadow-sm group-hover:shadow-lg">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-14 h-14 rounded-xl bg-brand-surface text-brand-primary border border-brand-border flex items-center justify-center text-xl font-bold transition-transform duration-300 group-hover:-translate-y-0.5">
                      {/* Placeholder icon */}
                      ⬤
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-brand-primary">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-brand-muted leading-relaxed">
                    {service.description}
                  </p>

                  <button className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white border border-brand-border text-brand-primary font-semibold hover:bg-brand-surface transition-all duration-300">
  Learn More →
</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }