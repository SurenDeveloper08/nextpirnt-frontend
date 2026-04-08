import { Send, Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata = {
  title:
    "Contact Nex Print Office Equipment LLC | Printer Sales & Rental Abu Dhabi",
  description:
    "Contact Nex Print Office Equipment LLC for printer sales, rental, AMC services, consumables, and repair in Abu Dhabi and across UAE. Fast response and expert technical support.",
};

export default function ContactPage() {
  return (
    <main className="bg-gray-50 text-[#101828]">

      {/* ================= HERO SECTION ================= */}
        <section className="bg-gray-50 py-16 px-6 border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-4">
           Contact Us
          </h1>
          <div className="h-1.5 w-24 bg-[#e63946] mx-auto rounded-full mb-6" />
        <p className="text-gray-600 max-w-2xl mx-auto">
           Professional printer sales, printer rental, AMC services,
            consumables supply, and printer repair solutions in Abu Dhabi and
            across the UAE.
          </p>
        </div>
      </section>
    
      {/* ================= CONTACT SECTION ================= */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">

          {/* -------- LEFT SIDE: CONTACT INFO -------- */}
          <div className="space-y-10">

            <h2 className="text-3xl font-black uppercase">
              Get In Touch
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Our expert team provides reliable and cost-effective office
              equipment solutions for businesses across Abu Dhabi and UAE.
              Contact us today for fast technical support or a free quotation.
            </p>

            <address className="not-italic space-y-6 text-gray-700">

              <div className="flex items-start gap-4">
                <Phone className="text-[#e63946]" />
                <div>
                  <strong>Phone:</strong><br />
                  <a href="tel:+971XXXXXXXXX" className="hover:text-[#e63946]">
                    +971 XX XXX XXXX
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="text-[#e63946]" />
                <div>
                  <strong>Email:</strong><br />
                  <a href="mailto:info@nexprint.ae" className="hover:text-[#e63946]">
                    info@nexprint.ae
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="text-[#e63946]" />
                <div>
                  <strong>Office Address:</strong><br />
                  Abu Dhabi, United Arab Emirates
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="text-[#e63946]" />
                <div>
                  <strong>Working Hours:</strong><br />
                  Monday – Saturday <br />
                  8:00 AM – 6:00 PM
                </div>
              </div>

            </address>
          </div>

          {/* -------- RIGHT SIDE: FORM -------- */}
          <div className="bg-white shadow-2xl rounded-3xl p-8 md:p-14 border border-gray-100">

            <h2 className="text-2xl font-black uppercase mb-8 text-center">
              Request a Service
            </h2>

            <form className="grid md:grid-cols-2 gap-6">

              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-2">Full Name</label>
                <input
                  type="text"
                  required
                  className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#e63946]"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-2">Phone Number</label>
                <input
                  type="tel"
                  required
                  className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#e63946]"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-2">Email Address</label>
                <input
                  type="email"
                  required
                  className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#e63946]"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-2">Service Required</label>
                <select
                  required
                  className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#e63946]"
                >
                  <option>Printer Sales</option>
                  <option>Printer Rental</option>
                  <option>AMC Services</option>
                  <option>Printer Repair</option>
                  <option>Consumables Supply</option>
                </select>
              </div>

              <div className="md:col-span-2 flex flex-col">
                <label className="text-sm font-semibold mb-2">Message</label>
                <textarea
                  rows="4"
                  className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#e63946]"
                />
              </div>

              <div className="md:col-span-2 mt-4">
                <button
                  type="submit"
                  className="w-full bg-[#e63946] text-white py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-[#101828] transition-all flex items-center justify-center gap-2"
                >
                  Submit Request <Send size={16} />
                </button>
              </div>

            </form>
          </div>

        </div>
      </section>

      {/* ================= GOOGLE MAP ================= */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb="
            width="100%"
            height="400"
            loading="lazy"
            className="rounded-3xl border border-gray-200"
          ></iframe>
        </div>
      </section>

      {/* ================= LOCAL BUSINESS SCHEMA ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Nex Print Office Equipment LLC",
            areaServed: "United Arab Emirates",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Abu Dhabi",
              addressCountry: "AE",
            },
            telephone: "+971XXXXXXXXX",
            email: "info@nexprint.ae",
          }),
        }}
      />
    </main>
  );
}