// components/ITAutomationHero.tsx

import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";

export default function ITAutomationHero() {
  return (
    <section
      className="
        relative overflow-hidden bg-white
        lg:h-[100svh]
        lg:min-h-[620px]
        lg:max-h-[960px]
      "
    >
      {/* Soft premium glow */}
      <div
        className="
          pointer-events-none absolute inset-0
          bg-[radial-gradient(circle_at_80%_46%,rgba(230,57,70,0.045),transparent_34%)]
        "
      />

      {/* Very subtle background grid */}
      <div
        className="
          pointer-events-none absolute inset-0
          bg-[linear-gradient(to_right,rgba(17,24,39,0.014)_1px,transparent_1px),linear-gradient(to_bottom,rgba(17,24,39,0.014)_1px,transparent_1px)]
          bg-[size:72px_72px]
        "
      />

      <div
        className="
          relative z-10 mx-auto grid w-full max-w-[1680px]
          grid-cols-1 items-center

          gap-6
          px-5
          py-6

          sm:gap-8
          sm:px-8
          sm:py-8

          md:gap-10
          md:px-10
          md:py-10

          lg:h-full
          lg:grid-cols-[45%_55%]
          lg:gap-5
          lg:px-10
          lg:py-4

          xl:gap-7
          xl:px-14

          2xl:px-16
        "
      >
        {/* ================= GIF ================= */}
        <div
          className="
            relative
            order-1
            flex
            w-full
            items-center
            justify-center

            md:order-2

            lg:h-full
          "
        >
          <div
            className="
              relative
              flex
              w-full
              items-center
              justify-center

              max-w-[460px]

              sm:max-w-[560px]

              md:max-w-[700px]

              lg:h-[min(72vh,660px)]
              lg:max-w-none

              xl:h-[min(77vh,740px)]

              2xl:h-[min(80vh,790px)]
            "
          >
            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[72%]
                w-[72%]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#fff5f4]
                blur-3xl
              "
            />

            <Image
              src="/nexprint.gif"
              alt="Printer sales, rental, repair, consumables and office equipment services"
              width={1100}
              height={900}
              priority
              unoptimized
              sizes="
                (max-width: 640px) 94vw,
                (max-width: 768px) 88vw,
                (max-width: 1024px) 78vw,
                55vw
              "
              className="
                relative
                z-10
                h-auto
                max-h-full
                w-full
                object-contain
              "
            />
          </div>
        </div>

        {/* ================= CONTENT ================= */}
        <div
          className="
            relative
            z-20
            order-2
            flex
            flex-col
            justify-center

            md:order-1
          "
        >
          <div className="max-w-[700px]">
            {/* Small badge */}
            <div
              className="
                mb-4
                inline-flex
                w-fit
                items-center
                rounded-full
                border
                border-[#f2d5d8]
                bg-[#fff7f7]
                px-4
                py-2
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.12em]
                text-[#e63946]

                sm:text-[12px]
              "
            >
              Printing & Office Solutions • UAE
            </div>

            {/* Main heading */}
            <h1
              className="
                max-w-[700px]

                text-[clamp(2.2rem,9vw,3rem)]
                font-[800]
                leading-[1.04]
                tracking-[-0.04em]
                text-[#111827]

                sm:text-[clamp(2.6rem,6vw,3.5rem)]

                md:text-[clamp(2.9rem,5vw,3.9rem)]

                lg:text-[clamp(2.8rem,3.4vw,3.95rem)]
                lg:leading-[1.03]

                xl:text-[clamp(3.1rem,3.5vw,4.3rem)]

                2xl:text-[clamp(3.4rem,3.6vw,4.65rem)]
              "
            >
              One-Stop Printer
              <br />
              Solutions{" "}
              <span className="text-[#e63946]">
                in Abu Dhabi
              </span>
            </h1>

            {/* Services */}
            <div
              className="
                mt-5
                flex
                max-w-[650px]
                flex-wrap
                items-center
                gap-x-2
                gap-y-1.5

                text-[14px]
                font-semibold
                leading-6
                text-[#111827]

                sm:text-[15px]

                md:text-[16px]

                lg:mt-[clamp(16px,2vh,24px)]
                lg:text-[clamp(14px,0.95vw,16px)]
              "
            >
              <span>Sales</span>
              <span className="text-[#e63946]">•</span>

              <span>Rental</span>
              <span className="text-[#e63946]">•</span>

              <span>AMC</span>
              <span className="text-[#e63946]">•</span>

              <span>Repair</span>
              <span className="text-[#e63946]">•</span>

              <span>Consumables</span>
              <span className="text-[#e63946]">•</span>

              <span>Office Equipment</span>
            </div>

            {/* Description */}
            <p
              className="
                mt-4
                max-w-[610px]

                text-[15px]
                font-normal
                leading-[1.7]
                text-[#667085]

                sm:text-[16px]

                md:text-[17px]

                lg:text-[clamp(14px,1vw,17px)]
              "
            >
              Reliable, affordable and professional printer solutions for
              businesses across Abu Dhabi and the UAE.
            </p>

            {/* CTA */}
            <div
              className="
                mt-7
                flex
                flex-col
                gap-3

                sm:flex-row
                sm:items-center

                lg:mt-[clamp(20px,2.7vh,32px)]
              "
            >
              <a
                href="https://wa.me/971526515283?text=Hello%20Nexprint%20Office%20Equipments%20LLC,%20I%20would%20like%20to%20get%20a%20quote."
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  min-h-[52px]
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-[#e63946]
                  px-7
                  text-[15px]
                  font-semibold
                  text-white

                  shadow-[0_12px_28px_rgba(230,57,70,0.16)]

                  transition-all
                  duration-200

                  hover:-translate-y-0.5
                  hover:bg-[#d92f3c]
                  hover:shadow-[0_16px_34px_rgba(230,57,70,0.22)]

                  sm:min-h-[54px]
                  sm:px-8
                  sm:text-[16px]
                "
              >
                Get a Quote
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="tel:+971555328978"
                className="
                  inline-flex
                  min-h-[52px]
                  items-center
                  justify-center
                  gap-3
                  rounded-full

                  border
                  border-[#d9dde5]

                  bg-white

                  px-7

                  text-[15px]
                  font-semibold
                  text-[#111827]

                  shadow-[0_8px_20px_rgba(15,23,42,0.035)]

                  transition-all
                  duration-200

                  hover:border-[#e63946]
                  hover:text-[#e63946]

                  sm:min-h-[54px]
                  sm:px-8
                  sm:text-[16px]
                "
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}