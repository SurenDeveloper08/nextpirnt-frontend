"use client";

import React from "react";
import { motion } from "framer-motion";

const brands = [
  { name: "Canon", src: "/brands/canon.jpg" },
  { name: "Konica Minolta", src: "/brands/konica-monolta.jpg" },
  { name: "Kyocera", src: "/brands/kyocera.jpg" },
  { name: "Sharp", src: "/brands/sharpprinter.jpg" },
  { name: "Epson", src: "/brands/epson.jpg" },
];

export default function BrandSlider() {
  const duplicatedBrands = [...brands, ...brands];

  return (
    <section className="bg-white py-5 overflow-hidden">
      <div className="relative max-w-6xl mx-auto overflow-hidden">
        
        <motion.div
          className="flex items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 15, // ✅ Optimized speed (mobile-friendly)
            repeat: Infinity,
          }}
          whileHover={{ animationPlayState: "paused" }} // ✅ pause on touch/hover
        >
          {duplicatedBrands.map((brand, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 flex justify-center items-center"
            >
              <img
                src={brand.src}
                alt={`${brand.name} printer Abu Dhabi UAE`}
                className="h-10 sm:h-9 md:h-10 object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}