"use client";

import React from 'react';
import { motion } from 'framer-motion';

const brands = [
  { name: "Canon", src: "/brands/canon.jpg" },
  { name: "Konica Minolta", src: "/brands/konica-monolta.jpg" },
  { name: "Kyocera", src: "/brands/kyocera.jpg" },
  { name: "Sharp", src: "/brands/sharpprinter.jpg" },
  { name: "Epson", src: "/brands/epson.jpg" },
];

export default function BrandSlider() {
  const duplicatedBrands = [...brands, ...brands, ...brands];

  return (
    <section className="bg-white py-16 overflow-hidden border-b border-slate-100" aria-label="Authorized Brand Partners">
      <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
        <h2 className="text-[11px] font-black uppercase tracking-[0.5em] text-slate-500">
          Authorized <span className="text-red-600">Service</span> Partners
        </h2>
        <div className="h-0.5 w-12 bg-red-600 mx-auto mt-2"></div>
      </div>

      <div className="relative flex items-center">
        {/* Infinite Auto-Slide with Framer Motion */}
        <motion.div 
          className="flex items-center gap-16 md:gap-28"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 25, // Lower for faster, higher for slower
            repeat: Infinity,
          }}
          whileHover={{ transition: { duration: 0.5 }, opacity: 0.8 }}
        >
          {duplicatedBrands.map((brand, index) => (
            <div 
              key={index} 
              className="relative shrink-0 flex items-center justify-center transition-transform duration-300 hover:scale-110"
              title={`Nexprint Support for ${brand.name}`}
            >
              {/* No Grayscale - Pure Original Colors */}
              <img
                src={brand.src}
                alt={`${brand.name} official printer logo`}
                className="h-10 md:h-14 w-auto object-contain pointer-events-none"
              />
            </div>
          ))}
        </motion.div>

        {/* Professional Edge Fades for Seamless Look */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white via-white/70 to-transparent z-10"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white via-white/70 to-transparent z-10"></div>
      </div>
    </section>
  );
}