// components/ITAutomationHero.tsx

import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";

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
      {/* Soft premium background glow */}
      <div
        className="
          pointer-events-none absolute inset-0
          bg-[radial-gradient(circle_at_80%_46%,rgba(230,57,70,0.035),transparent_34%)]
        "
      />

      {/* Very subtle grid */}
      <div
        className="
          pointer-events-none absolute inset-0
          bg-[linear-gradient(to_right,rgba(17,24,39,0.012)_1px,transparent_1px),linear-gradient(to_bottom,rgba(17,24,39,0.012)_1px,transparent_1px)]
          bg-[size:76px_76px]
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
          lg:gap-6
          lg:px-10
          lg:py-4

          xl:gap-8
          xl:px-14

          2xl:px-16
        "
      >
        {/* ================= RIGHT GIF ================= */}
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
                h-[70%]
                w-[70%]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#fff6f5]
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
                relative z-10
                h-auto
                max-h-full
                w-full
                object-contain
              "
            />
          </div>
        </div>

        {/* ================= LEFT CONTENT ================= */}
        <div
          className="
            relative z-20
            order-2
            flex
            flex-col
            justify-center

            md:order-1
          "
        >
          <div className="max-w-[700px]">
            {/* Badge */}
            <div
              className="
                mb-5
                inline-flex
                w-fit
                items-center
                gap-2

                rounded-full
                border border-[#f3dadd]
                bg-[#fff8f8]

                px-4
                py-2

                text-[11px]
                font-medium
                tracking-[0.015em]
                text-[#e63946]

                sm:text-[12px]

                lg:mb-[clamp(16px,2.2vh,24px)]
              "
            >
              <span
                className="
                  flex
                  h-[18px]
                  w-[18px]
                  items-center
                  justify-center

                  rounded-full
                  bg-[#e63946]

                  text-[9px]
                  font-semibold
                  text-white
                "
              >
                ✓
              </span>

              Your Trusted Printing Solutions Partner
            </div>

            {/* Heading */}
            <h1
              className="
                max-w-[700px]

                text-[clamp(2.15rem,8.5vw,2.9rem)]
                font-[700]
                leading-[1.08]
                tracking-[-0.032em]
                text-[#1f2937]

                sm:text-[clamp(2.55rem,6vw,3.35rem)]

                md:text-[clamp(2.8rem,5vw,3.7rem)]

                lg:text-[clamp(2.65rem,3.25vw,3.8rem)]
                lg:leading-[1.06]

                xl:text-[clamp(3rem,3.35vw,4.15rem)]

                2xl:text-[clamp(3.25rem,3.4vw,4.4rem)]
              "
            >
              One-Stop Printer Solutions
              <br />

              <span className="text-[#e63946]">
                in Abu Dhabi
              </span>
            </h1>

            {/* Description */}
            <p
              className="
                mt-5
                max-w-[630px]

                text-[15px]
                font-normal
                leading-[1.7]
                text-[#6b7280]

                sm:text-[16px]

                md:text-[16.5px]

                lg:mt-[clamp(16px,2.2vh,24px)]
                lg:text-[clamp(14px,0.95vw,16px)]
                lg:leading-[1.72]
              "
            >
              Reliable printer sales, rental, AMC, repair, consumables and
              office equipment solutions designed to keep your business
              running smoothly across Abu Dhabi and the UAE.
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

                lg:mt-[clamp(22px,2.8vh,32px)]
              "
            >

              <a
                href="/services"
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
    font-medium
    text-white
    shadow-[0_10px_24px_rgba(230,57,70,0.15)]
    transition-all
    duration-200
    hover:-translate-y-0.5
    hover:bg-[#d9313e]
    hover:shadow-[0_14px_30px_rgba(230,57,70,0.2)]
    sm:min-h-[54px]
    sm:px-8
    sm:text-[15.5px]
  "
              >
                Explore Our Services

                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/contact"
                target="_blank"
                rel="noopener noreferrer"
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
    font-medium
    text-[#374151]
    transition-all
    duration-200
    hover:border-[#e63946]
    hover:text-[#e63946]
    hover:shadow-[0_8px_20px_rgba(15,23,42,0.04)]
    sm:min-h-[54px]
    sm:px-8
    sm:text-[15.5px]
  "
              >
                <MessageCircle className="h-4 w-4" />
                Get a Free Quote
              </a>

            </div>

            {/* Trust features */}
            <div
              className="
                mt-7
                grid
                grid-cols-2
                gap-x-5
                gap-y-3

                text-[12px]
                font-normal
                text-[#6b7280]

                sm:flex
                sm:flex-wrap
                sm:items-center
                sm:gap-x-6
                sm:text-[12.5px]

                lg:mt-[clamp(20px,2.8vh,30px)]
              "
            >
              {[
                "Fast Service",
                "Genuine Consumables",
                "Flexible Rental Plans",
                "UAE-Wide Support",
              ].map((item) => (
                <div
                  key={item}
                  className="
                    flex
                    items-center
                    gap-2
                  "
                >
                  <span
                    className="
                      flex
                      h-[17px]
                      w-[17px]
                      shrink-0
                      items-center
                      justify-center

                      rounded-full
                      bg-[#e63946]

                      text-[9px]
                      font-semibold
                      text-white
                    "
                  >
                    ✓
                  </span>

                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}