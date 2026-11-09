"use client";

import { useReveal } from "@/hooks/useReveal";

export default function MissionVisionPage() {
  const revealRef = useReveal();

  return (
    <section className="bg-white">
      <div
        ref={revealRef}
        className="reveal max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-20 items-start"
      >
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl font-extrabold text-brand-primary">
            Our Mission, Vision & Values
          </h1>
          <div className="w-20 h-1 bg-brand-secondary mt-4 rounded-full" />

          {/* Mission */}
          <div className="mt-12">
            <h2 className="text-xl font-semibold text-brand-text">
              Our Mission
            </h2>
            <p className="mt-4 text-brand-muted leading-relaxed">
              To exceed our customers’ expectations by delivering innovative,
              reliable, and bespoke Inspection, Testing, Audit, and Certification
              services—strengthening supply chains across global markets.
            </p>
          </div>

          {/* Vision */}
          <div className="mt-10">
            <h2 className="text-xl font-semibold text-brand-text">
              Our Vision
            </h2>
            <p className="mt-4 text-brand-muted leading-relaxed">
              To become the most trusted global quality assurance partner by
              setting new benchmarks in transparency, accuracy, and service
              excellence.
            </p>
          </div>

          {/* Values */}
          <div className="mt-10">
            <h2 className="text-xl font-semibold text-brand-text">
              Our Values
            </h2>
            <p className="mt-4 text-brand-muted leading-relaxed">
              Integrity, accountability, collaboration, and continuous
              improvement define our culture and guide every engagement.
            </p>
          </div>
        </div>

        {/* RIGHT TRUST PANEL */}
        <div className="relative group bg-gradient-to-b from-white to-brand-surface border border-brand-border rounded-2xl p-10 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
          <ul className="space-y-6 text-brand-text font-medium">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-brand-secondary" />
              Customer-first approach
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-brand-secondary" />
              Globally aligned compliance standards
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-brand-secondary" />
              Ethical & transparent operations
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-brand-secondary" />
              Continuous quality improvement
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}