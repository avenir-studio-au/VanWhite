import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Properties | VanWhite Property Group",
  description:
    "Browse current and recent properties in Potts Point, Elizabeth Bay, Woolloomooloo and Sydney's inner eastern suburbs.",
};

const featuredSuburbs = [
  "Potts Point",
  "Elizabeth Bay",
  "Woolloomooloo",
  "Rushcutters Bay",
  "Darlinghurst",
];

export default function Properties() {
  return (
    <>
      {/* Page header */}
      <div className="bg-navy pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold tracking-widest text-xs font-sans uppercase mb-4">Available Now</p>
          <h1 className="font-serif text-5xl md:text-6xl text-white font-bold">Properties</h1>
          <p className="text-white/60 font-sans mt-4 text-lg max-w-xl mx-auto">
            Current listings and recent sales across Sydney&apos;s inner eastern suburbs.
          </p>
        </div>
      </div>

      {/* Listings placeholder */}
      <section className="bg-cream py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center py-16 bg-white border border-gray-100">
            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75" />
              </svg>
            </div>
            <h2 className="font-serif text-2xl text-navy font-semibold mb-3">
              Listings Coming Soon
            </h2>
            <p className="text-gray-500 font-sans text-sm max-w-md mx-auto mb-8 leading-relaxed">
              Current property listings will appear here. In the meantime, contact Vanessa
              directly — she often has off-market properties available before they&apos;re advertised.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gold text-navy font-sans font-semibold px-8 py-4 hover:bg-gold-dark transition-colors"
              >
                Enquire About Listings
              </Link>
              <a
                href="tel:0418619166"
                className="border border-navy text-navy font-sans font-semibold px-8 py-4 hover:bg-navy hover:text-white transition-colors"
              >
                Call 0418 619 166
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Suburb guide */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold tracking-widest text-xs font-sans uppercase mb-3">Our Patch</p>
            <h2 className="font-serif text-4xl text-navy font-bold">Suburbs We Cover</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredSuburbs.map((suburb) => (
              <div
                key={suburb}
                className="bg-cream border border-gray-100 p-6 flex items-center justify-between group hover:border-gold transition-colors"
              >
                <span className="font-serif text-lg text-navy font-medium">{suburb}</span>
                <span className="text-gold text-sm font-sans group-hover:translate-x-1 transition-transform duration-300">
                  &rarr;
                </span>
              </div>
            ))}
            <div className="bg-navy p-6 flex items-center justify-between">
              <span className="font-serif text-lg text-white font-medium">& Surrounds</span>
              <Link href="/contact" className="text-gold text-xs font-sans hover:underline">
                Ask Vanessa
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
