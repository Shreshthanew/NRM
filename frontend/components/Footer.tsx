
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-primary text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-10 lg:gap-12 items-start">
          {/* Services */}
          <div className="min-w-0">
            <h4 className="text-sm font-semibold uppercase tracking-wide mb-5 text-white">
              Services
            </h4>
            <ul className="space-y-3 text-white/70 text-sm">
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  All Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services/product-quality-inspection"
                  className="hover:text-white transition-colors"
                >
                  Product Quality Inspection
                </Link>
              </li>
              <li>
                <Link
                  href="/services/factory-audit"
                  className="hover:text-white transition-colors"
                >
                  Factory Audit
                </Link>
              </li>
              <li>
                <Link
                  href="/services/merchandising"
                  className="hover:text-white transition-colors"
                >
                  Merchandising
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="min-w-0">
            <h4 className="text-sm font-semibold uppercase tracking-wide mb-5 text-white">
              Resources
            </h4>
            <ul className="space-y-3 text-white/70 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">Booking Guide</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Sample Reports</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Coverage</Link></li>
            </ul>
          </div>

          {/* Industries */}
          <div className="min-w-0">
            <h4 className="text-sm font-semibold uppercase tracking-wide mb-5 text-white">
              Industries
            </h4>
            <ul className="space-y-3 text-white/70 text-sm">
              <li><Link href="/industries" className="hover:text-white transition-colors">Industries</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="min-w-0">
            <h4 className="text-sm font-semibold uppercase tracking-wide mb-5 text-white">
              Company
            </h4>
            <ul className="space-y-3 text-white/70 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Inspection System</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Customer Feedback</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="min-w-0">
            <h4 className="text-sm font-semibold uppercase tracking-wide mb-5 text-white">
              Contact
            </h4>
            <div className="space-y-3 text-white/70 text-sm leading-relaxed">
              <p>
                43 FF, Improvement Trust Market<br />
                Kapurthala Road, Jalandhar
              </p>
              <p>📞 +91-99883-33404</p>
              <p>✉️ norm@nrminspection.com</p>
              <div className="flex gap-4 pt-4 text-lg">
                <a href="#" className="hover:text-white transition-colors">🌐</a>
                <a href="#" className="hover:text-white transition-colors">in</a>
                <a href="#" className="hover:text-white transition-colors">𝕏</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6 text-center text-sm text-white/60">
        © {new Date().getFullYear()} NRM Global Inspection. All rights reserved.
      </div>
    </footer>
  );
}
