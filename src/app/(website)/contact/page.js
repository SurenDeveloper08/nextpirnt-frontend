import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock3,
} from "lucide-react";
import ContactForm from "@/app/components/ContactForm.tsx"
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
                href="https://wa.me/9710527761348"
                target="_blank"
                className="block text-center bg-green-500 text-white font-bold py-4 mt-6"
              >
                Chat on WhatsApp
              </a>

            </div>

            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="px-4 lg:px-6 pb-16 lg:pb-24">

        <div className="max-w-7xl mx-auto rounded-[32px] overflow-hidden border border-slate-200 shadow-sm">

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3634.333836570622!2d54.4919375!3d24.369687499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e4191bcfae84d%3A0x347b9cd4493ab40a!2sNexprint%20Office%20Equipments%20Llc!5e0!3m2!1sen!2sae!4v1782043233022!5m2!1sen!2sae"
            className="w-full h-[320px] md:h-[450px] border-0"
            loading="lazy"
          ></iframe>

        </div>

      </section>

    </main>
  );
}