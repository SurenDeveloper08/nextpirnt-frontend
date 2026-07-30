"use client";

import React from 'react';
import {
  Wrench, ShieldCheck, CheckCircle,
  ArrowRight, PhoneCall, Zap,
  Settings2, Activity, Cpu, Award
} from 'lucide-react';

const HPRepairPage = () => {
  const hpSeries = [
    { title: "LaserJet Managed", series: "E-Series / M-Series", focus: "Enterprise Fleet Support" },
    { title: "DesignJet Plotters", series: "T-Series / Z-Series", focus: "Large Format Specialists" },
    { title: "PageWide Technology", series: "Pro / Enterprise", focus: "High-Speed Color Repair" },
    { title: "OfficeJet Enterprise", series: "X-Series", focus: "Desktop MFP Maintenance" }
  ];

  const hpExpertise = [
    {
      title: "Genuine HP Parts",
      desc: "We exclusively use HP Original fusers, rollers, and transfer belts to ensure JetIntelligence standards.",
      icon: <Award className="text-[#0096D6]" size={24} />
    },
    {
      title: "Firmware Security",
      desc: "Updating HP Wolf Security protocols and clearing 'Supply Memory' or '59.F0' error codes.",
      icon: <Cpu className="text-[#0096D6]" size={24} />
    },
    {
      title: "Color Calibration",
      desc: "Expert Pantone matching for HP DesignJet units used in architecture and marketing firms.",
      icon: <Activity className="text-[#0096D6]" size={24} />
    }
  ];

  return (
    <div className="bg-white text-[#101828] font-sans selection:bg-[#0096D6] selection:text-white">

      {/* --- 1. HP THEMED HERO --- */}
      <section className="pt-32 pb-20 px-6 max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-50 rounded-full">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#0096D6]">Authorized HP Service Standards</span>
            </div>

            <h1 className="text-5xl md:text-8xl font-[950] tracking-tighter uppercase leading-[0.85]">
              HP <span className="text-[#0096D6]">Repair</span> <br />
              Experts.
            </h1>

            <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
              Specialized maintenance for HP LaserJet, DesignJet, and PageWide systems. We fix the complex issues that others can't.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a href="tel:+971 55 532 8978" className="bg-[#101828] text-white px-8 py-4 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-[#0096D6] transition-all flex items-center gap-3">
                <PhoneCall size={18} /> Call HP Specialist
              </a>
              <button className="border-2 border-gray-100 px-8 py-4 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-gray-50 transition-all">
                Request HP Proposal
              </button>
            </div>
          </div>

          <div className="flex-1 relative w-full">
            <div className="aspect-square bg-gray-50 rounded-[4rem] overflow-hidden relative group">
              <img
                src="https://images.unsplash.com/photo-1591405351990-4726e331f141?auto=format&fit=crop&q=80&w=1000"
                alt="Repairing HP LaserJet Enterprise Printer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#0096D6]/10 mix-blend-multiply" />
            </div>
            {/* Floating Error Code Card */}
            <div className="absolute top-10 -right-4 bg-white p-6 rounded-3xl shadow-2xl border border-gray-100 max-w-[200px] animate-bounce-slow">
              <div className="flex items-center gap-2 text-red-500 mb-2">
                <Settings2 size={16} />
                <span className="text-[10px] font-black uppercase tracking-widest">System Error</span>
              </div>
              <p className="text-lg font-black tracking-tighter">Code: 59.F0</p>
              <p className="text-[9px] text-gray-400 font-bold uppercase mt-1">Resolved On-Site</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 2. THE HP SERIES GRID (SEO) --- */}

      <section className="py-24 bg-gray-50/50 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hpSeries.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[2.5rem] border border-gray-100 hover:shadow-xl transition-all">
                <h3 className="text-xl font-black uppercase tracking-tighter text-[#0096D6] mb-1">{item.title}</h3>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-4">{item.series}</p>
                <div className="h-[1px] w-full bg-gray-100 mb-4" />
                <p className="text-sm text-gray-600 font-medium leading-relaxed">{item.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 3. SPECIALIZED HP EXPERTISE --- */}
      <section className="py-24 px-6 max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">
          {hpExpertise.map((exp, idx) => (
            <div key={idx} className="space-y-4">
              <div className="h-14 w-14 bg-blue-50 rounded-2xl flex items-center justify-center">
                {exp.icon}
              </div>
              <h3 className="text-xl font-black uppercase tracking-tighter">{exp.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed font-medium">
                {exp.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- 4. HP ERROR RESOLUTION (High SEO Value) --- */}
      <section className="py-24 px-6 bg-[#101828] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-[950] tracking-tighter uppercase mb-12">Common <span className="text-[#0096D6]">HP Error</span> Codes We Solve</h2>
          <div className="grid md:grid-cols-2 gap-4 text-left">
            {[
              { code: "13.XX.XX", msg: "Paper Jam in Tray or Fuser area" },
              { code: "50.X", msg: "Fuser error - heating element failure" },
              { code: "41.3", msg: "Unexpected size in paper tray" },
              { code: "79 Service Error", msg: "Software/Firmware corruption" }
            ].map((err, i) => (
              <div key={i} className="flex items-center justify-between p-5 bg-white/5 rounded-2xl border border-white/10 hover:border-[#0096D6]/50 transition-colors">
                <span className="font-black text-[#0096D6] text-sm">{err.code}</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{err.msg}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 5. FINAL CALL TO ACTION --- */}
      <section className="py-32 px-6 text-center">
        <h2 className="text-4xl md:text-7xl font-[950] tracking-tighter uppercase mb-8">
          Request <span className="text-[#0096D6]">HP</span> Support.
        </h2>
        <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px] mb-10 max-w-md mx-auto">
          Authorized Service for Commercial and Production HP units across the UAE.
        </p>
        <div className="flex justify-center">
          <button className="group flex items-center gap-4 bg-[#101828] text-white px-10 py-6 rounded-full font-black uppercase text-xs tracking-[0.2em] hover:bg-[#0096D6] transition-all">
            Get Technical Help Now <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default HPRepairPage;