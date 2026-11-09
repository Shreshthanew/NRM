"use client";

import { useReveal } from "@/hooks/useReveal";

export default function CompanyWorksPage() {
  const revealRef = useReveal();

  return (
    <section className="bg-brand-surface">
      <div
        ref={revealRef}
        className="reveal max-w-7xl mx-auto px-6 py-28"
      >
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <h1 className="text-4xl font-extrabold text-brand-primary">
            How Our Company Works
          </h1>
          <div className="w-20 h-1 bg-brand-secondary mt-4 rounded-full" />
          <p className="mt-6 text-brand-muted text-lg">
            A structured, transparent process designed to ensure consistent
            quality, accuracy, and global compliance.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-3 gap-14">
          {[
            {
              step: "01",
              title: "Requirement Analysis",
              desc: "We evaluate product specifications, destination market regulations, and compliance scope.",
            },
            {
              step: "02",
              title: "Execution & Inspection",
              desc: "Certified inspectors conduct on-site inspections, audits, or testing with precision.",
            },
            {
              step: "03",
              title: "Reporting & Support",
              desc: "Detailed reports with findings, images, and recommendations are delivered promptly.",
            },
          ].map((item) => (
            <div
              key={item.step}
              className="relative group bg-white border border-brand-border rounded-xl p-10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Step Number */}
              <div className="absolute -top-10 left-8 text-[6rem] font-extrabold text-brand-border/60 group-hover:text-brand-border">
                {item.step}
              </div>

              <h3 className="text-xl font-semibold text-brand-primary mt-10">
                {item.title}
              </h3>
              <p className="mt-4 text-brand-muted leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}