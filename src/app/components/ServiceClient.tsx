"use client";

import Image from "next/image";
import {
  CheckCircle,
  MessageCircle,
} from "lucide-react";

export default function ServiceClient({
  service,
}: any) {
  const whatsappMessage =
    encodeURIComponent(
      `Hello, I'm interested in ${service.name}.`
    );

  return (
    <div className="bg-white">

      {/* HERO */}

      <section className="max-w-7xl mx-auto px-4 py-10 md:py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          <div>
            <p className="text-red-600 font-semibold uppercase">
              Professional Service
            </p>

            <h1 className="text-3xl md:text-5xl font-bold mt-3">
              {service.name}
            </h1>

            {service.shortDescription && (
              <p className="mt-6 text-slate-600 text-lg leading-relaxed">
                {service.shortDescription}
              </p>
            )}

            <div className="mt-8">
              <a
                href={`https://wa.me/971555328978?text=${whatsappMessage}`}
                target="_blank"
                className="
                  inline-flex
                  items-center
                  gap-2
                  bg-green-600
                  text-white
                  px-6
                  h-14
                  rounded-xl
                  font-semibold
                "
              >
                <MessageCircle size={20} />
                WhatsApp Enquiry
              </a>
            </div>
          </div>

          <div>
            {service?.image && (
              <Image
  src={service.image}
  alt={service.name}
  width={700}
  height={500}
  unoptimized
/>
            )}
          </div>

        </div>
      </section>

      {/* FEATURES */}

      {service.features?.length > 0 && (
        <section className="bg-slate-50 py-14">
          <div className="max-w-7xl mx-auto px-4">

            <h2 className="text-3xl font-bold mb-8">
              Service Features
            </h2>

            <div className="grid md:grid-cols-2 gap-5">
              {service.features.map(
                (
                  feature: string,
                  index: number
                ) => (
                  <div
                    key={index}
                    className="flex gap-3 bg-white p-5 rounded-xl"
                  >
                    <CheckCircle
                      size={20}
                      className="text-green-600 shrink-0"
                    />

                    <span>{feature}</span>
                  </div>
                )
              )}
            </div>

          </div>
        </section>
      )}

      {/* BENEFITS */}

      {service.benefits?.length > 0 && (
        <section className="py-14">
          <div className="max-w-7xl mx-auto px-4">

            <h2 className="text-3xl font-bold mb-8">
              Benefits
            </h2>

            <div className="grid md:grid-cols-3 gap-5">
              {service.benefits.map(
                (
                  benefit: string,
                  index: number
                ) => (
                  <div
                    key={index}
                    className="
                      border
                      border-slate-200
                      rounded-xl
                      p-6
                    "
                  >
                    {benefit}
                  </div>
                )
              )}
            </div>

          </div>
        </section>
      )}

      {/* DESCRIPTION */}

      {service.description && (
        <section className="py-14 bg-slate-50">
          <div className="max-w-5xl mx-auto px-4">

            <h2 className="text-3xl font-bold mb-8">
              Service Details
            </h2>

            <div
              className="prose max-w-none"
              dangerouslySetInnerHTML={{
                __html: service.description,
              }}
            />

          </div>
        </section>
      )}

      {/* FAQ */}

      {service.faq?.length > 0 && (
        <section className="py-14">
          <div className="max-w-4xl mx-auto px-4">

            <h2 className="text-3xl font-bold mb-8">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">

              {service.faq.map(
                (item: any, index: number) => (
                  <details
                    key={index}
                    className="
                      border
                      border-slate-200
                      rounded-xl
                      p-5
                    "
                  >
                    <summary className="cursor-pointer font-semibold">
                      {item.question}
                    </summary>

                    <p className="mt-4 text-slate-600">
                      {item.answer}
                    </p>
                  </details>
                )
              )}

            </div>

          </div>
        </section>
      )}

      {/* CTA */}

      <section className="bg-[#e63946] py-16 text-center text-white">
        <div className="max-w-4xl mx-auto px-4">

          <h2 className="text-3xl font-bold">
            Need {service.name}?
          </h2>

          <p className="mt-4 opacity-90">
            Contact our team today for a quick response.
          </p>

          <a
            href={`https://wa.me/971555328978?text=${whatsappMessage}`}
            target="_blank"
            className="
              inline-flex
              items-center
              gap-2
              bg-white
              text-[#e63946]
              px-6
              h-14
              rounded-xl
              font-semibold
              mt-6
            "
          >
            <MessageCircle size={20} />
            WhatsApp Now
          </a>

        </div>
      </section>

    </div>
  );
}