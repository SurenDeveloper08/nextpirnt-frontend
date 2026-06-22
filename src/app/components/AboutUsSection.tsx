"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface AboutProps {
  about: {
    title: string;
    description: string;
    image?: string;
  };
}

export default function AboutSection({ about }: AboutProps) {
  return (
    <section
      className="relative py-16 lg:py-24 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white"
      id="about"
    >
      {/* Background */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-red-100 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-slate-100 rounded-full blur-3xl opacity-70" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-red-50 border border-red-100 text-[#e63946] text-sm font-semibold mb-5">
              About Us
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight mb-6">
              {about.title}
            </h2>

            <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8">
              {about.description}
            </p>

            <Link
              href="/about"
              className="inline-flex items-center px-7 py-3 bg-[#e63946] text-white font-semibold rounded-full hover:bg-slate-900 transition-all duration-300"
            >
              Learn More
            </Link>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-[32px] shadow-xl">
              <img
                src={about.image || "/images/amc.png"}
                alt={about.title}
                className="w-full h-[320px] md:h-[450px] lg:h-[520px] object-cover hover:scale-105 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

            
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}