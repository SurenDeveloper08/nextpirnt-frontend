"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Printer Sales",
    image: "/images/services/printer-sale.png",
    description:
      "High-performance printers and multifunction devices from leading brands for offices and enterprise businesses.",
  },
  {
    title: "Printer Rental",
    image: "/images/services/printer-rental.png",
    description:
      "Flexible rental plans with zero maintenance stress and the latest digital printing technology.",
  },
  {
    title: "AMC Maintenance",
    image: "/images/services/amc.png",
    description:
      "Professional annual maintenance contracts to reduce downtime and ensure smooth operations.",
  },
  {
    title: "Repair & Service",
    image: "/images/services/service.png",
    description:
      "Fast troubleshooting and certified repair support with genuine spare parts.",
  },
  {
    title: "Consumables",
    image: "/images/services/consumables.png",
    description:
      "Original toners, cartridges, drums, and printing accessories for all major brands.",
  },
  {
    title: "Stationery",
    image: "/images/services/stationery.png",
    description:
      "Premium office stationery and corporate supplies tailored for modern workplaces.",
  },
];

const ServicesSection = () => {
  return (
    <section
      className="relative py-20 lg:py-28 bg-white overflow-hidden"
      id="services"
    >
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-red-50 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-80"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-5 py-2 rounded-full bg-red-50 text-[#e63946] text-sm font-semibold mb-5">
            Professional Business Services
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight mb-5">
            Reliable <span className="text-[#e63946]">Printing Solutions</span>
          </h2>

          <p className="text-slate-500 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Complete printer sales, rental, repair, maintenance, and office
            supply services designed for modern businesses across Abu Dhabi.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="group relative bg-white border border-slate-200 rounded-[28px] overflow-hidden hover:shadow-2xl transition-all duration-500"
            >
              
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                {/* Title */}
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-2xl font-bold text-white">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-7 flex flex-col">
                <p className="text-slate-600 leading-relaxed text-[15px] mb-7">
                  {service.description}
                </p>

                {/* Button */}
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-[#e63946] transition-colors"
                >
                  Learn More

                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />
                </a>
              </div>

              {/* Hover Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#e63946]/20 rounded-[28px] transition-all duration-500 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;