"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

interface Service {
  _id: string;
  name: string;
  slug: string;
  shortDescription: string;
  image: string;
}

export default function Services() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/services`
        );

        setServices(res.data?.data || []);
      } catch (error) {
        console.error("Failed to fetch services:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  /* ================= LOADING ================= */

  if (loading) {
    return (
      <section className="bg-[#fafafa] py-14 sm:py-16 md:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-7 md:px-10 lg:px-12 xl:px-16">
          <div className="mx-auto mb-10 h-8 w-[260px] animate-pulse rounded-lg bg-[#eeeeee]" />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-[20px] border border-[#eaecf0] bg-white"
              >
                <div className="aspect-[16/10] animate-pulse bg-[#eeeeee]" />

                <div className="p-6">
                  <div className="h-5 w-[55%] animate-pulse rounded bg-[#eeeeee]" />
                  <div className="mt-4 h-3 w-full animate-pulse rounded bg-[#f2f2f2]" />
                  <div className="mt-2 h-3 w-[80%] animate-pulse rounded bg-[#f2f2f2]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (!services.length) return null;

  return (
    <section className="relative overflow-hidden bg-[#fafafa] py-14 sm:py-16 md:py-20 lg:py-24 xl:py-28">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-32 h-[420px] w-[420px] rounded-full bg-[#e63946]/[0.025] blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-[1600px] px-5 sm:px-7 md:px-10 lg:px-12 xl:px-16 2xl:px-20">
        {/* ================= HEADER ================= */}

        <div className="mx-auto max-w-[760px] text-center">
          <div className="mb-4 flex items-center justify-center gap-2.5">
            <span className="h-[2px] w-7 rounded-full bg-[#e63946]" />

            <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-[#e63946] sm:text-[12px]">
              Our Services
            </span>

            <span className="h-[2px] w-7 rounded-full bg-[#e63946]" />
          </div>

          <h2 className="text-[29px] font-semibold leading-[1.18] tracking-[-0.025em] text-[#27303f] sm:text-[34px] md:text-[38px] lg:text-[clamp(36px,2.7vw,46px)] lg:leading-[1.14] xl:text-[48px]">
            Complete Printing Solutions
            <span className="text-[#e63946]"> for Your Business</span>
          </h2>

          <p className="mx-auto mt-4 max-w-[650px] text-[14.5px] font-normal leading-[1.75] text-[#667085] sm:mt-5 sm:text-[15.5px] lg:text-[16px]">
            Professional printer sales, rental, repair, maintenance,
            consumables and office equipment solutions for businesses across
            Abu Dhabi and the UAE.
          </p>
        </div>

        {/* ================= DYNAMIC SERVICES ================= */}

        <div className="mt-9 grid grid-cols-1 gap-5 sm:mt-10 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-6 xl:gap-7">
          {services.map((service) => (
            <Link
              key={service._id}
              href={`/services/${service.slug}`}
              className="
                group
                relative
                flex
                min-w-0
                flex-col
                overflow-hidden

                rounded-[20px]
                border
                border-[#eaecf0]
                bg-white

                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-[#e63946]/20
                hover:shadow-[0_18px_45px_rgba(16,24,40,0.07)]

                sm:rounded-[22px]
              "
            >
              {/* ================= IMAGE ================= */}

              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#f5f6f7]">
                {service.image ? (
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    sizes="
                      (max-width: 640px) 100vw,
                      (max-width: 1024px) 50vw,
                      33vw
                    "
                    className="
                      object-cover
                      transition-transform
                      duration-500
                      ease-out

                      group-hover:scale-[1.04]
                    "
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-[13px] text-[#98a2b3]">
                    No Image
                  </div>
                )}

                {/* Image fade */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/[0.10] via-transparent to-transparent" />

                {/* Hover red line */}
                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#e63946] transition-all duration-300 group-hover:w-full" />
              </div>

              {/* ================= CONTENT ================= */}

              <div className="flex flex-1 flex-col p-5 sm:p-6 lg:p-6 xl:p-7">
                {/* Dynamic Name */}
                <h3 className="text-[18px] font-semibold leading-[1.35] tracking-[-0.015em] text-[#27303f] sm:text-[19px] lg:text-[20px]">
                  {service.name}
                </h3>

                {/* Dynamic Description */}
                <p className="mt-2.5 line-clamp-3 text-[13.5px] font-normal leading-[1.7] text-[#667085] sm:text-[14px] lg:text-[14.5px]">
                  {service.shortDescription}
                </p>

                {/* Learn More */}
                <div className="mt-5 flex items-center gap-2 text-[13.5px] font-medium text-[#e63946] sm:text-[14px]">
                  Learn More

                  <ArrowUpRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={1.8}
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* ================= VIEW ALL ================= */}

        <div className="mt-9 flex justify-center sm:mt-10 lg:mt-12">
          <Link
            href="/services"
            className="
              group
              inline-flex
              min-h-[48px]
              items-center
              justify-center
              gap-2.5

              rounded-full
              border
              border-[#d9dde5]
              bg-white

              px-6

              text-[14px]
              font-medium
              text-[#374151]

              transition-all
              duration-300

              hover:border-[#e63946]
              hover:text-[#e63946]
              hover:shadow-[0_10px_25px_rgba(16,24,40,0.05)]

              sm:min-h-[50px]
              sm:px-7
              sm:text-[14.5px]
            "
          >
            View All Services

            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={1.8}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}