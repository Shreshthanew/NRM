import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-brand-primary shadow-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-20 flex items-center justify-between gap-6">

          <Link
            href="/"
            className="flex items-center gap-3 transition-transform duration-200 hover:-translate-y-0.5"
          >
            <Image
              src="/logo.png"
              alt="NRM Inspection Logo"
              width={48}
              height={48}
              priority
              className="object-contain"
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="/" className="text-white/80 hover:text-white transition-colors">
              Home
            </Link>

            <Link href="/services" className="text-white/80 hover:text-white transition-colors">
              Services
            </Link>

            <Link href="/industries" className="text-white/80 hover:text-white transition-colors">
              Industries
            </Link>

            <Link
              href="/resources"
              className="text-white/80 hover:text-white transition-colors"
            >
              Resources
            </Link>

            <div className="relative group">
              <button className="flex items-center gap-1 text-white/80 hover:text-white transition-colors">
                About Us
                <span className="text-xs">▾</span>
              </button>

              <div className="absolute left-0 top-full mt-3 w-56 rounded-xl bg-white shadow-lg border border-brand-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link
                  href="/about/mission-vision"
                  className="block px-5 py-3 text-sm text-brand-text hover:bg-brand-surface"
                >
                  Mission & Vision
                </Link>

                <Link
                  href="/about/company-works"
                  className="block px-5 py-3 text-sm text-brand-text hover:bg-brand-surface"
                >
                  Our Company Works
                </Link>
              </div>
            </div>

            <Link href="/contact" className="text-white/80 hover:text-white transition-colors">
              Contact
            </Link>
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm text-white/70 hover:text-white transition-colors">
              EN ▾
            </button>

            <Link
              href="/login"
              className="px-4 py-2 rounded-md border border-white/40 text-white text-sm hover:bg-white hover:text-brand-primary transition-colors"
            >
              Log in
            </Link>

            <Link
              href="/signup"
              className="px-4 py-2 rounded-md bg-brand-surface text-brand-primary text-sm font-semibold hover:bg-white transition-colors"
            >
              Sign up
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
}