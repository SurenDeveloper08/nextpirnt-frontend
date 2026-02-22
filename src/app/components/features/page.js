"use client";

import React from 'react';
import { ShieldCheck, Clock, Settings, Zap, ArrowRight, Star } from 'lucide-react';

const WhyChooseUs = () => {
  const featureData = [
    {
      title: "Genuine Consumables",
      desc: "Premium toners and original parts for all major brands.",
      icon: <ShieldCheck size={28} />,
    },
    {
      title: "24/7 AMC Support",
      desc: "Round-the-clock maintenance for zero downtime.",
      icon: <Clock size={28} />,
    },
    {
      title: "Expert Repairing",
      desc: "On-site diagnostics and certified hardware servicing.",
      icon: <Settings size={28} />,
    },
    {
      title: "Flexible Rentals",
      desc: "Scalable printer rental plans for growing businesses.",
      icon: <Zap size={28} />,
    }
  ];

  return (
    <section className="w-full py-24 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        
        {/* --- Header Section --- */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-[#e63946] font-black text-xs uppercase tracking-[0.4em] flex items-center gap-3">
              <span className="w-10 h-[2px] bg-[#e63946]"></span>
              Why Choose Nex Print
            </h2>
          </div>
        </div>

        {/* --- Feature Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featureData.map((feature, index) => (
            <div 
              key={index} 
              className="group relative p-10 bg-[#f8f9fa] rounded-[2.5rem] border border-transparent 
                         hover:bg-white hover:border-red-50 hover:shadow-[0_40px_80px_-20px_rgba(230,57,70,0.15)] 
                         transition-all duration-500 transform hover:-translate-y-4 cursor-pointer"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm 
                              group-hover:bg-[#e63946] group-hover:text-white transition-all duration-500 
                              group-hover:shadow-[0_15px_30px_rgba(230,57,70,0.3)] group-hover:scale-110">
                <div className="text-[#e63946] group-hover:text-white transition-colors duration-500">
                  {feature.icon}
                </div>
              </div>

              {/* Text Content */}
              <div className="mt-10 space-y-3">
                <h4 className="text-xl font-[900] text-gray-900 tracking-tight group-hover:text-[#e63946] transition-colors duration-500">
                  {feature.title}
                </h4>
                <p className="text-gray-500 text-sm font-medium leading-relaxed">
                  {feature.desc}
                </p>
              </div>
              {/* Decorative Corner Pulse */}
              <div className="absolute top-6 right-6 w-2 h-2 rounded-full bg-[#e63946] opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;