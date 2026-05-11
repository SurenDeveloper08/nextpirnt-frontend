"use client";

import React from 'react';
import { Clock, ShieldCheck, UserCheck, Zap } from 'lucide-react';

const reasons = [
  {
    title: "FAST RESPONSE",
    description: "On-site support within hours to ensure your office never stops.",
    icon: <Clock className="w-10 h-10 text-[#e63946] stroke-[1.5]" />,
  },
  {
    title: "GENUINE PARTS",
    description: "100% OEM Guaranteed. We only use original high-quality components.",
    icon: <ShieldCheck className="w-10 h-10 text-white stroke-[1.5]" />,
  },
  {
    title: "EXPERT TEAM",
    description: "Certified technicians with years of experience in all major brands.",
    icon: <UserCheck className="w-10 h-10 text-[#e63946] stroke-[1.5]" />,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-[#f8f9fa] relative overflow-hidden">

      {/* --- MOBILE FRIENDLY DASHED CURVE --- */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 400 800" /* Vertical viewbox for mobile */
          preserveAspectRatio="xMidYMid slice"
          className="md:hidden" /* Only shows on mobile */
        >
          <path
            d="M200 0C200 200 50 300 50 400C50 500 350 600 350 800"
            stroke="#e63946"
            strokeWidth="4"
            strokeDasharray="10 10"
            fill="none"
          />
        </svg>

        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 600"
          className="hidden md:block" /* Only shows on desktop */
        >
          <path
            d="M-100 250C150 100 450 450 720 300C990 150 1250 450 1550 250"
            stroke="#e63946"
            strokeWidth="2"
            strokeDasharray="12 12"
            fill="none"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter">
            Why choose <span className="text-[#e63946]">us?</span>
          </h2>
          <div className="w-16 h-1 bg-[#e63946] mx-auto mt-4"></div>
        </div>

        {/* Cards Container - Square & Simple */}
        <div className="flex flex-col md:flex-row items-stretch justify-center gap-8 lg:gap-12">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`
                relative flex flex-col p-8 md:p-10 w-full md:w-[380px] min-h-[280px] transition-all duration-300
                ${index === 1
                  ? "bg-[#e63946] text-white shadow-xl md:-translate-y-6 z-20"
                  : "bg-white text-slate-900 border border-slate-200 z-10"
                }
              `}
            >
              {/* Icon Container */}
              <div className="mb-6">
                {reason.icon}
              </div>

              {/* Content */}
              <div className="mt-auto">
                <h3 className={`text-lg font-black tracking-tight uppercase mb-3 ${index === 1 ? "text-white" : "text-slate-900"}`}>
                  {reason.title}
                </h3>
                <p className={`text-sm leading-relaxed font-bold uppercase tracking-wider ${index === 1 ? "text-white/90" : "text-slate-500"}`}>
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;