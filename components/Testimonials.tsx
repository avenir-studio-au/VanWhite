const testimonials = [
  {
    quote:
      "After 25 years of dealing with real estate agents, none have shown the level of commitment and professionalism as Vanessa White. Absolutely outstanding.",
    author: "M. Thompson",
    location: "Potts Point",
  },
  {
    quote:
      "Vanessa sold our apartment above asking price within the first week. Her knowledge of the local market is second to none — we wouldn't use anyone else.",
    author: "Sarah & James",
    location: "Elizabeth Bay",
  },
  {
    quote:
      "From first contact to settlement, the entire experience was seamless. Vanessa is responsive, honest and genuinely cares about her clients. Highly recommend.",
    author: "David K.",
    location: "Darlinghurst",
  },
];

function Stars() {
  return (
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-gold fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-navy py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-gold tracking-widest text-xs font-sans uppercase mb-3">Client Stories</p>
          <h2 className="font-serif text-4xl md:text-5xl text-white font-bold">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="bg-navy-800 border border-white/10 p-8 flex flex-col"
            >
              <Stars />
              <p className="text-white/80 font-sans text-base leading-relaxed flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="border-t border-white/10 pt-4">
                <p className="text-white font-sans font-semibold text-sm">{t.author}</p>
                <p className="text-gold text-xs font-sans">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
