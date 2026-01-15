export default function Hero() {
  return (
    <section className="relative bg-brand-surface">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-250 via-brand-surface to-slate-400" />

      <div className="relative max-w-7xl mx-auto px-6 py-28">
        <div className="max-w-3xl">
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-brand-primary">
             Inspection & Audit
            <span className="block text-brand-secondary mt-2">
              Services You Can Trust
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg text-slate-700">
            Independent third-party inspection, audit, and compliance solutions
            helping businesses ensure quality, safety, and transparency across
            global supply chains.
          </p>

          {/* Actions */}
          <div className="mt-10 flex flex-wrap gap-4">
            <button className="px-6 py-3 rounded-md bg-brand-primary text-white font-semibold hover:bg-brand-secondary transition">
              Request Inspection
            </button>

            <button className="px-6 py-3 rounded-md bg-white border border-brand-border text-brand-primary font-semibold hover:bg-slate-100 transition">
              Get Quotation
            </button>
          </div>
        </div>
      </div>
    </section>
    
  );
}