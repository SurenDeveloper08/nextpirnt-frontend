"use client";

import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Brand {
  _id: string;
  name: string;
  image: string;
}

export default function BrandsSupport() {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/brands`
        );

        setBrands(res.data?.data || []);
      } catch (error) {
        console.error("Failed to fetch brands:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBrands();
  }, []);

  if (loading) {
    return (
      <section className="border-y border-[#f2f4f7] bg-white py-7">
        <div className="mx-auto max-w-[1680px] px-5 sm:px-8 lg:px-10 xl:px-14">
          <div className="flex items-center justify-center gap-8 overflow-hidden">
            {Array.from({ length: 7 }).map((_, index) => (
              <div
                key={index}
                className="
                  h-[46px] w-[130px] shrink-0
                  animate-pulse rounded-lg bg-[#f5f6f7]
                "
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (!brands.length) return null;

  return (
    <section
      className="
        relative
        overflow-hidden
        border-y
        border-[#f2f4f7]
        bg-white
        py-7

        sm:py-8
        lg:py-9
      "
    >
      {/* Heading */}
      <div className="mx-auto mb-5 max-w-[1680px] px-5 text-center sm:px-8">
        <p
          className="
            text-[11px]
            font-medium
            uppercase
            tracking-[0.16em]
            text-[#98a2b3]

            sm:text-[12px]
          "
        >
          Trusted Brands We Supply
        </p>
      </div>

      {/* Marquee */}
      <div className="relative w-full overflow-hidden">
        {/* Left fade */}
        <div
          className="
            pointer-events-none
            absolute
            inset-y-0
            left-0
            z-20
            w-[60px]
            bg-gradient-to-r
            from-white
            via-white/90
            to-transparent

            sm:w-[100px]
            lg:w-[150px]
          "
        />

        {/* Right fade */}
        <div
          className="
            pointer-events-none
            absolute
            inset-y-0
            right-0
            z-20
            w-[60px]
            bg-gradient-to-l
            from-white
            via-white/90
            to-transparent

            sm:w-[100px]
            lg:w-[150px]
          "
        />

        <motion.div
          className="flex w-max items-center"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {/* Duplicate brands for seamless infinite loop */}
          {[...brands, ...brands].map((brand, index) => (
            <div
              key={`${brand._id}-${index}`}
              className="
                group
                mx-5
                flex
                h-[58px]
                w-[120px]
                shrink-0
                items-center
                justify-center

                sm:mx-7
                sm:h-[64px]
                sm:w-[145px]

                md:mx-8
                md:w-[155px]

                lg:mx-10
                lg:h-[70px]
                lg:w-[170px]
              "
            >
              <Image
                src={brand.image}
                alt={brand.name}
                width={180}
                height={80}
                className="
                  h-auto
                  max-h-[36px]
                  w-auto
                  max-w-[110px]
                  object-contain

                  opacity-60
                  grayscale

                  transition-all
                  duration-300

                  group-hover:scale-105
                  group-hover:opacity-100
                  group-hover:grayscale-0

                  sm:max-h-[40px]
                  sm:max-w-[130px]

                  lg:max-h-[44px]
                  lg:max-w-[150px]
                "
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}