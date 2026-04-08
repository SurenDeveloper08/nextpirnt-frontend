"use client";

import React from 'react';
import { 
  Printer, 
  Settings, 
  Clock, 
  ShieldCheck, 
  Wrench, 
  Layers, 
  ChevronRight,
  Zap,
  CheckCircle2
} from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      id: "01",
      title: "Printers Sale",
      icon: <Printer size={32} />,
      desc: "Authorized supply of high-performance A3/A4 multifunction devices from brands like Canon, HP, and Kyocera.",
      features: ["Certified Warranty", "Professional Setup", "Brand New Units"],
      color: "hover:border-blue-500"
    },
    {
      id: "02",
      title: "Printers Rental",
      icon: <Layers size={32} />,
      desc: "Flexible leasing plans with zero upfront capital. Ideal for project offices and corporate events across the UAE.",
      features: ["All-Inclusive Toners", "Free Servicing", "Zero Downpayment"],
      color: "hover:border-[#e63946]"
    },
    {
      id: "03",
      title: "AMC Contracts",
      icon: <Settings size={32} />,
      desc: "Comprehensive Annual Maintenance Contracts that guarantee machine uptime and priority technical response.",
      features: ["Unlimited Repairs", "Spare Parts Included", "Monthly Audits"],
      color: "hover:border-orange-500"
    },
    {
      id: "04",
      title: "Repair Service",
      icon: <Wrench size={32} />,
      desc: "Fast-response technical support for troubleshooting, component repair, and major hardware overhauls.",
      features: ["4-Hour Response", "On-Site Diagnosis", "Certified Engineers"],
      color: "hover:border-emerald-500"
    }
  ];

  return (
    <div className="bg-white text-[#101828] font-sans">
      
      {/* --- 1. DYNAMIC HERO SECTION --- */}
      <section className="relative pt-24 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-50 -z-10 skew-x-12 transform origin-right" />
        <div className="max-w-7xl mx-auto">
          <p className="text-[#e63946] font-bold uppercase tracking-[0.4em] text-[10px] mb-4">
            Next-Gen Infrastructure
          </p>
          <h1 className="text-6xl md:text-8xl font-[900] tracking-tighter leading-[0.85] uppercase mb-8">
            Expert <br /> <span className="text-gray-200">Services.</span>
          </h1>
          <div className="h-1.5 w-32 bg-[#e63946]" />
        </div>
      </section>

      {/* --- 2. INTERACTIVE SERVICE GRID --- */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          {services.map((item) => (
            <div 
              key={item.id} 
              className={`group p-10 bg-white border-2 border-gray-50 rounded-[3rem] transition-all duration-500 hover:shadow-2xl ${item.color} flex flex-col justify-between h-full`}
            >
              <div>
                <div className="flex justify-between items-center mb-10">
                  <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-[#101828] group-hover:bg-[#e63946] group-hover:text-white transition-all duration-500">
                    {item.icon}
                  </div>
                  <span className="text-5xl font-black text-gray-100 group-hover:text-gray-200 transition-colors tracking-tighter">
                    {item.id}
                  </span>
                </div>
                <h3 className="text-3xl font-[900] uppercase tracking-tighter mb-4">{item.title}</h3>
                <p className="text-gray-500 text-lg leading-relaxed mb-8">{item.desc}</p>
                <div className="space-y-3 mb-10">
                  {item.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-3 text-xs font-bold uppercase tracking-tight">
                      <Zap size={14} className="text-[#e63946]" /> {f}
                    </div>
                  ))}
                </div>
              </div>
              <button className="flex items-center justify-between w-full px-8 py-5 bg-gray-900 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] group-hover:bg-[#e63946] transition-all">
                Inquire Service <ChevronRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* --- 3. CONSUMABLES SECTION (BENTO BOX) --- */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto bg-[#101828] rounded-[4rem] p-10 md:p-20 text-white flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-6">
            <div className="inline-block px-4 py-1 bg-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#e63946]">
              Inventory Support
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none">
              Genuine <br /> Consumables
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Maintain output quality with 100% original toners, drums, and spare parts. We stock components for all major brands, ready for same-day delivery across the UAE.
            </p>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4">
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
              <ShieldCheck className="text-[#e63946] mb-4" size={32} />
              <p className="font-bold text-sm uppercase">100% Original</p>
            </div>
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
              <Clock className="text-[#e63946] mb-4" size={32} />
              <p className="font-bold text-sm uppercase">Quick Delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. TRUST STRIP --- */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-2xl font-black uppercase tracking-widest mb-12">The Nex Print Promise</h2>
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-12">
          {["Rapid Support", "Certified Parts", "Flexible Terms", "UAE-Wide Service"].map((text, i) => (
            <div key={i} className="flex items-center gap-3">
              <CheckCircle2 size={24} className="text-[#e63946]" />
              <span className="font-black uppercase tracking-tighter text-sm italic">{text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* --- DIAGRAM: THE SERVICE WORKFLOW --- */}
      

      {/* --- 5. FINAL CTA --- */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-[900] tracking-tighter uppercase mb-10">
            Let's Start <br /> Your Audit.
          </h2>
          <button className="bg-[#e63946] text-white px-12 py-5 rounded-full font-black uppercase tracking-widest text-xs shadow-2xl shadow-[#e63946]/30 hover:scale-105 transition-transform">
            Book Free Consultation
          </button>
        </div>
      </section>

    </div>
  );
};

export default ServicesPage;