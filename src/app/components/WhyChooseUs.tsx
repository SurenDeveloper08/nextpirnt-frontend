"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Clock, Zap, Award, Headset, BadgeCheck } from "lucide-react";

const reasons = [
  {
    title: "4-Hour Response Guarantee",
    description: "Minimize downtime with the UAE's fastest technical support team. We reach your office within 4 hours of your service call.",
    icon: <Clock className="w-10 h-10" />,
  },
  {
    title: "Genuine OEM Consumables",
    description: "We exclusively provide original toners and spare parts for Canon, Ricoh, and HP, ensuring 100% print quality and machine life.",
    icon: <ShieldCheck className="w-10 h-10" />,
  },
  {
    title: "Zero Capital Investment",
    description: "Our flexible rental models allow you to upgrade your office technology without any upfront costs. Pay as you print.",
    icon: <Zap className="w-10 h-10" />,
  },
  {
    title: "Certified Brand Experts",
    description: "Our engineers are factory-trained for Konica Minolta, Kyocera, and Sharp, providing expert network integration and setup.",
    icon: <Award className="w-10 h-10" />,
  },
  {
    title: "24/7 Remote Monitoring",
    description: "Smart software alerts us when your toner is low or a part needs replacing before it breaks. Proactive maintenance at its best.",
    icon: <Headset className="w-10 h-10" />,
  },
  {
    title: "UAE Compliant & Licensed",
    description: "A fully registered LLC based in the UAE. We provide official VAT invoices and transparent service contracts.",
    icon: <BadgeCheck className="w-10 h-10" />,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white" aria-labelledby="nexprint-advantages">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Industrial Sharp Style */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="border-l-8 border-red-600 pl-6">
            <h2 id="nexprint-advantages" className="text-sm font-black tracking-[0.4em] text-red-600 uppercase mb-2">
              The Nexprint Advantage
            </h2>
            <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-slate-900">
              Why Business Leaders <br /> <span className="text-red-600">Trust Us</span>
            </h3>
          </div>
          <p className="max-w-md text-slate-500 font-medium leading-relaxed">
            We don't just supply equipment; we manage your entire document workflow so you can focus on growing your business in the UAE.
          </p>
        </div>

        {/* Reasons Grid - No Border Radius */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-slate-200">
          {reasons.map((reason, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 border-r border-b border-slate-200 hover:bg-slate-50 transition-all duration-300 group"
            >
              {/* Icon with Sharp Background Wrap */}
              <div className="inline-flex items-center justify-center mb-8 text-red-600 group-hover:scale-110 transition-transform duration-500">
                {reason.icon}
              </div>
              
              <h4 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tight">
                {reason.title}
              </h4>
              
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}