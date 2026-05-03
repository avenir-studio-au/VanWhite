import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="bg-gold py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-4xl md:text-5xl text-navy font-bold mb-4">
          Ready to Make a Move?
        </h2>
        <p className="text-navy/70 font-sans text-lg mb-10 max-w-xl mx-auto">
          Get a free, no-obligation property appraisal from Vanessa. No pressure, just honest
          local expertise.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-navy text-white font-sans font-semibold px-8 py-4 hover:bg-navy-800 transition-colors"
          >
            Book a Free Appraisal
          </Link>
          <a
            href="tel:0418619166"
            className="border-2 border-navy text-navy font-sans font-semibold px-8 py-4 hover:bg-navy/10 transition-colors"
          >
            Call 0418 619 166
          </a>
        </div>
      </div>
    </section>
  );
}
