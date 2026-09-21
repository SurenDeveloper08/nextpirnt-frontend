import type { Metadata } from "next";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

import ContactForm from "@/app/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | NexPrint UAE",
  description:
    "Contact NexPrint UAE for printer sales, rental, AMC, repair, consumables and office equipment solutions in Abu Dhabi and across the UAE.",
};

export default function ContactPage() {
  return (
    <main className="overflow-hidden bg-white">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative border-b border-[#eaecf0] bg-[#fafafa] py-14 sm:py-16 md:py-20 lg:py-24">
        {/* Background Accent */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-[#e63946]/[0.025] blur-3xl"
        />

        <div className="relative mx-auto w-full max-w-[1600px] px-5 sm:px-7 md:px-10 lg:px-12 xl:px-16 2xl:px-20">
          <div className="mx-auto max-w-[760px] text-center">

            {/* Label */}
            <div className="mb-4 flex items-center justify-center gap-2.5">
              <span className="h-[2px] w-7 rounded-full bg-[#e63946]" />

              <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-[#e63946] sm:text-[12px]">
                Contact Nexprint
              </span>

              <span className="h-[2px] w-7 rounded-full bg-[#e63946]" />
            </div>

            {/* Heading */}
            <h1 className="text-[34px] font-semibold leading-[1.13] tracking-[-0.03em] text-[#27303f] sm:text-[40px] md:text-[46px] lg:text-[50px]">
              We&apos;re Here to{" "}
              <span className="text-[#e63946]">
                Help
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-[650px] text-[14.5px] leading-[1.8] text-[#667085] sm:text-[15.5px] lg:text-[16px]">
              Need printer support, a service request or a quick quote?
              Contact our team for sales, rental, AMC, repair and
              consumable solutions.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT DETAILS + FORM
      ===================================================== */}

      <section className="relative bg-white py-14 sm:py-16 md:py-20 lg:py-24 xl:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-48 top-1/3 h-[450px] w-[450px] rounded-full bg-[#e63946]/[0.02] blur-3xl"
        />

        <div className="relative mx-auto w-full max-w-[1600px] px-5 sm:px-7 md:px-10 lg:px-12 xl:px-16 2xl:px-20">

          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:gap-14 xl:gap-20">

            {/* =================================================
                LEFT
            ================================================= */}

            <div className="min-w-0 lg:max-w-[470px]">

              {/* Label */}
              <div className="mb-3 flex items-center gap-2.5">
                <span className="h-[2px] w-7 rounded-full bg-[#e63946]" />

                <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-[#e63946] sm:text-[12px]">
                  Get in Touch
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-[28px] font-semibold leading-[1.2] tracking-[-0.025em] text-[#27303f] sm:text-[32px] lg:text-[36px]">
                Talk to Our{" "}
                <span className="text-[#e63946]">
                  Team
                </span>
              </h2>

              <p className="mt-4 max-w-[440px] text-[14px] leading-[1.75] text-[#667085] sm:text-[15px]">
                Whether you need a new printer, rental solution,
                maintenance support or consumables, our team is ready
                to assist you.
              </p>

              {/* ===============================================
                  CONTACT ITEMS
              =============================================== */}

              <div className="mt-8 space-y-3">

                {/* Phone */}
                <a
                  href="tel:+971555328978"
                  className="group flex items-center gap-4 rounded-[14px] border border-[#eaecf0] bg-white p-4 transition-all duration-300 hover:border-[#e63946]/20 hover:bg-[#e63946]/[0.015]"
                >
                  <ContactIcon>
                    <Phone size={18} strokeWidth={1.8} />
                  </ContactIcon>

                  <div className="min-w-0">
                    <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#98a2b3]">
                      Call Us
                    </p>

                    <p className="mt-1 text-[14px] font-medium text-[#344054] transition-colors group-hover:text-[#e63946] sm:text-[15px]">
                      +971 55 532 8978
                    </p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:sales@nexprint.ae"
                  className="group flex items-center gap-4 rounded-[14px] border border-[#eaecf0] bg-white p-4 transition-all duration-300 hover:border-[#e63946]/20 hover:bg-[#e63946]/[0.015]"
                >
                  <ContactIcon>
                    <Mail size={18} strokeWidth={1.8} />
                  </ContactIcon>

                  <div className="min-w-0">
                    <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#98a2b3]">
                      Email
                    </p>

                    <p className="mt-1 break-all text-[14px] font-medium text-[#344054] transition-colors group-hover:text-[#e63946] sm:text-[15px]">
                      sales@nexprint.ae
                    </p>
                  </div>
                </a>

                {/* Address */}
                <div className="flex items-start gap-4 rounded-[14px] border border-[#eaecf0] bg-white p-4">
                  <ContactIcon>
                    <MapPin size={18} strokeWidth={1.8} />
                  </ContactIcon>

                  <div className="min-w-0">
                    <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#98a2b3]">
                      Office
                    </p>

                    <p className="mt-1 text-[14px] font-medium leading-[1.65] text-[#344054] sm:text-[15px]">
                      Mussafah M13, Abu Dhabi,
                      <br />
                      United Arab Emirates
                    </p>
                  </div>
                </div>
              </div>

              {/* ===============================================
                  WHATSAPP
              =============================================== */}

              <a
                href="https://wa.me/971555328978?text=Hello%20Nexprint%20Office%20Equipments%20LLC,%20I%20would%20like%20to%20get%20more%20information."
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-6 inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-full border border-[#e63946]/20 bg-[#e63946]/[0.055] px-6 text-[13.5px] font-medium text-[#e63946] transition-all duration-300 hover:border-[#e63946] hover:bg-[#e63946] hover:text-white sm:text-[14px]"
              >
                <MessageCircle
                  size={17}
                  strokeWidth={1.8}
                />

                Chat on WhatsApp

                <ArrowRight
                  size={15}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>

            {/* =================================================
                RIGHT — FORM
            ================================================= */}

            <div className="min-w-0">
              <div className="rounded-[20px] border border-[#eaecf0] bg-white p-5 shadow-[0_12px_40px_rgba(16,24,40,0.04)] sm:p-7 md:p-8 lg:p-9">
                <div className="mb-7">
                  <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#e63946]">
                    Send an Enquiry
                  </p>

                  <h3 className="mt-2 text-[22px] font-semibold tracking-[-0.02em] text-[#27303f] sm:text-[25px]">
                    How Can We Help?
                  </h3>

                  <p className="mt-2 max-w-[580px] text-[13.5px] leading-[1.7] text-[#667085] sm:text-[14px]">
                    Share your requirement and our team will get in
                    touch with you.
                  </p>
                </div>

                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          LOCATION
      ===================================================== */}

      <section className="bg-[#fafafa] py-14 sm:py-16 md:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-7 md:px-10 lg:px-12 xl:px-16 2xl:px-20">

          {/* Heading */}
          <div className="mb-8 md:mb-10">
            <div className="mb-3 flex items-center gap-2.5">
              <span className="h-[2px] w-7 rounded-full bg-[#e63946]" />

              <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-[#e63946] sm:text-[12px]">
                Our Location
              </span>
            </div>

            <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
              <h2 className="text-[28px] font-semibold leading-[1.2] tracking-[-0.025em] text-[#27303f] sm:text-[32px] lg:text-[36px]">
                Visit Nexprint in{" "}
                <span className="text-[#e63946]">
                  Abu Dhabi
                </span>
              </h2>

              <p className="max-w-[420px] text-[13.5px] leading-[1.7] text-[#667085] md:text-right sm:text-[14px]">
                Mussafah M13, Abu Dhabi, United Arab Emirates
              </p>
            </div>
          </div>

          {/* Map */}
          <div className="overflow-hidden rounded-[20px] border border-[#eaecf0] bg-white">
            <iframe
              title="Nexprint Office Equipments LLC location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3634.333836570622!2d54.4919375!3d24.369687499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e4191bcfae84d%3A0x347b9cd4493ab40a!2sNexprint%20Office%20Equipments%20Llc!5e0!3m2!1sen!2sae!4v1782043233022!5m2!1sen!2sae"
              className="h-[340px] w-full border-0 sm:h-[400px] md:h-[460px] lg:h-[500px]"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

/* =========================================================
   CONTACT ICON
========================================================= */

function ContactIcon({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[11px] border border-[#e63946]/10 bg-[#e63946]/[0.06] text-[#e63946]">
      {children}
    </div>
  );
}