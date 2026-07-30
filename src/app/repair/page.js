"use client";

import React from 'react';
import { 
  ShieldCheck, AlertTriangle, 
  PhoneCall, Zap, Wrench, 
  Settings, CheckCircle2, BarChart3,
  Clock, Tool
} from 'lucide-react';

const RepairPage = () => {
  const brands = [
    { name: "Canon", models: "imageRUNNER, i-SENSYS" },
    { name: "HP", models: "LaserJet, DesignJet, PageWide" },
    { name: "Kyocera", models: "TASKalfa, ECOSYS" },
    { name: "Konica Minolta", models: "bizhub Series" },
    { name: "Ricoh", max: "Aficio, MP Series" }
  ];

  const commonIssues = [
    { title: "Paper Jams", desc: "Frequent misfeeds or torn edges during printing." },
    { title: "Quality Issues", desc: "Lines, spots, or faded prints across the page." },
    { title: "Error Codes", desc: "System crashes or cryptic manufacturer error codes." },
    { title: "Connectivity", desc: "Network offline or driver configuration errors." }
  ];

  return (
    <div className="bg-white text-[#101828] font-sans selection:bg-[#e63946] selection:text-white">
      
      {/* --- 1. URGENCY HERO --- */}
      <section className="pt-32 pb-20 px-6 max-w-[1400px] mx-auto overflow-hidden">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#e63946]/5 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e63946] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e63946]"></span>
              </span>
              <span className="text-[10px] font-black uppercase tracking-widest text-[#e63946]">On-Site Repair Available Now</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-[950] tracking-tighter uppercase leading-[0.85]">
              Fix Your <br />
              <span className="text-[#e63946]">Printer</span> Fast.
            </h1>
            
            <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-xl">
              Professional diagnostics and repair for enterprise photocopiers and laser printers. Serving Dubai, Abu Dhabi & Sharjah.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="tel:+971 55 532 8978" className="bg-[#101828] text-white px-8 py-4 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-[#e63946] transition-all flex items-center gap-3">
                <PhoneCall size={18} /> Book Technician
              </a>
              <button className="border-2 border-gray-100 px-8 py-4 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-gray-50 transition-all">
                View Pricing
              </button>
            </div>
          </div>

          <div className="flex-1 relative w-full">
            <div className="relative z-10 aspect-[4/5] bg-gray-50 rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80&w=1000" 
                alt="Printer repair service technician at work"
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-8 rounded-3xl shadow-xl border border-gray-100 z-20 max-w-[240px]">
              <ShieldCheck className="text-[#e63946] mb-4" size={32} />
              <p className="text-sm font-black uppercase tracking-tighter">Certified OEM Parts Only</p>
              <p className="text-[10px] text-gray-400 mt-1 font-bold">Authorized Service Standards</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 2. COMMON ISSUES --- */}
      <section className="py-24 bg-gray-50/50 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-[950] tracking-tighter uppercase mb-4">Trouble Printing?</h2>
            <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px]">Identify your issue for a faster quote</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {commonIssues.map((issue, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[2rem] border border-gray-100 hover:border-[#e63946]/30 transition-all group">
                <AlertTriangle className="text-[#e63946] mb-6 group-hover:scale-110 transition-transform" size={24} />
                <h3 className="text-lg font-black uppercase tracking-tight mb-2">{issue.title}</h3>
                <p className="text-sm text-gray-500 font-medium leading-relaxed">{issue.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 3. REPAIR PROCESS --- */}
      <section className="py-24 px-6 max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3">
            <h2 className="text-4xl font-[950] tracking-tighter uppercase lg:sticky lg:top-32">
              Our Service <br /><span className="text-[#e63946]">Protocol.</span>
            </h2>
          </div>
          <div className="lg:w-2/3 space-y-12">
            {[
              { step: "01", title: "Diagnostic Call", text: "We analyze the error code or mechanical symptoms over the phone to prepare the correct spare parts." },
              { step: "02", title: "On-Site Visit", text: "A certified engineer arrives within 4 hours to perform a deep-system inspection of your hardware." },
              { step: "03", title: "OEM Replacement", text: "Worn components are replaced with genuine manufacturer parts to ensure long-term reliability." },
              { step: "04", title: "Calibration & Test", text: "Full print-quality test and internal cleaning to prevent future breakdowns." }
            ].map((item, i) => (
              <div key={i} className="flex gap-8 group">
                <span className="text-4xl font-[950] text-gray-100 group-hover:text-[#e63946]/20 transition-colors">{item.step}</span>
                <div>
                  <h4 className="text-xl font-black uppercase tracking-tighter mb-2">{item.title}</h4>
                  <p className="text-gray-500 font-medium max-w-xl">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. BRAND EXPERTISE --- */}
      <section className="py-24 bg-[#101828] text-white px-6">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-3xl font-[950] tracking-tighter uppercase mb-12 text-center">Supported Manufacturers</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {brands.map((brand) => (
              <div key={brand.name} className="p-8 border border-white/10 rounded-3xl hover:bg-white/5 transition-all text-center">
                <p className="text-[#e63946] text-lg font-black uppercase tracking-tighter mb-1">{brand.name}</p>
                <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">{brand.models || brand.max}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 5. CALL TO ACTION --- */}
      <section className="py-32 px-6 text-center bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 bg-[#e63946]/5 blur-[120px] rounded-full -z-10" />
        <h2 className="text-4xl md:text-7xl font-[950] tracking-tighter uppercase mb-6">
          Still Seeing <span className="text-[#e63946]">Error</span> Codes?
        </h2>
        <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-10">Don't risk your hardware with uncertified repairs.</p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-[#e63946] text-white px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-widest shadow-xl shadow-[#e63946]/20 hover:scale-105 transition-all">
            Instant Repair Quote
          </button>
          <button className="bg-[#101828] text-white px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-widest hover:scale-105 transition-all">
            Open Support Ticket
          </button>
        </div>
      </section>
    </div>
  );
};

export default RepairPage;