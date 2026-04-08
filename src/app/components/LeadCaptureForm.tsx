"use client";

import React from 'react';
import { Clock, MapPin, ChevronRight } from "lucide-react";

export default function LeadCaptureForm() {
  return (
    <section className="py-12 md:py-24 bg-white" aria-labelledby="form-title">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Container: Stacks on mobile, Side-by-side on desktop */}
        <div className="flex flex-col lg:flex-row border border-slate-200 shadow-xl overflow-hidden rounded-none">
          
          {/* Left Side: Info Panel (White Background) */}
          <div className="lg:w-1/3 bg-white p-8 md:p-16 flex flex-col justify-between text-slate-900 border-b lg:border-b-0 lg:border-r border-slate-100">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-6 h-[3px]" style={{ backgroundColor: '#e63946' }}></span>
                <h2 className="text-[10px] md:text-[11px] font-black tracking-[0.3em] uppercase" style={{ color: '#e63946' }}>
                  Contact HQ
                </h2>
              </div>
              <h3 id="form-title" className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-tight mb-8">
                Ready to <br /> <span style={{ color: '#e63946' }}>Optimize?</span>
              </h3>
              
              {/* Info Items: Adjusted for mobile spacing */}
              <div className="space-y-6 md:space-y-8">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-slate-50 border border-slate-100">
                    <Clock className="w-5 h-5" style={{ color: '#e63946' }} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Response Time</p>
                    <p className="text-sm font-bold text-slate-700">2-Hour Callback</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-slate-50 border border-slate-100">
                    <MapPin className="w-5 h-5" style={{ color: '#e63946' }} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Location</p>
                    <p className="text-sm font-bold text-slate-700">Abu Dhabi & Dubai</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden lg:block mt-12">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-300">
                Nexprint Solutions
              </p>
            </div>
          </div>

          {/* Right Side: Form Panel (Primary Red) */}
          <div className="lg:w-2/3 p-8 md:p-16 text-white" style={{ backgroundColor: '#e63946' }}>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-x-12 md:gap-y-10">
              
              {/* Full Name - Native keyboard optimization */}
              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-black uppercase tracking-widest text-white/90">
                  Full Name
                </label>
                <input 
                  type="text" 
                  autoComplete="name"
                  placeholder="Your Name"
                  className="bg-transparent border-b-2 border-white/40 text-white py-3 px-1 focus:outline-none focus:border-white transition-colors placeholder:text-white/50 rounded-none text-base font-bold"
                  required
                />
              </div>

              {/* Company Name */}
              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-black uppercase tracking-widest text-white/90">
                  Organization
                </label>
                <input 
                  type="text" 
                  autoComplete="organization"
                  placeholder="Company Name"
                  className="bg-transparent border-b-2 border-white/40 text-white py-3 px-1 focus:outline-none focus:border-white transition-colors placeholder:text-white/50 rounded-none text-base font-bold"
                  required
                />
              </div>

              {/* Phone Number - Full width on mobile for easy typing */}
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-[11px] font-black uppercase tracking-widest text-white/90">
                  UAE Mobile Number
                </label>
                <div className="flex gap-4 border-b-2 border-white/40 focus-within:border-white transition-colors">
                  <span className="py-3 text-white/70 font-black">+971</span>
                  <input 
                    type="tel" 
                    inputMode="tel"
                    placeholder="50 000 0000"
                    className="bg-transparent text-white py-3 w-full focus:outline-none placeholder:text-white/50 rounded-none text-base font-bold"
                    required
                  />
                </div>
              </div>

              {/* Submit Button - Enlarged for Mobile Thumb */}
              <div className="md:col-span-2 mt-4">
                <button 
                  type="submit"
                  className="group flex items-center justify-between w-full md:w-auto min-w-[280px] bg-white text-slate-900 active:scale-95 md:hover:bg-slate-900 md:hover:text-white py-5 md:py-6 px-8 md:px-10 font-black uppercase text-[12px] tracking-[0.2em] transition-all duration-300 rounded-none shadow-xl"
                >
                  Send Request
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="mt-6 text-[10px] text-white/60 font-bold uppercase tracking-wider text-center md:text-left">
                  Secure On-Site Service • Abu Dhabi
                </p>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}