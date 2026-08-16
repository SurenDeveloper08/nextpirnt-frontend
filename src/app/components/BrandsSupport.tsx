"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Brand {
  _id: string;
  name: string;
  image: string;
}

export default function BrandGrid() {
  const [brands, setBrands] = useState<Brand[]>([]);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/brands`
        );

        setBrands(res.data?.data || []);
      } catch (error) {
        console.error("Failed to fetch brands:", error);
      }
    };

    fetchBrands();
  }, []);

  if (!brands.length) return null;

  // Make sure the carousel is always filled.
  const minimumBrands = 12;

  const repeatCount = Math.max(
    2,
    Math.ceil(minimumBrands / brands.length)
  );

  const brandSet = Array.from(
    { length: repeatCount },
    () => brands
  ).flat();

  // Duplicate the complete set for seamless looping.
  const infiniteBrands = [...brandSet, ...brandSet];

  return (
    <section className="overflow-hidden border-y border-slate-100 bg-gradient-to-b from-white via-slate-50/70 to-white py-5 sm:py-6">
      {/* Heading */}
      <div className="mx-auto mb-4 px-6 text-center sm:mb-5">
       <span className="inline-block rounded-full bg-red-50 px-5 py-2 text-sm font-semibold text-[#e63946]">
            Trusted Printer Brands
          </span>
      </div>

      {/* Carousel */}
      <div className="relative w-full overflow-hidden">
        {/* Left fade */}
        <div
          className="
            pointer-events-none
            absolute inset-y-0 left-0 z-10
            w-12
            bg-gradient-to-r
            from-white
            to-transparent
            sm:w-20
            md:w-28
          "
        />

        {/* Right fade */}
        <div
          className="
            pointer-events-none
            absolute inset-y-0 right-0 z-10
            w-12
            bg-gradient-to-l
            from-white
            to-transparent
            sm:w-20
            md:w-28
          "
        />

        {/* Infinite carousel */}
        <motion.div
          className="flex w-max items-center"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {infiniteBrands.map((brand, index) => (
            <div
              key={`${brand._id}-${index}`}
              className="
                flex
                h-14
                w-[135px]
                shrink-0
                items-center
                justify-center
                px-4

                sm:h-16
                sm:w-[170px]
                sm:px-5

                md:w-[200px]

                lg:w-[220px]
              "
            >
              <img
                src={brand.image}
                alt={brand.name}
                loading="lazy"
                draggable={false}
                className="
                  h-10
                  max-w-[130px]
                  object-contain
                  opacity-80
                  transition-opacity
                  duration-300
                  hover:opacity-100

                  sm:h-10
                  sm:max-w-[145px]

                  md:h-11
                  md:max-w-[155px]
                "
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}