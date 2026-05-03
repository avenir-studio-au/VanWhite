import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | VanWhite Property Group",
  description:
    "Get in touch with Vanessa White for a free property appraisal or to discuss buying, selling or renting in Sydney's inner east.",
};

export default function Contact() {
  return (
    <>
      {/* Page header */}
      <div className="bg-navy pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold tracking-widest text-xs font-sans uppercase mb-4">Get in Touch</p>
          <h1 className="font-serif text-5xl md:text-6xl text-white font-bold">Contact Vanessa</h1>
          <p className="text-white/60 font-sans mt-4 text-lg max-w-xl mx-auto">
            Whether you&apos;re ready to act or just exploring your options, Vanessa is happy to chat.
          </p>
        </div>
      </div>

      <section className="bg-cream py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14">

          {/* Contact form */}
          <div className="bg-white p-8 md:p-10 border border-gray-100">
            <h2 className="font-serif text-2xl text-navy font-semibold mb-6">Send a Message</h2>
            <form className="space-y-5" action="mailto:vanessa@vwpg.com.au" method="GET">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-sans font-medium text-gray-500 uppercase tracking-widest mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    className="w-full border border-gray-200 px-4 py-3 text-sm font-sans text-gray-800 focus:outline-none focus:border-gold transition-colors"
                    placeholder="Jane"
                  />
                </div>
                <div>
                  <label className="block text-xs font-sans font-medium text-gray-500 uppercase tracking-widest mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    className="w-full border border-gray-200 px-4 py-3 text-sm font-sans text-gray-800 focus:outline-none focus:border-gold transition-colors"
                    placeholder="Smith"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-sans font-medium text-gray-500 uppercase tracking-widest mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full border border-gray-200 px-4 py-3 text-sm font-sans text-gray-800 focus:outline-none focus:border-gold transition-colors"
                  placeholder="jane@example.com"
                />
              </div>
              <div>
                <label className="block text-xs font-sans font-medium text-gray-500 uppercase tracking-widest mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full border border-gray-200 px-4 py-3 text-sm font-sans text-gray-800 focus:outline-none focus:border-gold transition-colors"
                  placeholder="04xx xxx xxx"
                />
              </div>
              <div>
                <label className="block text-xs font-sans font-medium text-gray-500 uppercase tracking-widest mb-2">
                  I&apos;m interested in
                </label>
                <select
                  name="interest"
                  className="w-full border border-gray-200 px-4 py-3 text-sm font-sans text-gray-800 focus:outline-none focus:border-gold transition-colors bg-white"
                >
                  <option value="">Select one...</option>
                  <option value="appraisal">Free Property Appraisal</option>
                  <option value="buying">Buying a Property</option>
                  <option value="selling">Selling a Property</option>
                  <option value="renting">Renting / Leasing</option>
                  <option value="other">General Enquiry</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-sans font-medium text-gray-500 uppercase tracking-widest mb-2">
                  Message
                </label>
                <textarea
                  name="body"
                  rows={4}
                  className="w-full border border-gray-200 px-4 py-3 text-sm font-sans text-gray-800 focus:outline-none focus:border-gold transition-colors resize-none"
                  placeholder="Tell us a bit about your property or what you're looking for..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gold text-navy font-sans font-semibold py-4 hover:bg-gold-dark transition-colors"
              >
                Send Message
              </button>
              <p className="text-gray-400 text-xs font-sans text-center">
                We&apos;ll get back to you within one business day.
              </p>
            </form>
          </div>

          {/* Contact details */}
          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-2xl text-navy font-semibold mb-6">Get in Touch</h2>
              <ul className="space-y-5">
                {[
                  {
                    label: "Phone",
                    value: "0418 619 166",
                    href: "tel:0418619166",
                    icon: (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    ),
                  },
                  {
                    label: "Email",
                    value: "vanessa@vwpg.com.au",
                    href: "mailto:vanessa@vwpg.com.au",
                    icon: (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    ),
                  },
                  {
                    label: "Office",
                    value: "71 Victoria St, Potts Point NSW 2011",
                    href: "https://maps.google.com/?q=71+Victoria+St+Potts+Point+NSW+2011",
                    icon: (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    ),
                  },
                ].map((item) => (
                  <li key={item.label} className="flex items-start gap-4">
                    <div className="text-gold mt-0.5 flex-shrink-0">{item.icon}</div>
                    <div>
                      <p className="text-xs font-sans font-medium text-gray-400 uppercase tracking-widest mb-1">
                        {item.label}
                      </p>
                      <a
                        href={item.href}
                        target={item.label === "Office" ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-navy font-sans hover:text-gold transition-colors"
                      >
                        {item.value}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Map placeholder */}
            <div className="bg-navy-700 h-64 flex items-center justify-center border border-gray-200">
              <a
                href="https://maps.google.com/?q=71+Victoria+St+Potts+Point+NSW+2011"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center"
              >
                <svg className="w-10 h-10 text-gold mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <p className="text-white font-sans text-sm">71 Victoria St, Potts Point</p>
                <p className="text-gold text-xs font-sans mt-1">View on Google Maps &rarr;</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
