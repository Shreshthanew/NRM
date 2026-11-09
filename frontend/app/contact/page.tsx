export default function ContactPage() {
    return (
      <section className="bg-brand-surface py-28">
        <div className="max-w-7xl mx-auto px-6">
  
          {/* Intro */}
          <div className="mb-20 max-w-3xl">
            <h1 className="text-4xl font-extrabold text-brand-primary">
              Contact Us
            </h1>
            <p className="mt-4 text-brand-muted text-lg leading-relaxed">
              Get in touch with NRM’s inspection and audit specialists.
              We respond quickly and professionally to all enquiries.
            </p>
          </div>
  
          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
  
            {/* LEFT — Trust & Presence */}
            <div className="rounded-2xl border border-brand-border bg-gradient-to-b from-white to-brand-surface p-10 shadow-sm">
              <h2 className="text-2xl font-bold text-brand-text mb-10">
                NRM Global Inspection
              </h2>
  
              <div className="space-y-10 text-brand-muted">
  
                <div className="flex gap-4">
                  <span className="text-xl">📍</span>
                  <div>
                    <p className="font-semibold text-brand-text">Head Office</p>
                    <p className="mt-1">
                      43 FF, Improvement Trust Market<br />
                      Kapurthala Road, Jalandhar
                    </p>
                  </div>
                </div>
  
                <div className="flex gap-4">
                  <span className="text-xl">📞</span>
                  <div>
                    <p className="font-semibold text-brand-text">Phone</p>
                    <p className="mt-1">+91-99883-33404</p>
                  </div>
                </div>
  
                <div className="flex gap-4">
                  <span className="text-xl">✉️</span>
                  <div>
                    <p className="font-semibold text-brand-text">Email</p>
                    <p className="mt-1">norm@nrminspection.com</p>
                  </div>
                </div>
  
                <div className="pt-6 border-t border-brand-border">
                  <p className="font-semibold text-brand-text mb-2">
                    Global Operations
                  </p>
                  <p>
                    Supporting clients across Asia, Europe and global
                    sourcing regions through our professional inspection network.
                  </p>
                </div>
  
              </div>
            </div>
  
            {/* RIGHT — Contact Form */}
            <div className="rounded-2xl border border-brand-border bg-white p-10 shadow-sm">
              <h2 className="text-2xl font-bold text-brand-text mb-10">
                Send an Enquiry
              </h2>
  
              <form className="space-y-6">
                <input
                  className="w-full rounded-md border border-brand-border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-secondary"
                  placeholder="Full Name"
                />
  
                <input
                  className="w-full rounded-md border border-brand-border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-secondary"
                  placeholder="Email Address"
                />
  
                <input
                  className="w-full rounded-md border border-brand-border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-secondary"
                  placeholder="Company Name"
                />
  
                <textarea
                  rows={4}
                  className="w-full rounded-md border border-brand-border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-secondary"
                  placeholder="How can we help you?"
                />
  
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-brand-primary text-white font-semibold hover:bg-brand-secondary transition-all duration-300"
                >
                  Submit Enquiry
                </button>
              </form>
            </div>
  
          </div>
        </div>
      </section>
    );
  }