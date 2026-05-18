"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  { name: "HP LaserJet Pro M404dn", price: "AED 850", image: "/images/printers.png", tag: "Best Seller" },
  { name: "Canon MF3010", price: "AED 620", image: "/images/printerrepair.png", tag: "Compact" },
  { name: "Epson EcoTank L3250", price: "AED 950", image: "/images/amc.png", tag: "Eco Tank" },
  { name: "Brother HL-L2350DW", price: "AED 780", image: "/images/printers.png", tag: "Wireless" },
  { name: "Samsung M2020", price: "AED 540", image: "/images/printerrepair.png", tag: "Budget" },
  { name: "Kyocera P2040", price: "AED 990", image: "/images/amc.png", tag: "Office Pro" },
  { name: "Ricoh SP 210", price: "AED 700", image: "/images/printers.png", tag: "Reliable" },
  { name: "Xerox 3020", price: "AED 680", image: "/images/printerrepair.png", tag: "Home Use" },
];

export default function FeaturedProducts() {
  const [index, setIndex] = useState(0);

  const itemsPerView = 4; // desktop default

  const next = () => {
    setIndex((prev) => (prev + 1) % products.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900">
            Featured <span className="text-[#e63946]">Printers</span>
          </h2>
          <p className="text-slate-500 mt-2">
            Best selling printer collection for business & office use
          </p>
        </div>

        {/* SLIDER WRAPPER */}
        <div className="relative">

          {/* LEFT BUTTON */}
          <button
            onClick={prev}
            className="absolute -left-3 md:-left-5 top-1/2 -translate-y-1/2 z-10 bg-white border shadow-md p-3 rounded-full hover:bg-slate-100 transition"
          >
            <ChevronLeft />
          </button>

          {/* CARDS VIEWPORT */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-4"
              animate={{ x: `-${index * 260}px` }}
              transition={{ type: "spring", stiffness: 80 }}
            >

              {products.map((item, i) => (
                <div
                  key={i}
                  className="min-w-[250px] sm:min-w-[260px] bg-white border rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden"
                >

                  {/* IMAGE */}
                  <div className="h-44 bg-slate-100 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover hover:scale-110 transition duration-500"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="p-4">

                    <span className="text-xs px-2 py-1 bg-[#e63946] text-white rounded-full">
                      {item.tag}
                    </span>

                    <h3 className="text-sm font-bold mt-2 text-slate-800">
                      {item.name}
                    </h3>

                    <p className="text-[#e63946] font-semibold mt-1">
                      {item.price}
                    </p>

                    <button className="mt-3 w-full py-2 text-sm bg-slate-900 text-white rounded-full hover:bg-[#e63946] transition">
                      View Details
                    </button>

                  </div>
                </div>
              ))}

            </motion.div>
          </div>

          {/* RIGHT BUTTON */}
          <button
            onClick={next}
            className="absolute -right-3 md:-right-5 top-1/2 -translate-y-1/2 z-10 bg-white border shadow-md p-3 rounded-full hover:bg-slate-100 transition"
          >
            <ChevronRight />
          </button>

        </div>
      </div>
    </section>
  );
}