import Link from "next/link";

const navLinks = [
  { href: "/properties", label: "Properties" },
  { href: "/selling", label: "Selling" },
  { href: "/renting", label: "Renting" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <Link href="/" className="flex flex-col leading-none mb-4 inline-block">
            <span className="font-serif text-xl text-white tracking-wide">VanWhite</span>
            <span className="text-gold text-xs tracking-widest uppercase font-sans">Property Group</span>
          </Link>
          <p className="text-white/50 text-sm font-sans leading-relaxed mt-4">
            Boutique real estate agency specialising in Sydney&apos;s inner eastern suburbs since 2004.
          </p>
        </div>

        {/* Nav */}
        <div>
          <p className="text-white font-sans font-semibold text-sm uppercase tracking-widest mb-5">
            Navigation
          </p>
          <ul className="space-y-3">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-white/50 hover:text-gold text-sm font-sans transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-white font-sans font-semibold text-sm uppercase tracking-widest mb-5">
            Contact
          </p>
          <ul className="space-y-3 text-white/50 text-sm font-sans">
            <li>
              <a href="tel:0418619166" className="hover:text-gold transition-colors">
                0418 619 166
              </a>
            </li>
            <li>
              <a href="mailto:vanessa@vwpg.com.au" className="hover:text-gold transition-colors">
                vanessa@vwpg.com.au
              </a>
            </li>
            <li>71 Victoria St, Potts Point NSW 2011</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-white/30 text-xs font-sans">
          <p>&copy; {new Date().getFullYear()} VanWhite Property Group. All rights reserved.</p>
          <p>Licensed Real Estate Agent · NSW</p>
        </div>
      </div>
    </footer>
  );
}
