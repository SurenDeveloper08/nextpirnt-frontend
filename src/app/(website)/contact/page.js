import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import ContactForm from "@/app/components/ContactForm";

export const metadata = {
  title: "Contact Us | NexPrint UAE",
  description:
    "Get in touch for printer AMC, rental, repair, and consumables in UAE.",
};

export default function ContactPage() {
  return (
    <main className="bg-white overflow-hidden">
      {/* Hero */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-slate-900">
            Contact <span className="text-[#e63946]">Us</span>
          </h1>

          <p className="mt-5 max-w-2xl mx-auto text-slate-500 text-base md:text-lg">
            Need printer support or a quick quote? Our UAE team usually
            responds within a few hours.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* Left */}
            <div className="w-full lg:w-1/3">
              <h2 className="text-3xl font-black text-slate-900 uppercase">
                Get in Touch
              </h2>

              <p className="mt-4 text-slate-500 leading-relaxed">
                We provide fast printer repair, AMC, rental, and toner supply
                services across Abu Dhabi, Dubai, Sharjah, and nearby areas.
              </p>

              <div className="mt-10 space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-[#e63946] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-slate-500">Call Us</p>
                    <a
                      href="tel:+971555328978"
                      className="font-semibold text-lg text-slate-900 hover:text-[#e63946]"
                    >
                      +971 55 532 8978
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-[#e63946] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-slate-500">Email</p>
                    <a
                      href="mailto:sales@nexprint.ae"
                      className="font-semibold text-lg text-slate-900 hover:text-[#e63946]"
                    >
                      sales@nexprint.ae
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-[#e63946] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-slate-500">Office</p>
                    <p className="font-semibold text-lg text-slate-900 leading-relaxed">
                      Mussaffah M-13,
                      <br />
                      Abu Dhabi,
                      <br />
                      United Arab Emirates
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/971555328978"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex w-full items-center justify-center rounded-xl bg-green-600 px-6 py-4 font-semibold text-white transition hover:bg-green-700"
              >
                Chat on WhatsApp
              </a>
            </div>

            {/* Right */}
            <div className="w-full lg:w-2/3">
                <ContactForm />
              </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="pb-16 md:pb-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3634.333836570622!2d54.4919375!3d24.369687499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e4191bcfae84d%3A0x347b9cd4493ab40a!2sNexprint%20Office%20Equipments%20Llc!5e0!3m2!1sen!2sae!4v1782043233022!5m2!1sen!2sae"
            className="w-full h-[350px] md:h-[500px]"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </main>
  );
}