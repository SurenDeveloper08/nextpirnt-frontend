"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  ChevronDown,
  Sparkles,
  CircleCheck,
} from "lucide-react";

/* =========================================================
   TYPES
========================================================= */

interface ServiceFAQ {
  question: string;
  answer: string;
}

interface Service {
  _id?: string;
  name: string;
  slug?: string;
  image?: string;
  shortDescription?: string;
  description?: string;
  features?: string[];
  benefits?: string[];
  faq?: ServiceFAQ[];
}

interface ServiceClientProps {
  service: Service;
}

/* =========================================================
   SERVICE PAGE
========================================================= */

export default function ServiceClient({
  service,
}: ServiceClientProps) {
  const whatsappMessage = encodeURIComponent(
    `Hello Nexprint Office Equipments LLC, I'm interested in ${service.name}.`
  );

  const whatsappUrl = `https://wa.me/971555328978?text=${whatsappMessage}`;

  return (
    <main className="overflow-hidden bg-white">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative bg-white py-14 sm:py-16 md:py-20 lg:py-24 xl:py-28">
        {/* Background Accent */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-48 top-0 h-[500px] w-[500px] rounded-full bg-[#e63946]/[0.025] blur-3xl"
        />

        <div className="relative mx-auto w-full max-w-[1600px] px-5 sm:px-7 md:px-10 lg:px-12 xl:px-16 2xl:px-20">
          <div className="grid items-center gap-10 md:gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-14 xl:gap-20">

            {/* LEFT */}

            <div className="min-w-0 lg:max-w-[650px]">

              {/* Label */}

              <div className="mb-4 flex items-center gap-2.5">
                <span className="h-[2px] w-7 rounded-full bg-[#e63946]" />

                <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-[#e63946] sm:text-[12px]">
                  Professional Service
                </span>
              </div>

              {/* Heading */}

              <h1 className="max-w-[680px] text-[34px] font-semibold leading-[1.13] tracking-[-0.03em] text-[#27303f] sm:text-[40px] md:text-[46px] lg:text-[50px] xl:text-[54px]">
                {service.name}
              </h1>

              {/* Description */}

              {service.shortDescription && (
                <p className="mt-5 max-w-[620px] text-[14.5px] leading-[1.8] text-[#667085] sm:text-[15.5px] lg:text-[16px]">
                  {service.shortDescription}
                </p>
              )}

              {/* Quick Points */}

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <QuickPoint text="Professional Support" />
                <QuickPoint text="Reliable Service" />
                <QuickPoint text="Flexible Solutions" />
                <QuickPoint text="UAE-Wide Support" />
              </div>

              {/* Buttons */}

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-full bg-[#e63946] px-6 text-[13.5px] font-medium text-white transition-all duration-300 hover:bg-[#cf303d] hover:shadow-[0_10px_30px_rgba(230,57,70,0.18)] sm:px-7 sm:text-[14px]"
                >
                  <MessageCircle
                    size={17}
                    strokeWidth={1.8}
                  />

                  WhatsApp Enquiry

                  <ArrowRight
                    size={15}
                    strokeWidth={1.8}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>

                <Link
                  href="/contact"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-[#d9dde5] bg-white px-6 text-[13.5px] font-medium text-[#475467] transition-all duration-300 hover:border-[#e63946] hover:text-[#e63946] sm:px-7 sm:text-[14px]"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* RIGHT IMAGE */}

            <div className="relative mx-auto w-full min-w-0 max-w-[720px] lg:mx-0">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] border border-[#eaecf0] bg-[#f8f9fa] sm:rounded-[24px]">
                {service.image ? (
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    priority
                    unoptimized
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-[13px] text-[#98a2b3]">
                    Service Image
                  </div>
                )}
              </div>

              <div
                aria-hidden="true"
                className="absolute -bottom-4 -left-4 -z-10 h-[45%] w-[45%] rounded-[20px] bg-[#e63946]/[0.05]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURES
      ===================================================== */}

      {service.features && service.features.length > 0 && (
        <section className="relative bg-[#fafafa] py-14 sm:py-16 md:py-20 lg:py-24">
          <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-7 md:px-10 lg:px-12 xl:px-16 2xl:px-20">

            {/* Header */}

            <SectionHeader
              label="What We Offer"
              title="Service"
              highlighted="Features"
              description={`Key features included with our ${service.name} service.`}
            />

            {/* Features */}

            <div className="mx-auto mt-9 grid max-w-[1200px] gap-4 sm:mt-11 md:grid-cols-2 lg:gap-5">
              {service.features.map((feature, index) => (
                <div
                  key={`${feature}-${index}`}
                  className="flex items-start gap-3.5 rounded-[16px] border border-[#eaecf0] bg-white p-5 sm:p-6"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-[#e63946]/[0.07] text-[#e63946]">
                    <CheckCircle2
                      size={17}
                      strokeWidth={1.8}
                    />
                  </div>

                  <p className="pt-1.5 text-[14px] font-medium leading-[1.65] text-[#475467] sm:text-[14.5px]">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =====================================================
          BENEFITS
      ===================================================== */}

      {service.benefits && service.benefits.length > 0 && (
        <section className="bg-white py-14 sm:py-16 md:py-20 lg:py-24">
          <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-7 md:px-10 lg:px-12 xl:px-16 2xl:px-20">

            <SectionHeader
              label="Why It Helps"
              title="Service"
              highlighted="Benefits"
              description="Practical benefits designed to keep your business printing efficiently."
            />

            <div className="mx-auto mt-9 grid max-w-[1200px] gap-5 sm:mt-11 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {service.benefits.map((benefit, index) => (
                <div
                  key={`${benefit}-${index}`}
                  className="group rounded-[18px] border border-[#eaecf0] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#e63946]/20 hover:shadow-[0_16px_40px_rgba(16,24,40,0.055)] sm:rounded-[20px]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-[11px] bg-[#e63946]/[0.07] text-[#e63946]">
                    <Sparkles
                      size={18}
                      strokeWidth={1.7}
                    />
                  </div>

                  <p className="mt-5 text-[14px] leading-[1.75] text-[#667085] sm:text-[15px]">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =====================================================
          SERVICE DETAILS
      ===================================================== */}

      {service.description && (
        <section className="border-y border-[#eaecf0] bg-[#fafafa] py-14 sm:py-16 md:py-20 lg:py-24">
          <div className="mx-auto w-full max-w-[1050px] px-5 sm:px-7 md:px-10">

            <div className="mb-8">
              <div className="mb-3 flex items-center gap-2.5">
                <span className="h-[2px] w-7 rounded-full bg-[#e63946]" />

                <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-[#e63946] sm:text-[12px]">
                  More Information
                </span>
              </div>

              <h2 className="text-[28px] font-semibold leading-[1.2] tracking-[-0.025em] text-[#27303f] sm:text-[32px] lg:text-[38px]">
                Service{" "}
                <span className="text-[#e63946]">
                  Details
                </span>
              </h2>
            </div>

            <div
              className="
                prose
                prose-slate
                max-w-none

                prose-headings:font-semibold
                prose-headings:tracking-[-0.02em]
                prose-headings:text-[#27303f]

                prose-h2:mt-9
                prose-h2:text-[24px]

                prose-h3:mt-7
                prose-h3:text-[20px]

                prose-p:text-[14.5px]
                prose-p:leading-[1.85]
                prose-p:text-[#667085]
                sm:prose-p:text-[15.5px]

                prose-li:text-[14.5px]
                prose-li:leading-[1.8]
                prose-li:text-[#667085]
                sm:prose-li:text-[15.5px]

                prose-strong:font-semibold
                prose-strong:text-[#344054]

                prose-a:font-medium
                prose-a:text-[#e63946]
                prose-a:no-underline
                hover:prose-a:underline

                prose-img:rounded-[16px]
              "
              dangerouslySetInnerHTML={{
                __html: service.description,
              }}
            />
          </div>
        </section>
      )}

      {/* =====================================================
          FAQ
      ===================================================== */}

      {service.faq && service.faq.length > 0 && (
        <section className="bg-white py-14 sm:py-16 md:py-20 lg:py-24">
          <div className="mx-auto w-full max-w-[900px] px-5 sm:px-7 md:px-10">

            <SectionHeader
              label="Common Questions"
              title="Frequently Asked"
              highlighted="Questions"
              description={`Helpful answers about our ${service.name} service.`}
            />

            <div className="mt-9 space-y-3 sm:mt-11">
              {service.faq.map((item, index) => (
                <details
                  key={`${item.question}-${index}`}
                  className="group overflow-hidden rounded-[14px] border border-[#eaecf0] bg-white transition-colors open:border-[#e63946]/20"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-5 py-5 text-[14px] font-medium text-[#344054] marker:hidden sm:px-6 sm:text-[15px]">
                    <span>
                      {item.question}
                    </span>

                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f8f9fa] text-[#667085] transition-all duration-300 group-open:rotate-180 group-open:bg-[#e63946]/[0.07] group-open:text-[#e63946]">
                      <ChevronDown
                        size={16}
                        strokeWidth={1.8}
                      />
                    </span>
                  </summary>

                  <div className="border-t border-[#f0f1f3] px-5 py-5 sm:px-6">
                    <p className="text-[13.5px] leading-[1.8] text-[#667085] sm:text-[14.5px]">
                      {item.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="relative overflow-hidden border-t border-[#eaecf0] bg-[#fafafa] py-14 sm:py-16 md:py-20 lg:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e63946]/[0.025] blur-3xl"
        />

        <div className="relative mx-auto max-w-[780px] px-5 text-center sm:px-7">

          <div className="mb-3 flex items-center justify-center gap-2.5">
            <span className="h-[2px] w-7 rounded-full bg-[#e63946]" />

            <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-[#e63946] sm:text-[12px]">
              Get Started
            </span>

            <span className="h-[2px] w-7 rounded-full bg-[#e63946]" />
          </div>

          <h2 className="text-[29px] font-semibold leading-[1.18] tracking-[-0.025em] text-[#27303f] sm:text-[34px] md:text-[38px] lg:text-[42px]">
            Need{" "}
            <span className="text-[#e63946]">
              {service.name}?
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-[590px] text-[14px] leading-[1.75] text-[#667085] sm:text-[15px]">
            Speak with our team about your requirements and get
            the right solution for your business.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-full bg-[#e63946] px-7 text-[14px] font-medium text-white transition-all duration-300 hover:bg-[#cf303d] hover:shadow-[0_10px_30px_rgba(230,57,70,0.18)]"
            >
              <MessageCircle
                size={17}
                strokeWidth={1.8}
              />

              WhatsApp Enquiry

              <ArrowRight
                size={15}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <Link
              href="/contact"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-[#d9dde5] bg-white px-7 text-[14px] font-medium text-[#475467] transition-all duration-300 hover:border-[#e63946] hover:text-[#e63946]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

/* =========================================================
   QUICK POINT
========================================================= */

function QuickPoint({
  text,
}: {
  text: string;
}) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#e63946]/[0.07] text-[#e63946]">
        <CircleCheck
          size={14}
          strokeWidth={1.8}
        />
      </span>

      <span className="text-[13.5px] font-medium text-[#475467] sm:text-[14px]">
        {text}
      </span>
    </div>
  );
}

/* =========================================================
   SECTION HEADER
========================================================= */

function SectionHeader({
  label,
  title,
  highlighted,
  description,
}: {
  label: string;
  title: string;
  highlighted: string;
  description?: string;
}) {
  return (
    <div className="mx-auto max-w-[720px] text-center">
      <div className="mb-3 flex items-center justify-center gap-2.5">
        <span className="h-[2px] w-7 rounded-full bg-[#e63946]" />

        <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-[#e63946] sm:text-[12px]">
          {label}
        </span>

        <span className="h-[2px] w-7 rounded-full bg-[#e63946]" />
      </div>

      <h2 className="text-[29px] font-semibold leading-[1.18] tracking-[-0.025em] text-[#27303f] sm:text-[34px] md:text-[38px] lg:text-[42px]">
        {title}{" "}
        <span className="text-[#e63946]">
          {highlighted}
        </span>
      </h2>

      {description && (
        <p className="mx-auto mt-4 max-w-[590px] text-[14px] leading-[1.75] text-[#667085] sm:text-[15px]">
          {description}
        </p>
      )}
    </div>
  );
}