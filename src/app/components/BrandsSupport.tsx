"use client";

import axios from "axios";
import React, {
  useEffect,
  useState,
} from "react";

import { motion } from "framer-motion";

export default function BrandGrid() {
  const [brands, setBrands] =
    useState<any[]>([]);

  const fetchBrands =
    async () => {
      try {
        const res =
          await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/api/v1/brands`
          );

        setBrands(
          res.data.data
        );
      } catch (error) {
        console.log(error);
      }
    };

  useEffect(() => {
    fetchBrands();
  }, []);

  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 text-center">
          <span className="mb-5 inline-block rounded-full bg-red-50 px-5 py-2 text-sm font-semibold text-[#e63946]">
            Trusted Printer Brands
          </span>

          <h2 className="mb-4 text-3xl font-black text-slate-900 md:text-4xl">
            Multi-Brand{" "}
            <span className="text-[#e63946]">
              Printer Solutions
            </span>
          </h2>

          <p className="mx-auto max-w-2xl leading-relaxed text-slate-500">
            We supply, repair and maintain
            leading printer brands across
            Abu Dhabi and UAE.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">

          {brands.map(
            (brand, index) => (
              <motion.div
                key={brand._id}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.4,
                  delay:
                    index * 0.05,
                }}
                viewport={{
                  once: true,
                }}
                whileHover={{
                  y: -6,
                }}
                className="group flex h-36 flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:border-[#e63946]/30 hover:shadow-xl"
              >
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="h-12 object-contain"
                />

                <h3 className="mt-4 text-center text-sm font-semibold text-slate-700 transition-colors group-hover:text-[#e63946]">
                  {brand.name}
                </h3>
              </motion.div>
            )
          )}

        </div>

      </div>
    </section>
  );
}