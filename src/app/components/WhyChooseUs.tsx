// components/WhyChooseUs.tsx

import {
  BadgeCheck,
  Headphones,
  Wrench,
  RefreshCcw,
} from "lucide-react";

const features = [
  {
    icon: BadgeCheck,
    title: "Trusted Quality",
    description: "Reliable printers, equipment and genuine consumables.",
  },
  {
    icon: Wrench,
    title: "Expert Support",
    description: "Professional repair and maintenance by experienced technicians.",
  },
  {
    icon: RefreshCcw,
    title: "Flexible Solutions",
    description: "Sales, rental and AMC options tailored to your business.",
  },
  {
    icon: Headphones,
    title: "Responsive Service",
    description: "Dependable support for businesses across Abu Dhabi and the UAE.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-[#fafafa] py-14 sm:py-16 md:py-20 lg:py-24">
      {/* Background accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-[#e63946]/[0.025] blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-[1600px] px-5 sm:px-7 md:px-10 lg:px-12 xl:px-16 2xl:px-20">
        {/* Heading */}
        <div className="mx-auto max-w-[700px] text-center">
          <div className="mb-3 flex items-center justify-center gap-2.5">
            <span className="h-[2px] w-7 rounded-full bg-[#e63946]" />

            <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-[#e63946] sm:text-[12px]">
              Why Choose Us
            </span>

            <span className="h-[2px] w-7 rounded-full bg-[#e63946]" />
          </div>

          <h2 className="text-[29px] font-semibold leading-[1.18] tracking-[-0.025em] text-[#27303f] sm:text-[34px] md:text-[38px] lg:text-[44px]">
            A Reliable Partner for Your
            <span className="text-[#e63946]"> Printing Needs</span>
          </h2>
        </div>

        {/* Features */}
        <div className="mt-9 grid grid-cols-1 overflow-hidden rounded-[22px] border border-[#eaecf0] bg-white sm:mt-10 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className={`
                  group relative
                  flex flex-col items-center
                  px-6 py-7 text-center
                  transition-colors duration-300
                  hover:bg-[#fffafa]
                  sm:px-7 sm:py-8
                  lg:items-start lg:px-8 lg:py-9 lg:text-left

                  ${index !== 0 ? "border-t border-[#eaecf0] sm:border-t-0" : ""}
                  ${index === 1 ? "sm:border-l" : ""}
                  ${index === 2 ? "sm:border-t lg:border-l lg:border-t-0" : ""}
                  ${index === 3 ? "sm:border-l sm:border-t lg:border-t-0" : ""}
                `}
              >
                {/* Icon */}
                <div className="flex h-11 w-11 items-center justify-center rounded-[12px] bg-[#e63946]/[0.08] text-[#e63946] transition-all duration-300 group-hover:bg-[#e63946] group-hover:text-white">
                  <Icon className="h-5 w-5" strokeWidth={1.7} />
                </div>

                {/* Title */}
                <h3 className="mt-5 text-[16px] font-semibold leading-[1.35] text-[#27303f] sm:text-[17px]">
                  {feature.title}
                </h3>

                {/* Short text only */}
                <p className="mt-2 max-w-[260px] text-[13.5px] font-normal leading-[1.65] text-[#667085] sm:text-[14px]">
                  {feature.description}
                </p>

                {/* Hover line */}
                <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-[#e63946] transition-all duration-300 group-hover:w-[45%]" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}