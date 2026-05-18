"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, ArrowRight, CheckCircle2 } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[650px] sm:min-h-[700px] lg:h-[85vh] flex items-center overflow-hidden bg-slate-100">
      
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        
        {/* Mobile */}
        <div className="lg:hidden w-full h-full relative">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            src="/images/hero-mobile.png"
            alt="Printer Rental Abu Dhabi"
            className="w-full h-full object-cover object-top"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent"></div>
        </div>

        {/* Desktop */}
        <div className="hidden lg:block w-full h-full relative">
          <motion.img
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            src="/images/hero-desktop.png"
            alt="Printer Rental Desktop"
            className="w-full h-full object-cover object-right"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent"></div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-xl lg:max-w-2xl mt-[-120px] sm:mt-[-150px] lg:mt-0 text-center lg:text-left">
          
          {/* Small Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white lg:text-slate-700 text-sm font-semibold mb-5"
          >
            Trusted Printer Experts in UAE
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white lg:text-slate-900 leading-[1.15] lg:leading-[1.1]"
          >
            One-Stop{" "}
            <span className="text-[#e63946]">Printer Solutions</span>
            <br className="hidden sm:block lg:hidden" /> in Abu Dhabi
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-gray-100 lg:text-slate-700 font-medium leading-relaxed max-w-lg mx-auto lg:mx-0"
          >
            Sales • Rental • AMC • Repair • Consumables • Stationery —
            Reliable, affordable, and fast service across Abu Dhabi, UAE.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="w-full sm:w-auto px-7 py-4 bg-[#e63946] text-white font-bold rounded-xl shadow-2xl hover:bg-red-700 transition-all flex items-center justify-center gap-2 group"
            >
              Get Quote

              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href="tel:+971XXXXXXXXX"
              className="w-full sm:w-auto px-7 py-4 bg-white text-slate-900 border-2 border-slate-200 font-bold rounded-xl hover:bg-slate-50 transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <Phone size={18} className="text-[#e63946]" />
              Call Now
            </motion.a>
          </motion.div>

          {/* Trust Points */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="mt-8 flex flex-wrap justify-center lg:justify-start items-center gap-4 lg:gap-8 text-white lg:text-slate-600 font-bold text-xs sm:text-sm"
          >
            <motion.span
              whileHover={{ y: -2 }}
              className="flex items-center gap-1.5"
            >
              <CheckCircle2
                size={16}
                className="text-green-400 lg:text-green-500"
              />
              4hr Response
            </motion.span>

            <motion.span
              whileHover={{ y: -2 }}
              className="flex items-center gap-1.5"
            >
              <CheckCircle2
                size={16}
                className="text-green-400 lg:text-green-500"
              />
              Original Ink
            </motion.span>

            <motion.span
              whileHover={{ y: -2 }}
              className="flex items-center gap-1.5"
            >
              <CheckCircle2
                size={16}
                className="text-green-400 lg:text-green-500"
              />
              Same Day Support
            </motion.span>
          </motion.div>
        </div>
      </div>

      {/* Floating Blur Effect */}
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 right-10 w-40 h-40 bg-red-500/20 blur-3xl rounded-full hidden lg:block"
      ></motion.div>
    </section>
  );
};

export default Hero;