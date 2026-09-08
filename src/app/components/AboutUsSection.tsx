// components/AboutSection.tsx

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface AboutProps {
  about: {
    title: string;
    description: string;
    image?: string;
  };
}

export default function AboutSection({ about }: AboutProps) {
  const highlights = [
    "Printer Sales & Rental",
    "Repair & AMC Support",
    "Genuine Consumables",
    "Office Equipment Solutions",
  ];

  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-14 md:py-16 lg:py-20 xl:py-24">
      {/* Soft background accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/2 h-[360px] w-[360px] -translate-y-1/2 rounded-full bg-[#e63946]/[0.025] blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-[1600px] px-5 sm:px-7 md:px-10 lg:px-12 xl:px-16 2xl:px-20">
        <div
          className="
            grid grid-cols-1 items-center
            gap-9
            sm:gap-10
            md:gap-12

            lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]
            lg:gap-10

            xl:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]
            xl:gap-14

            2xl:gap-20
          "
        >
          {/* ================= IMAGE ================= */}
          {about.image && (
            <div className="relative mx-auto w-full min-w-0 max-w-[650px] lg:mx-0">
              {/* Back shape */}
              <div
                aria-hidden="true"
                className="
                  absolute
                  -bottom-2.5
                  -right-2.5
                  h-[88%]
                  w-[88%]
                  rounded-[22px]
                  bg-[#fff3f4]

                  sm:-bottom-3
                  sm:-right-3
                  sm:rounded-[26px]

                  lg:-bottom-4
                  lg:-right-4
                  lg:rounded-[28px]
                "
              />

              {/* Image */}
              <div className="relative overflow-hidden rounded-[18px] bg-[#f8f8f8] sm:rounded-[22px] lg:rounded-[26px]">
                <Image
                  src={about.image}
                  alt={about.title || "About Nexprint"}
                  width={900}
                  height={700}
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 85vw, 45vw"
                  className="aspect-[4/3] h-auto w-full object-cover"
                />

                {/* Soft image fade */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-[25%] bg-gradient-to-t from-black/[0.07] to-transparent"
                />
              </div>
            </div>
          )}

          {/* ================= CONTENT ================= */}
          <div
            className="
              flex
              w-full
              min-w-0
              flex-col
              items-start
              text-left

              lg:max-w-[620px]
              xl:max-w-[660px]
              2xl:max-w-[680px]
            "
          >
            {/* Label */}
            <div className="mb-3.5 flex items-center gap-2.5 sm:mb-4">
              <span className="h-[2px] w-7 shrink-0 rounded-full bg-[#e63946]" />

              <span
                className="
                  text-[11px]
                  font-medium
                  uppercase
                  tracking-[0.14em]
                  text-[#e63946]
                  sm:text-[12px]
                "
              >
                About Nexprint
              </span>
            </div>

            {/* Dynamic title */}
            <h2
              className="
                w-full
                max-w-[650px]

                break-words

                text-[29px]
                font-semibold
                leading-[1.18]
                tracking-[-0.025em]
                text-[#27303f]

                sm:text-[34px]
                sm:leading-[1.16]

                md:text-[38px]

                lg:text-[clamp(34px,2.6vw,44px)]
                lg:leading-[1.14]

                xl:text-[46px]

                2xl:text-[48px]
              "
            >
              {about.title}
            </h2>

            {/* Dynamic description */}
            <p
              className="
                mt-4
                w-full
                max-w-[640px]

                break-words

                text-[14.5px]
                font-normal
                leading-[1.75]
                text-[#667085]

                sm:mt-5
                sm:text-[15.5px]
                sm:leading-[1.8]

                lg:text-[15.5px]

                xl:text-[16px]
              "
            >
              {about.description}
            </p>

            {/* Divider */}
            <div className="my-6 h-px w-full max-w-[620px] bg-[#eaecf0] sm:my-7" />

            {/* Features */}
            <div
              className="
                grid
                w-full
                max-w-[620px]
                grid-cols-1
                gap-x-5
                gap-y-3

                min-[430px]:grid-cols-2

                sm:gap-x-7
                sm:gap-y-3.5
              "
            >
              {highlights.map((item) => (
                <div
                  key={item}
                  className="
                    flex
                    min-w-0
                    items-center
                    gap-2.5

                    text-[13.5px]
                    font-normal
                    leading-[1.5]
                    text-[#475467]

                    sm:text-[14px]
                    lg:text-[14px]
                    xl:text-[14.5px]
                  "
                >
                  <span
                    className="
                      flex
                      h-5
                      w-5
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#fff1f2]
                    "
                  >
                    <CheckCircle2
                      className="h-[14px] w-[14px] text-[#e63946]"
                      strokeWidth={2}
                    />
                  </span>

                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-7 sm:mt-8">
              <Link
                href="/about"
                className="
                  group
                  inline-flex
                  min-h-[48px]
                  items-center
                  justify-center
                  gap-2.5

                  rounded-full
                  bg-[#e63946]
                  px-6

                  text-[14px]
                  font-medium
                  text-white

                  shadow-[0_8px_20px_rgba(230,57,70,0.13)]

                  transition-all
                  duration-300

                  hover:-translate-y-0.5
                  hover:bg-[#d9313e]
                  hover:shadow-[0_12px_26px_rgba(230,57,70,0.18)]

                  sm:min-h-[50px]
                  sm:px-7
                  sm:text-[14.5px]
                "
              >
                Learn More About Us

                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={1.8}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}