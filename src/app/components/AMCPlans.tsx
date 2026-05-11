"use client";

import React from 'react';
import { Check, Zap } from 'lucide-react';

const plans = [
  {
    name: "Basic Care",
    price: "Standard",
    description: "Ideal for small offices needing reliable on-call support.",
    features: [
      "Preventive Maintenance",
      "Unlimited On-Site Repairs",
      "Labor Charges Included",
      "Next Business Day Response",
      "Software Support"
    ],
    highlight: false
  },
  {
    name: "Enterprise Pro",
    price: "Premium",
    description: "Our most popular plan for high-volume corporate environments.",
    features: [
      "Everything in Basic Care",
      "4-Hour Priority Response",
      "All Spare Parts Covered",
      "Temporary Backup Machine",
      "Quarterly Usage Reports"
    ],
    highlight: true
  },
  {
    name: "All-Inclusive",
    price: "Elite",
    description: "Total cost management with zero hidden expenses.",
    features: [
      "Everything in Enterprise",
      "Toner & Consumables Included",
      "2-Hour Emergency Response",
      "Dedicated Account Manager",
      "On-Site Resident Engineer*"
    ],
    highlight: false
  }
];

const AMCPlans = () => {
  return (
    <section className="py-24 bg-white" id="pricing">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter italic">
            Managed <span className="text-[#e63946]">AMC Plans</span>
          </h2>
          <div className="w-20 h-1.5 bg-[#e63946] mx-auto mt-4"></div>
          <p className="mt-6 text-slate-500 font-bold uppercase tracking-widest text-xs">
            Fixed Cost Maintenance for Zero Business Downtime
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-slate-200">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative flex flex-col p-10 border-r border-b border-slate-200 transition-all duration-500 ${
                plan.highlight ? "bg-slate-900 text-white md:-translate-y-4 shadow-2xl z-10" : "bg-white text-slate-900"
              }`}
            >
              {/* Highlight Ribbon */}
              {plan.highlight && (
                <div className="absolute top-0 left-0 bg-[#e63946] text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2">
                  Most Recommended
                </div>
              )}

              <div className="mb-8">
                <h3 className={`text-xl font-black uppercase tracking-tight mb-2 ${plan.highlight ? "text-[#e63946]" : "text-slate-900"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm font-medium ${plan.highlight ? "text-slate-400" : "text-slate-500"}`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <span className="text-4xl font-black tracking-tighter uppercase">{plan.price}</span>
                <span className={`text-xs font-bold uppercase ml-2 ${plan.highlight ? "text-slate-500" : "text-slate-400"}`}>/ Tier</span>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-12 flex-grow">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3">
                    <Check size={16} className={plan.highlight ? "text-[#e63946]" : "text-[#e63946]"} strokeWidth={3} />
                    <span className={`text-xs font-bold uppercase tracking-wide ${plan.highlight ? "text-slate-300" : "text-slate-600"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Action Button */}
              <button className={`w-full py-4 text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 ${
                plan.highlight 
                  ? "bg-[#e63946] text-white hover:bg-white hover:text-slate-900" 
                  : "bg-slate-900 text-white hover:bg-[#e63946]"
              }`}>
                Request Proposal
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AMCPlans;