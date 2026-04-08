"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, HardDriveDownload, ShieldCheck, ArrowRight } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Consult",
    description: "Our engineers assess your office volume and workflow to recommend the exact MFP for your budget.",
    icon: <MessageSquare className="w-6 h-6" style={{ color: '#e63946' }} />,
  },
  {
    id: "02",
    title: "Install",
    description: "We handle the heavy lifting. Delivery, network configuration, and staff training are completed in 24 hours.",
    icon: <HardDriveDownload className="w-6 h-6" style={{ color: '#e63946' }} />,
  },
  {
    id: "03",
    title: "Support",
    description: "Automated toner alerts and proactive maintenance under our AMC ensure zero downtime for your team.",
    icon: <ShieldCheck className="w-6 h-6" style={{ color: '#e63946' }} />,
  }
];

export default function ProcessSection() {
  return (
    <section className="py-20 md:py-24 bg-white" aria-labelledby="process-title">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header - Left Aligned with Brand Accent */}
        <header className="mb-16 md:mb-20 border-l-4 pl-6" style={{ borderColor: '#e63946' }}>
          <h2 className="text-[11px] font-black tracking-[0.3em] uppercase mb-2" style={{ color: '#e63946' }}>
            The Nexprint Blueprint
          </h2>
          <h3 id="process-title" className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none text-slate-900">
            How We <span style={{ color: '#e63946' }}>Work</span>
          </h3>
        </header>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative flex flex-col group"
            >
              {/* Step Number Overlay - Subtle Slate instead of Black */}
              <span className="text-[70px] md:text-[90px] font-black text-slate-100 absolute -top-12 -left-2 select-none z-0">
                {step.id}
              </span>

              {/* Icon Container */}
              <div className="mb-8 z-10 flex items-center justify-between">
                <div className="p-5 bg-white border border-slate-200 shadow-sm group-hover:border-[#e63946] transition-all duration-300 rounded-none">
                  {step.icon}
                </div>
                
                {/* Connector Arrow for Desktop */}
                {index !== 2 && (
                  <div className="hidden md:block">
                    <ArrowRight className="w-6 h-6 text-slate-200 group-hover:text-[#e63946] transform group-hover:translate-x-2 transition-all" />
                  </div>
                )}
              </div>

              {/* Text Content - Left Aligned */}
              <div className="z-10">
                <h4 className="text-xl font-black uppercase tracking-tight mb-4 text-slate-900">
                  {step.title}
                </h4>
                <div className="w-12 h-[2px] mb-4 transition-all duration-300 group-hover:w-20" style={{ backgroundColor: '#e63946' }}></div>
                <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium max-w-sm">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}