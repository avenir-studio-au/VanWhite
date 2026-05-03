import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-navy overflow-hidden">
      {/* Background */}
      <Image
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&q=80"
        alt="Sydney harbour"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-navy/70" />

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6 pt-24 pb-32">
        <p className="text-gold tracking-[0.25em] text-xs font-sans uppercase mb-6">
          Boutique Real Estate &nbsp;·&nbsp; Sydney&apos;s Inner East
        </p>
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-6">
          Your Inner Sydney<br className="hidden sm:block" /> Property Expert
        </h1>
        <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-sans leading-relaxed">
          Vanessa White has guided buyers, sellers and investors through Sydney&apos;s inner eastern
          suburbs for over 20 years. Trusted, boutique, results-driven.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-gold text-navy font-sans font-semibold px-8 py-4 text-base hover:bg-gold-dark transition-colors"
          >
            Get a Free Appraisal
          </Link>
          <Link
            href="/properties"
            className="border border-white/60 text-white font-sans font-semibold px-8 py-4 text-base hover:bg-white/10 transition-colors"
          >
            View Properties &rarr;
          </Link>
        </div>
      </div>

      {/* Stats strip */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/30 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 py-4 flex flex-wrap justify-center gap-6 md:gap-12">
          {[
            ["20+ Years", "Experience"],
            ["Inner Eastern", "Suburbs Specialist"],
            ["Potts Point", "71 Victoria St"],
          ].map(([top, bottom]) => (
            <div key={top} className="text-center">
              <div className="text-gold font-serif text-lg font-semibold">{top}</div>
              <div className="text-white/70 text-xs font-sans tracking-wide">{bottom}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
