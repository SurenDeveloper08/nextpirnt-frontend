"use client";

import React from "react";
import { motion } from "framer-motion";



const brands = [
  { name: "HP LaserJet", src: "/brands/hp.png" },
  { name: "Canon Pixma", src: "/brands/canon.jpg" },
  { name: "Epson EcoTank", src: "/brands/epson.jpg" },
  { name: "Brother MFC", src: "/brands/brother.png" },
  { name: "Samsung", src: "/brands/samsung.png" },

  { name: "Kyocera Ecosys", src: "/brands/kyocera.jpg" },
  { name: "Lexmark MS", src: "/brands/lexmark.png" },
  { name: "Ricoh Aficio", src: "/brands/ricoh.png" },
  { name: "Xerox Versa", src: "/brands/xerox.png" },
  { name: "Zebra Label", src: "/brands/zebra.png" },

  { name: "Sharp MX", src: "/brands/sharpprinter.jpg" },
  { name: "Toshiba Studio", src: "/brands/toshiba.png" },
  { name: "OKI Printers", src: "/brands/oki.png" },
  { name: "Panasonic", src: "/brands/panasonic.svg" },
  { name: "Dell Series", src: "/brands/dell.png" },

  { name: "Konica Minolta", src: "/brands/konica-monolta.jpg" },
];

export default function BrandGrid() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-5 py-2 rounded-full bg-red-50 text-[#e63946] text-sm font-semibold mb-5">
            Trusted Printer Brands
          </span>

          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            Multi-Brand <span className="text-[#e63946]">Printer Solutions</span>
          </h2>

          <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
            We supply, repair, and maintain leading printer brands for offices,
            enterprises, and businesses across Abu Dhabi and UAE.
          </p>
        </div>

        {/* Brand Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group bg-white border border-slate-200 rounded-2xl h-36 flex flex-col items-center justify-center p-5 hover:border-[#e63946]/30 hover:shadow-xl transition-all duration-300"
            >
              {/* Logo */}
              <img
                src={brand.src}
                alt={brand.name}
                className="h-12 object-contain group-hover:grayscale-0 transition duration-300"
                loading="lazy"
              />

              {/* Name */}
              <h3 className="mt-4 text-sm font-semibold text-slate-700 text-center group-hover:text-[#e63946] transition-colors">
                {brand.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}