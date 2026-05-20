import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock3,
} from "lucide-react";

export const metadata = {
  title: "Contact Us | NexPrint UAE",
  description:
    "Get in touch for printer AMC, rental, repair, and consumables in UAE.",
};

export default function ContactPage() {
  return (
    <main className="bg-white overflow-hidden">

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

            <div className="lg:col-span-3">

              <div className="bg-white border border-slate-200 rounded-[32px] p-6 md:p-10 shadow-sm">

                <div className="mb-8">

                  <span className="inline-flex px-4 py-1.5 rounded-full bg-red-50 text-[#e63946] text-sm font-semibold mb-4">
                    Send Message
                  </span>

                  <h2 className="text-2xl md:text-3xl font-black text-slate-900">
                    Request a Quote
                  </h2>

                  <p className="text-slate-500 mt-3 leading-relaxed">
                    Fill out the form and our team will contact you shortly.
                  </p>

                </div>

                <form
                  action="/api/contact"
                  method="POST"
                  className="grid grid-cols-1 md:grid-cols-2 gap-5"
                >

                  {/* NAME */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">
                      Full Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="John Doe"
                      className="
                        w-full h-14 px-5
                        rounded-2xl
                        border border-slate-200
                        bg-slate-50
                        focus:bg-white
                        focus:border-[#e63946]
                        outline-none
                        transition-all
                      "
                    />
                  </div>

                  {/* EMAIL */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">
                      Email Address
                    </label>

                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="john@company.com"
                      className="
                        w-full h-14 px-5
                        rounded-2xl
                        border border-slate-200
                        bg-slate-50
                        focus:bg-white
                        focus:border-[#e63946]
                        outline-none
                        transition-all
                      "
                    />
                  </div>

                  {/* PHONE */}
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-semibold text-slate-700">
                      Phone Number
                    </label>

                    <input
                      type="text"
                      name="phone"
                      placeholder="+971..."
                      className="
                        w-full h-14 px-5
                        rounded-2xl
                        border border-slate-200
                        bg-slate-50
                        focus:bg-white
                        focus:border-[#e63946]
                        outline-none
                        transition-all
                      "
                    />
                  </div>

                  {/* SERVICE */}
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-semibold text-slate-700">
                      Service Required
                    </label>

                    <select
                      name="service"
                      className="
                        w-full h-14 px-5
                        rounded-2xl
                        border border-slate-200
                        bg-slate-50
                        focus:bg-white
                        focus:border-[#e63946]
                        outline-none
                        transition-all
                      "
                    >
                      <option>Printer AMC</option>
                      <option>Printer Rental</option>
                      <option>Repair Service</option>
                      <option>Consumables</option>
                    </select>
                  </div>

                  {/* MESSAGE */}
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-semibold text-slate-700">
                      Message
                    </label>

                    <textarea
                      name="message"
                      rows={5}
                      required
                      placeholder="Tell us your requirements..."
                      className="
                        w-full px-5 py-4
                        rounded-2xl
                        border border-slate-200
                        bg-slate-50
                        focus:bg-white
                        focus:border-[#e63946]
                        outline-none
                        resize-none
                        transition-all
                      "
                    />
                  </div>

                  {/* BUTTON */}
                  <div className="md:col-span-2 pt-2">

                    <button
                      type="submit"
                      className="
                        w-full h-14
                        rounded-2xl
                        bg-[#e63946]
                        hover:bg-slate-900
                        text-white font-semibold
                        flex items-center justify-center gap-2
                        transition-all duration-300
                        shadow-lg hover:shadow-xl
                      "
                    >
                      Send Message
                      <Send size={18} />
                    </button>

                  </div>

                </form>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="px-4 lg:px-6 pb-16 lg:pb-24">

        <div className="max-w-7xl mx-auto rounded-[32px] overflow-hidden border border-slate-200 shadow-sm">

          <iframe
            src="https://maps.google.com/maps?q=Abu%20Dhabi&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-[320px] md:h-[450px] border-0"
            loading="lazy"
          ></iframe>

        </div>

      </section>

    </main>
  );
}