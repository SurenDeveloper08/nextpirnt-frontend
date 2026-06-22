"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface HeroData {
  title: string;
  description: string;
  desktopImage: string;
  mobileImage: string;
  whatsappLink: string;
  phoneNumber: string;
  quoteButtonText: string;
  callButtonText: string;
}

export default function Hero() {
  const [hero, setHero] = useState<HeroData | null>(null);

  useEffect(() => {
    const fetchHero = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/hero`
        );

        setHero(data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchHero();
  }, []);

  if (!hero) return null;

  return (
    <section className="relative w-full min-h-[650px] sm:min-h-[700px] lg:h-[85vh] flex items-center overflow-hidden bg-slate-100">

      {/* BACKGROUND IMAGE - NO ANIMATION */}
      <div className="absolute inset-0 z-0">

        {/* MOBILE */}
        <div className="lg:hidden h-full w-full relative">
          <img
            src={hero.mobileImage}
            alt={hero.title}
            className="h-full w-full object-cover object-top"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent" />
        </div>

        {/* DESKTOP */}
        <div className="hidden lg:block h-full w-full relative">
          <img
            src={hero.desktopImage}
            alt={hero.title}
            className="h-full w-full object-cover object-right"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent" />
        </div>

      </div>

      {/* CONTENT */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-xl lg:max-w-2xl mt-[-120px] sm:mt-[-150px] lg:mt-0 text-center lg:text-left">

          {/* TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white lg:text-slate-900 leading-[1.15]"
          >
            {hero.title}
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
              duration: 0.8,
              ease: "easeOut",
            }}
            className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-gray-100 lg:text-slate-700 font-medium leading-relaxed max-w-lg mx-auto lg:mx-0"
          >
            {hero.description}
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.4,
              duration: 0.8,
              ease: "easeOut",
            }}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
          >
            <a
              href={hero.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-4 bg-[#e63946] text-white font-bold rounded-xl shadow-xl hover:bg-red-700 hover:-translate-y-1 transition-all duration-300"
            >
              {hero.quoteButtonText}
            </a>

            <a
              href={`tel:${hero.phoneNumber}`}
              className="px-7 py-4 bg-white text-slate-900 border-2 border-slate-200 font-bold rounded-xl shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {hero.callButtonText}
            </a>
          </motion.div>

        </div>
      </div>

      {/* DECORATION */}
      <div className="absolute top-20 right-10 hidden lg:block h-40 w-40 rounded-full bg-red-500/20 blur-3xl" />

    </section>
  );
}