import Link from "next/link";

const suburbs = [
  "Potts Point",
  "Elizabeth Bay",
  "Woolloomooloo",
  "Rushcutters Bay",
  "Darlinghurst",
];

export default function AboutSnippet() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: bio */}
        <div>
          <p className="text-gold tracking-widest text-xs font-sans uppercase mb-4">Meet Vanessa</p>
          <h2 className="font-serif text-4xl md:text-5xl text-navy font-bold leading-tight mb-6">
            20 Years of Boutique<br /> Real Estate Excellence
          </h2>
          <p className="text-gray-600 text-base leading-relaxed mb-4 font-sans">
            As Director of VanWhite Property Group, Vanessa White has built her reputation on
            genuine client relationships and an unrivalled understanding of Sydney&apos;s inner
            eastern suburbs. Her boutique approach means you always deal directly with Vanessa —
            never a junior agent.
          </p>
          <p className="text-gray-600 text-base leading-relaxed mb-8 font-sans">
            Whether you&apos;re buying your first home, selling an investment property, or searching
            for the ideal rental, Vanessa delivers honest advice and exceptional results.
          </p>
          <Link
            href="/about"
            className="inline-block bg-navy text-white font-sans font-semibold px-8 py-4 hover:bg-navy-700 transition-colors"
          >
            Learn More About Vanessa
          </Link>
        </div>

        {/* Right: suburb list + callout */}
        <div className="space-y-6">
          <div className="bg-cream p-8">
            <p className="text-navy font-serif text-xl font-semibold mb-5">Areas We Specialise In</p>
            <ul className="space-y-3">
              {suburbs.map((s) => (
                <li key={s} className="flex items-center gap-3 text-gray-700 font-sans">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-navy p-8 text-white">
            <p className="font-serif text-3xl font-bold text-gold mb-2">0418 619 166</p>
            <p className="text-white/70 font-sans text-sm mb-4">
              Call Vanessa directly — no call centres, no junior staff.
            </p>
            <a
              href="tel:0418619166"
              className="inline-block border border-gold text-gold font-sans text-sm font-medium px-6 py-2.5 hover:bg-gold hover:text-navy transition-colors"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
