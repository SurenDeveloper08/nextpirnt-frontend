"use client";

import React, { useState } from 'react';
import { 
  ShieldCheck, Clock, Settings, Users, 
  CheckCircle2, ArrowRight, FileText, 
  Zap, Headphones, BarChart3
} from 'lucide-react';

const AMCPage = () => {
  const [activePlan, setActivePlan] = useState('Standard');

  const features = [
    {
      title: "Preventive Maintenance",
      desc: "Scheduled monthly checkups to identify and fix wear-and-tear before it causes downtime.",
      icon: <Settings className="text-[#e63946]" size={24} />
    },
    {
      title: "4-Hour Response Time",
      desc: "Guaranteed priority support across Dubai, Abu Dhabi, and Sharjah for critical breakdowns.",
      icon: <Clock className="text-[#e63946]" size={24} />
    },
    {
      title: "Genuine Spare Parts",
      desc: "Only 100% OEM parts used for Canon, HP, and Kyocera units to maintain print quality.",
      icon: <ShieldCheck className="text-[#e63946]" size={24} />
    },
    {
      title: "Unlimited Call-outs",
      desc: "No hidden charges for emergency visits. Our technicians are on standby for your fleet.",
      icon: <Headphones className="text-[#e63946]" size={24} />
    }
  ];

  const amcPlans = [
    {
      name: "Standard",
      price: "Cost per Copy",
      bestFor: "Small to Medium Offices",
      includes: ["Monthly Service", "Labor Charges", "Toner Included", "Spare Parts Paid"]
    },
    {
      name: "Premium",
      price: "All-Inclusive",
      bestFor: "Enterprise & High Volume",
      includes: ["Bi-Weekly Service", "Labor Charges", "Toner & Drums", "All Spare Parts Included"]
    }
  ];

  return (
    <div className="bg-white text-[#101828] font-sans selection:bg-[#e63946] selection:text-white">
      
      {/* --- 1. HERO SECTION (SEO H1) --- */}
      <section className="pt-32 pb-20 px-6 max-w-[1400px] mx-auto border-b border-gray-100">
        <div className="max-w-4xl">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#e63946] mb-6 block">
            Service & Infrastructure
          </span>
          <h1 className="text-5xl md:text-8xl font-[950] tracking-tighter uppercase leading-[0.85] mb-8">
            Zero <span className="text-[#e63946]">Downtime</span> <br />
            Printing.
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 font-medium leading-relaxed max-w-2xl">
            Certified Annual Maintenance Contracts (AMC) for enterprise printing fleets across the UAE.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <button className="bg-[#101828] text-white px-8 py-4 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-[#e63946] transition-all">
              Request AMC Proposal
            </button>
            <button className="border-2 border-gray-100 px-8 py-4 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-gray-50 transition-all">
              Our Service Tiers
            </button>
          </div>
        </div>
      </section>

      {/* --- 2. THE CORE VALUE PROPOSITION --- */}
      <section className="py-24 px-6 max-w-[1400px] mx-auto bg-gray-50/50">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((item, idx) => (
            <div key={idx} className="space-y-4">
              <div className="h-14 w-14 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-gray-100">
                {item.icon}
              </div>
              <h3 className="text-lg font-black uppercase tracking-tight">{item.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- 3. DETAILED CONTENT (SEO Friendly) --- */}
      <section className="py-24 px-6 max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-[950] tracking-tighter uppercase leading-none mb-6">
            Why Partner with <span className="text-[#e63946]">NEX PRINT?</span>
          </h2>
          <div className="space-y-6">
            <p className="text-gray-500 leading-relaxed">
              Managed print services in the UAE require local expertise. We support over 500+ businesses with <strong>Authorized Canon, HP, and Kyocera technicians</strong>. Our AMC covers everything from mechanical repair to firmware security updates.
            </p>
            <ul className="space-y-4">
              {[
                "Priority response for VIP clients",
                "Remote monitoring for toner replenishment",
                "Loaner machines provided if repairs take > 24hrs",
                "Detailed monthly usage reports for cost tracking"
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-3 font-bold text-sm uppercase tracking-tight">
                  <CheckCircle2 size={18} className="text-[#e63946]" />
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="relative aspect-square bg-gray-100 rounded-[3rem] overflow-hidden group">
            {/* Placeholder for a high-quality technician photo */}
            <div className="absolute inset-0 bg-[#101828]/10 group-hover:bg-transparent transition-all duration-700" />
            <div className="absolute bottom-10 left-10 right-10 bg-white p-8 rounded-3xl shadow-2xl">
                <p className="text-[10px] font-black uppercase text-[#e63946] mb-2">Technician Status</p>
                <div className="flex justify-between items-end">
                    <p className="text-2xl font-black tracking-tighter uppercase">98.4% First-Fix Rate</p>
                    <BarChart3 size={30} className="text-gray-200" />
                </div>
            </div>
        </div>
      </section>

      {/* --- 4. PRICING STRUCTURE (The "Drawer" of AMC) --- */}
      <section className="py-24 px-6 bg-[#101828] text-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-[950] tracking-tighter uppercase mb-4">Contract Tiers.</h2>
            <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">Flexible coverage tailored to your monthly volume.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {amcPlans.map((plan) => (
              <div 
                key={plan.name}
                className="group border border-white/10 p-10 rounded-[2.5rem] hover:bg-white/5 transition-all cursor-pointer"
              >
                <div className="flex justify-between items-start mb-12">
                  <div>
                    <h3 className="text-2xl font-black uppercase tracking-tighter mb-1">{plan.name}</h3>
                    <p className="text-[#e63946] text-xs font-black uppercase tracking-[0.2em]">{plan.bestFor}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-[950] tracking-tighter">{plan.price}</p>
                  </div>
                </div>
                <div className="space-y-4 mb-12">
                  {plan.includes.map((inc) => (
                    <div key={inc} className="flex items-center justify-between py-3 border-b border-white/5">
                      <span className="text-xs font-bold uppercase tracking-widest text-gray-400">{inc}</span>
                      <CheckCircle2 size={14} className="text-white" />
                    </div>
                  ))}
                </div>
                <button className="w-full bg-white text-[#101828] py-5 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-[#e63946] hover:text-white transition-all">
                  Get Detailed Quote
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 5. FAQ SECTION (SEO - Schema.org ready) --- */}
      <section className="py-24 px-6 max-w-[1400px] mx-auto">
        <h2 className="text-3xl font-black uppercase tracking-tighter mb-12 text-center">Frequently Asked Questions.</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            { q: "Do you cover all printer brands?", a: "We specialize in Canon, HP, Kyocera, Konica Minolta, and Ricoh enterprise units." },
            { q: "Is the toner included in the AMC?", a: "Toner is included in our 'Premium' and 'Cost-per-Copy' models, but not in basic labor contracts." },
            { q: "What is your emergency response time?", a: "We guarantee a technician at your site within 4 working hours for critical service calls." }
          ].map((faq, i) => (
            <div key={i} className="p-6 border border-gray-100 rounded-2xl hover:border-[#e63946]/30 transition-all">
              <h4 className="font-black uppercase text-xs tracking-widest mb-3">{faq.q}</h4>
              <p className="text-sm text-gray-500 font-medium">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <footer className="py-20 px-6 text-center border-t border-gray-100">
        <h2 className="text-4xl md:text-7xl font-[950] tracking-tighter uppercase mb-8">Ready to <span className="text-[#e63946]">Secure</span> Your Fleet?</h2>
        <button className="group flex items-center gap-4 bg-[#101828] text-white px-10 py-6 rounded-full font-black uppercase text-xs tracking-[0.2em] mx-auto hover:bg-[#e63946] transition-all">
          Download AMC Brochure <ArrowRight size={18} />
        </button>
      </footer>
    </div>
  );
};

export default AMCPage;