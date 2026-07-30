"use client";

import React from 'react';
import { Shield, Zap, CheckSquare, Clock } from 'lucide-react';

const AboutNexPrint = () => {
  const stats = [
    { icon: <Clock size={20} />, title: "FAST RESPONSE", detail: "On-site within hours" },
    { icon: <Shield size={20} />, title: "GENUINE PARTS", detail: "100% OEM Guaranteed" },
    { icon: <CheckSquare size={20} />, title: "EXPERT TEAM", detail: "Certified Technicians" },
    { icon: <Zap size={20} />, title: "MINIMAL DOWNTIME", detail: "Reliable AMC Support" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* SEO & USER FRIENDLY CONTENT */}
          <div className="space-y-6">
            <h2 className="text-slate-900 text-3xl md:text-4xl font-black uppercase tracking-tighter border-l-8 border-[#e63946] pl-5">
              NexPrint Office Equipment <br/> 
              <span className="text-[#e63946]">Abu Dhabi, UAE</span>
            </h2>
            
            <p className="text-lg font-bold text-slate-800 leading-snug">
              NexPrint Office Equipment LLC is a trusted printer solutions provider based in Abu Dhabi, specializing in comprehensive office support.
            </p>
            
            <p className="text-slate-600 leading-relaxed text-base">
              We provide professional **Printer Sales, Rental, AMC (Maintenance), Repair Services, and Consumables** across the UAE. Our team is dedicated to supporting businesses with cost-effective solutions for all major brands including **Canon, HP, Epson, and Kyocera.**
            </p>

            <div className="pt-4 flex gap-4">
               <a href="tel:+971 55 532 8978" className="bg-[#e63946] text-white px-6 py-3 font-bold text-sm uppercase tracking-widest hover:bg-black transition-all">
                 Contact Specialist
               </a>
               <a href="/services" className="border border-slate-200 text-slate-900 px-6 py-3 font-bold text-sm uppercase tracking-widest hover:bg-slate-50 transition-all">
                 View Services
               </a>
            </div>
          </div>

          {/* SQUARE TRUST TILES */}
          <div className="grid grid-cols-2 gap-px bg-slate-200 border border-slate-200">
            {stats.map((item, idx) => (
              <div key={idx} className="bg-slate-50 p-8 flex flex-col items-center text-center group hover:bg-white transition-colors">
                <div className="text-[#e63946] mb-4">{item.icon}</div>
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 font-bold uppercase">{item.detail}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutNexPrint;