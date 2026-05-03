import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Sell Your Property | VanWhite Property Group",
  description:
    "Sell your Sydney property with Vanessa White. Proven results in Potts Point, Elizabeth Bay and the inner eastern suburbs.",
};

const steps = [
  {
    number: "01",
    title: "Free Appraisal",
    description:
      "Vanessa assesses your property with current market data and her deep local knowledge to give you an honest, accurate price guide.",
  },
  {
    number: "02",
    title: "Marketing Strategy",
    description:
      "We craft a bespoke marketing campaign — professional photography, floor plans, online listings and targeted buyer outreach.",
  },
  {
    number: "03",
    title: "Open Homes & Private Inspections",
    description:
      "Vanessa personally conducts all inspections, ensuring every potential buyer gets the full story of your property.",
  },
  {
    number: "04",
    title: "Negotiation & Sale",
    description:
      "Vanessa negotiates hard on your behalf to achieve the best possible result — then guides you seamlessly through to settlement.",
  },
];

const tips = [
  "Declutter and depersonalise to help buyers picture themselves living there.",
  "First impressions matter — invest in kerb appeal and a fresh front door.",
  "Professional photography makes a measurable difference to buyer enquiry.",
  "Price it right from day one — overpriced listings lose momentum fast.",
  "Be flexible with inspection times to capture the widest pool of buyers.",
];

export default function Selling() {
  return (
    <>
      {/* Page header */}
      <div className="bg-navy pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold tracking-widest text-xs font-sans uppercase mb-4">Sell With Us</p>
          <h1 className="font-serif text-5xl md:text-6xl text-white font-bold">
            Sell Your Property
          </h1>
          <p className="text-white/60 font-sans mt-4 text-lg max-w-xl mx-auto">
            Expert guidance, strategic marketing, and genuine negotiation — every time.
          </p>
        </div>
      </div>

      {/* Process */}
      <section className="bg-cream py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-gold tracking-widest text-xs font-sans uppercase mb-3">The Process</p>
            <h2 className="font-serif text-4xl text-navy font-bold">How We Sell Your Home</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((s) => (
              <div key={s.number} className="bg-white p-8 border border-gray-100">
                <span className="font-serif text-5xl font-bold text-gold/30">{s.number}</span>
                <h3 className="font-serif text-xl text-navy font-semibold mt-3 mb-3">{s.title}</h3>
                <p className="text-gray-500 font-sans text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selling tips */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-gold tracking-widest text-xs font-sans uppercase mb-4">Seller Tips</p>
            <h2 className="font-serif text-4xl text-navy font-bold mb-8">
              Prepare Your Property to Sell
            </h2>
            <ul className="space-y-4">
              {tips.map((tip) => (
                <li key={tip} className="flex items-start gap-3 text-gray-600 font-sans text-sm leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                  {tip}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-navy p-10 text-white">
            <h3 className="font-serif text-2xl font-semibold mb-4">Ready to Get Started?</h3>
            <p className="text-white/60 font-sans text-sm leading-relaxed mb-8">
              Book a free appraisal with Vanessa and find out what your property is worth in
              today&apos;s market. No obligation, no pressure.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gold text-navy font-sans font-semibold px-8 py-4 hover:bg-gold-dark transition-colors"
            >
              Book a Free Appraisal
            </Link>
            <div className="mt-6 pt-6 border-t border-white/10">
              <a href="tel:0418619166" className="text-gold font-serif text-2xl font-bold hover:text-gold-light transition-colors">
                0418 619 166
              </a>
              <p className="text-white/40 text-xs font-sans mt-1">Call Vanessa directly</p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
