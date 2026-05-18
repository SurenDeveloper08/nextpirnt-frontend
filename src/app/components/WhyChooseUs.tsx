"use client";

import React from "react";
import { Clock3, ShieldCheck, Wrench } from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  {
    title: "Fast Response",
    icon: Clock3,
    description:
      "Quick onsite printer support and troubleshooting to reduce downtime.",
  },
  {
    title: "Genuine Parts",
    icon: ShieldCheck,
    description:
      "We use only original spare parts and accessories for reliable performance.",
  },
  {
    title: "Annual Maintenance",
    icon: Wrench,
    description:
      "Comprehensive AMC services to keep your printers running efficiently all year.",
  },
];

export default function WhyChooseMini() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-red-100 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-80"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center px-5 py-2 rounded-full bg-red-50 border border-red-100 text-[#e63946] text-sm font-semibold mb-5">
            Why Choose Us
          </span>

          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-5">
            Trusted Printing{" "}
            <span className="text-[#e63946]">Solutions</span>
          </h2>

          <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Reliable printer sales, rental, repair, and maintenance services
            for businesses across Abu Dhabi and UAE.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {reasons.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm hover:shadow-2xl hover:border-[#e63946]/20 transition-all duration-500"
              >
                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-slate-50 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                {/* Icon */}
                <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-2xl bg-red-50 border border-red-100 mb-6 group-hover:bg-[#e63946] transition-all duration-500">
                  <Icon
                    size={30}
                    className="text-[#e63946] group-hover:text-white transition duration-500"
                  />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed text-[15px]">
                    {item.description}
                  </p>
                </div>

                {/* Number */}
                <div className="absolute top-5 right-5 text-5xl font-black text-slate-100">
                  0{index + 1}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}