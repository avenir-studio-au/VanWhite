import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Renting & Leasing | VanWhite Property Group",
  description:
    "Residential and commercial leasing in Sydney's inner eastern suburbs. Expert property management with VanWhite Property Group.",
};

const landlordServices = [
  "Free rental appraisal",
  "Targeted tenant advertising",
  "Thorough tenant screening & references",
  "Lease preparation and documentation",
  "Routine inspections and maintenance coordination",
  "Regular market rent reviews",
];

const tenantServices = [
  "Access to exclusive off-market rentals",
  "Fast, straightforward application process",
  "Transparent communication throughout",
  "Responsive maintenance support",
  "Flexible lease options where available",
];

export default function Renting() {
  return (
    <>
      {/* Page header */}
      <div className="bg-navy pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold tracking-widest text-xs font-sans uppercase mb-4">Renting & Leasing</p>
          <h1 className="font-serif text-5xl md:text-6xl text-white font-bold">
            Rental Properties
          </h1>
          <p className="text-white/60 font-sans mt-4 text-lg max-w-xl mx-auto">
            Residential and commercial leasing across Sydney&apos;s inner eastern suburbs.
          </p>
        </div>
      </div>

      {/* Services grid */}
      <section className="bg-cream py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Landlords */}
          <div className="bg-white p-10 border border-gray-100">
            <div className="w-12 h-12 bg-gold/10 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75" />
              </svg>
            </div>
            <h2 className="font-serif text-2xl text-navy font-semibold mb-2">For Landlords</h2>
            <p className="text-gray-500 font-sans text-sm mb-6 leading-relaxed">
              Maximise your investment with expert leasing management. Vanessa handles everything
              from finding quality tenants to ongoing property care.
            </p>
            <ul className="space-y-3 mb-8">
              {landlordServices.map((s) => (
                <li key={s} className="flex items-center gap-3 text-gray-600 font-sans text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="inline-block bg-navy text-white font-sans font-semibold px-6 py-3 hover:bg-navy-700 transition-colors text-sm"
            >
              Get a Rental Appraisal
            </Link>
          </div>

          {/* Tenants */}
          <div className="bg-navy p-10">
            <div className="w-12 h-12 bg-gold/20 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
              </svg>
            </div>
            <h2 className="font-serif text-2xl text-white font-semibold mb-2">For Tenants</h2>
            <p className="text-white/60 font-sans text-sm mb-6 leading-relaxed">
              Looking for your next home or commercial space in the inner east? We make the
              rental process straightforward and stress-free.
            </p>
            <ul className="space-y-3 mb-8">
              {tenantServices.map((s) => (
                <li key={s} className="flex items-center gap-3 text-white/70 font-sans text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="inline-block bg-gold text-navy font-sans font-semibold px-6 py-3 hover:bg-gold-dark transition-colors text-sm"
            >
              Register Your Interest
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
