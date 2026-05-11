import { Mail, Phone, MapPin, Send } from "lucide-react";

export const metadata = {
  title: "Contact Us | NexPrint UAE",
  description: "Get in touch for printer AMC, rental, repair, and consumables in UAE.",
};

export default function ContactPage() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="py-20 bg-[#f8f9fa] text-center">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight">
          Contact <span className="text-[#e63946]">Us</span>
        </h1>
        <p className="mt-4 text-slate-500 max-w-xl mx-auto">
          Need printer support or a quick quote? Our UAE team responds fast—often within hours.
        </p>
      </section>

      {/* MAIN SECTION */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">

            {/* LEFT INFO */}
            <div className="lg:w-1/3 space-y-10">

              <div>
                <h2 className="text-2xl font-black text-slate-900 uppercase">
                  Get in Touch
                </h2>
                <p className="text-slate-500 mt-3">
                  We provide fast printer services across Abu Dhabi, Dubai, and nearby areas.
                </p>
              </div>

              <div className="space-y-6">

                <div className="flex items-start gap-4">
                  <Phone className="text-[#e63946]" />
                  <div>
                    <p className="text-sm text-slate-500">Call Us</p>
                    <p className="font-bold text-lg">+971 50 123 4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="text-[#e63946]" />
                  <div>
                    <p className="text-sm text-slate-500">Email</p>
                    <p className="font-bold text-lg">support@nexprint.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="text-[#e63946]" />
                  <div>
                    <p className="text-sm text-slate-500">Office</p>
                    <p className="font-bold text-lg">
                      Abu Dhabi, United Arab Emirates
                    </p>
                  </div>
                </div>

              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/971501234567"
                target="_blank"
                className="block text-center bg-green-500 text-white font-bold py-4 mt-6"
              >
                Chat on WhatsApp
              </a>

            </div>

            {/* RIGHT FORM */}
            <div className="lg:w-2/3 bg-[#f8f9fa] p-8 md:p-12 border border-slate-100">

              <form
                action="/api/contact"
                method="POST"
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase">Full Name</label>
                  <input
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full p-4 border border-slate-200 focus:border-[#e63946] outline-none"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@company.com"
                    className="w-full p-4 border border-slate-200 focus:border-[#e63946] outline-none"
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label className="text-xs font-bold uppercase">Phone</label>
                  <input
                    name="phone"
                    placeholder="+971..."
                    className="w-full p-4 border border-slate-200 focus:border-[#e63946] outline-none"
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label className="text-xs font-bold uppercase">Service</label>
                  <select
                    name="service"
                    className="w-full p-4 border border-slate-200 focus:border-[#e63946] outline-none"
                  >
                    <option>Printer AMC</option>
                    <option>Printer Rental</option>
                    <option>Repair Service</option>
                    <option>Consumables</option>
                  </select>
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label className="text-xs font-bold uppercase">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    placeholder="Tell us your requirement..."
                    className="w-full p-4 border border-slate-200 focus:border-[#e63946] outline-none"
                  />
                </div>

                <div className="md:col-span-2">
                  <button className="w-full bg-[#e63946] text-white font-bold py-4 flex items-center justify-center gap-2">
                    Send Message <Send size={18} />
                  </button>
                </div>

              </form>
            </div>

          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="h-[400px]">
        <iframe
          src="https://maps.google.com/maps?q=Abu%20Dhabi&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
        ></iframe>
      </section>

    </main>
  );
}