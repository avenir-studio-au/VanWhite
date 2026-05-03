import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "About Vanessa White | VanWhite Property Group",
  description:
    "Meet Vanessa White — Director of VanWhite Property Group and Sydney's inner eastern suburbs real estate specialist with 20+ years experience.",
};

const credentials = [
  "20+ years real estate experience",
  "Director, VanWhite Property Group",
  "Inner eastern suburbs specialist",
  "Residential & commercial sales and leasing",
  "Licensed Real Estate Agent, NSW",
];

export default function About() {
  return (
    <>
      {/* Page header */}
      <div className="bg-navy pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold tracking-widest text-xs font-sans uppercase mb-4">The Director</p>
          <h1 className="font-serif text-5xl md:text-6xl text-white font-bold">Vanessa White</h1>
        </div>
      </div>

      {/* Bio section */}
      <section className="bg-cream py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-14 items-start">
          {/* Photo placeholder */}
          <div className="lg:col-span-2">
            <div className="bg-navy aspect-[3/4] flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-gold/20 border-2 border-gold mx-auto flex items-center justify-center mb-4">
                  <span className="font-serif text-4xl text-gold font-bold">VW</span>
                </div>
                <p className="text-white/50 text-sm font-sans">Photo coming soon</p>
              </div>
            </div>
            {/* Contact card */}
            <div className="bg-white border border-gray-100 p-6 mt-4 space-y-3">
              <a
                href="tel:0418619166"
                className="flex items-center gap-3 text-navy hover:text-gold transition-colors font-sans text-sm"
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                0418 619 166
              </a>
              <a
                href="mailto:vanessa@vwpg.com.au"
                className="flex items-center gap-3 text-navy hover:text-gold transition-colors font-sans text-sm"
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                vanessa@vwpg.com.au
              </a>
            </div>
          </div>

          {/* Bio text */}
          <div className="lg:col-span-3">
            <div className="space-y-5 text-gray-600 font-sans text-base leading-relaxed mb-10">
              <p>
                Vanessa White is the Director and principal agent of VanWhite Property Group, a
                boutique real estate agency based in the heart of Potts Point. With over 20 years
                of experience in Sydney&apos;s inner eastern suburbs, Vanessa has earned a
                reputation for her integrity, local knowledge and unwavering commitment to her clients.
              </p>
              <p>
                Vanessa&apos;s approach is refreshingly personal. When you work with VanWhite
                Property Group, you work directly with Vanessa — not a team of junior agents. This
                means every property is marketed with the same passion and strategic thinking,
                whether it&apos;s a studio apartment or a multi-million-dollar harbourside home.
              </p>
              <p>
                She specialises in residential and commercial sales and leasing across Potts Point,
                Elizabeth Bay, Woolloomooloo, Rushcutters Bay and Darlinghurst — neighbourhoods
                she knows at street level. Her clients return to her time and again, often
                referring friends and family, because they trust her to always put their interests first.
              </p>
            </div>

            {/* Credentials */}
            <div className="bg-white border border-gray-100 p-8">
              <h3 className="font-serif text-xl text-navy font-semibold mb-5">Credentials</h3>
              <ul className="space-y-3">
                {credentials.map((c) => (
                  <li key={c} className="flex items-center gap-3 text-gray-600 font-sans text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-gold text-navy font-sans font-semibold px-8 py-4 text-center hover:bg-gold-dark transition-colors"
              >
                Book a Free Appraisal
              </Link>
              <a
                href="tel:0418619166"
                className="border border-navy text-navy font-sans font-semibold px-8 py-4 text-center hover:bg-navy hover:text-white transition-colors"
              >
                Call Vanessa Directly
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
