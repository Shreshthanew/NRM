import Link from "next/link";

export const metadata = {
  title: "Mission & Vision",
};

// Uses the same type scale as the About Us page (see app/about/page.tsx).

export default function MissionVisionPage() {
  return (
    <>
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-20 md:pt-24">
          <p className="text-lg text-brand-muted">
            <Link href="/about" className="hover:text-brand-primary hover:underline">
              About Us
            </Link>
            <span className="mx-2">/</span>
            <span className="text-brand-text">Mission &amp; Vision</span>
          </p>

          <h1 className="mt-4 text-5xl md:text-6xl font-bold text-brand-primary">
            Mission &amp; Vision
          </h1>

          <div className="mt-14 grid gap-12 md:grid-cols-2 lg:gap-16">
            <div className="border-t-2 border-brand-primary pt-6">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">
                Our Mission
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-brand-muted">
                To deliver independent, accurate, and reliable quality inspection
                and factory audit services that empower businesses to make
                informed decisions, reduce supply chain risks, and maintain the
                highest standards of product quality and compliance.
              </p>
            </div>

            <div className="border-t-2 border-brand-primary pt-6">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">
                Our Vision
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-brand-muted">
                To become a globally recognized leader in quality assurance,
                setting the standard for trust, transparency, and excellence
                across international supply chains.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-surface border-t border-brand-border">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <p className="text-2xl md:text-3xl font-semibold leading-snug text-brand-primary">
            We believe that quality is not merely an inspection outcome, but a
            commitment to excellence that protects brands, strengthens
            partnerships, and builds lasting customer confidence.
          </p>

          <Link
            href="/about"
            className="mt-10 inline-block text-lg font-semibold text-brand-primary hover:underline"
          >
            ← Back to About Us
          </Link>
        </div>
      </section>
    </>
  );
}
