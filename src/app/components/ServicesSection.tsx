"use client";

import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

const services = [
  {
    title: "Printer Sales",
    image: "/images/services/printer-sale.png",
    points: ["Enterprise MFP Solutions", "Multi-brand Inventory", "Full Warranty Support"]
  },
  {
    title: "Printer Rental",
    image: "/images/services/printer-rental.png",
    points: ["Short & Long-term Leasing", "Zero Maintenance Cost", "Latest Digital Models"]
  },
  {
    title: "AMC (Maintenance)",
    image: "/images/services/amc.png",
    points: ["Priority Response Times", "Preventive Care Plans", "Fixed Cost Management"]
  },
  {
    title: "Repair & Service",
    image: "/images/services/service.png",
    points: ["On-site Troubleshooting", "Certified Engineers", "Genuine Spare Parts"]
  },
  {
    title: "Consumables",
    image: "/images/services/consumables.png",
    points: ["Original OEM Toners", "High-yield Cartridges", "Bulk Supply Delivery"]
  },
  {
    title: "Stationery",
    image: "/images/services/service.png",
    points: ["Premium Office Paper", "General Office Supplies", "Corporate Bundles"]
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header - Focused on the Customer */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Reliable <span className="text-[#e63946]">Printing Solutions</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-base">
            We provide high-quality equipment and dedicated support to keep your office running efficiently.
          </p>
        </div>

        {/* Grid View - Clean, Flat, Professional */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col group"
            >
              {/* Image - No Rounding, Clean Sharp Edges */}
              <div className="relative w-full h-60 overflow-hidden bg-slate-100 mb-6">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute bottom-0 left-0 w-full h-1 bg-slate-200 group-hover:bg-[#e63946] transition-colors"></div>
              </div>

              {/* Content Section */}
              <div className="flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-[#e63946] transition-colors">
                  {service.title}
                </h3>

                <ul className="space-y-3 mb-8">
                  {service.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-center gap-3 text-sm text-slate-600">
                      <Check size={14} className="text-[#e63946]" strokeWidth={3} />
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Clear, simple text link */}
                <a 
                  href="#" 
                  className="mt-auto flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-[#e63946] transition-colors"
                >
                  LEARN MORE <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;