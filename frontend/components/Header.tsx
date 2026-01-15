import Link from "next/link";
import Image from "next/image";
const navItems = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Resources", href: "/resources" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

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
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-white/80 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
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