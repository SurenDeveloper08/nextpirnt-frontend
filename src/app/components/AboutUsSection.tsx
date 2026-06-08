"use client";

import React from "react";
import { motion } from "framer-motion";

const images = [
  "/images/printers.png",
  "/images/printerrepair.png",
  "/images/amc.png",
];

export default function AboutSection() {
  return (
    <section
      className="relative py-16 lg:py-20 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white"
      id="about"
    >
      {/* Background */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-red-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-slate-100 rounded-full blur-3xl opacity-70"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center min-h-[520px] lg:min-h-[600px]"
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-red-50 border border-red-100 text-[#e63946] text-sm font-semibold mb-4 w-fit">
              About Us
            </span>

            <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-4">
              Trusted Partner for{" "}
              <span className="text-[#e63946]">Printing Solutions</span>
            </h2>

            <p className="text-slate-500 text-sm md:text-base mb-3 leading-relaxed">
              We specialize in printer sales, rental, AMC maintenance, repair services, and consumables across UAE.
            </p>

            <p className="text-slate-500 text-sm md:text-base mb-4 leading-relaxed">
              With over 10+ years of experience, we deliver fast, reliable, and cost-effective printing solutions for businesses of all sizes.
            </p>

            {/* EXTRA CONTENT ADDED */}
            <p className="text-slate-500 text-sm md:text-base mb-6 leading-relaxed">
              Our mission is to reduce downtime and improve productivity by ensuring your printing systems run smoothly without interruption.
            </p>

            {/* FEATURES */}
            <div className="grid grid-cols-2 gap-3 mb-6 text-sm text-slate-600">
              <div>✔ Fast Support</div>
              <div>✔ Genuine Parts</div>
              <div>✔ Expert Technicians</div>
              <div>✔ AMC Service</div>
            </div>

            <button className="px-6 py-2 bg-[#e63946] text-white rounded-full font-semibold hover:bg-red-700 transition w-fit">
              See More
            </button>
          </motion.div>

          {/* RIGHT SIDE */}
          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="min-h-[520px] lg:min-h-[600px] flex items-center justify-center"
          >
            <div className="relative overflow-hidden rounded-3xl w-full max-w-md h-[500px] shadow-lg group">

              <img
                src="/images/amc.png"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                alt="Printer Services UAE"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

              {/* Optional label */}
              {/* <div className="absolute bottom-5 left-5 text-white">
                <p className="text-lg font-bold">Complete Printing Solutions</p>
                <p className="text-sm opacity-80">Sales • Repair • AMC</p>
              </div> */}

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}