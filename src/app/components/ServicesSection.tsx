"use client";

import React, {
  useEffect,
  useState,
} from "react";

import Link from "next/link";
import axios from "axios";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface Service {
  _id: string;
  name: string;
  slug: string;
  shortDescription: string;
  image: string;
}

export default function ServicesSection() {

  const [services, setServices] =
    useState<Service[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    const fetchServices =
      async () => {

        try {

          const res =
            await axios.get(
              `${process.env.NEXT_PUBLIC_API_URL}/api/v1/services`
            );

          setServices(
            res.data.data || []
          );

        } catch (error) {

          console.log(error);

        } finally {

          setLoading(false);

        }

      };

    fetchServices();

  }, []);

  if (loading) {
    return null;
  }

  return (

    <section
      className="relative overflow-hidden bg-white py-20 lg:py-28"
      id="services"
    >

      {/* BG */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-red-50 blur-3xl opacity-60"></div>

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-slate-100 blur-3xl opacity-80"></div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* HEADER */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="mb-16 text-center"
        >


          <h2 className="mb-5 text-3xl font-black text-slate-900 md:text-4xl lg:text-5xl">
            Reliable{" "}
            <span className="text-[#e63946]">
              Printing Solutions
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-500 md:text-lg">
            Complete printer sales,
            rental, repair,
            maintenance and office
            supply services across UAE.
          </p>

        </motion.div>

        {/* SERVICES GRID */}

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map(
            (
              service,
              index
            ) => (

              <motion.div
                key={service._id}
                initial={{
                  opacity: 0,
                  y: 60,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay:
                    index * 0.1,
                }}
                viewport={{
                  once: true,
                }}
                className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white transition-all duration-500 hover:shadow-2xl"
              >

                {/* IMAGE */}

                <div className="relative h-64 overflow-hidden">

                  <img
                    src={service.image}
                    alt={
                      service.name
                    }
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  <div className="absolute bottom-6 left-6">

                    <h3 className="text-2xl font-bold text-white">
                      {
                        service.name
                      }
                    </h3>

                  </div>

                </div>

                {/* CONTENT */}

                <div className="flex flex-col p-7">

                  <p className="mb-7 line-clamp-3 text-[15px] leading-relaxed text-slate-600">

                    {
                      service.shortDescription
                    }

                  </p>

                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 transition-colors hover:text-[#e63946]"
                  >

                    Learn More

                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />

                  </Link>

                </div>

                <div className="pointer-events-none absolute inset-0 rounded-[28px] border-2 border-transparent transition-all duration-500 group-hover:border-[#e63946]/20"></div>

              </motion.div>

            )
          )}

        </div>

      </div>

    </section>

  );

}