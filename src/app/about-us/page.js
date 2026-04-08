"use client";

import React from 'react';
import Image from 'next/image';
import { 
  Printer, Settings, Clock, ShieldCheck, 
  Target, Eye, CheckCircle2, ChevronRight 
} from 'lucide-react';

const AboutUs = () => {
  const services = [
    { title: "Printer Sales", icon: <Printer size={24} />, desc: "Leading global brands for all business scales." },
    { title: "Printer Rental", icon: <Clock size={24} />, desc: "Flexible, cost-effective leasing plans." },
    { title: "AMC Services", icon: <Settings size={24} />, desc: "Annual Maintenance Contracts for 99% uptime." },
    { title: "Consumables", icon: <ShieldCheck size={24} />, desc: "Genuine toners and high-quality spare parts." }
  ];

  return (
    <div className="bg-white text-[#101828] font-sans">
      
      {/* --- 1. TITLE CONTAINER & COMPANY NAME (ONE LINE) --- */}
      <section className="bg-gray-50 py-16 px-6 border-b border-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-4">
           About Us
          </h1>
          <div className="h-1.5 w-24 bg-[#e63946] mx-auto rounded-full mb-6" />
          <p className="text-[#e63946] font-bold uppercase tracking-[0.3em] text-xs">
            About Our Company
          </p>
        </div>
      </section>

      {/* --- 2. BRIEF ABOUT US --- */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
            <Image 
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200" 
              alt="Nex Print Office" 
              fill 
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-black uppercase tracking-tight">Who We Are</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              NEX PRINT OFFICE EQUIPMENT LLC is a trusted provider of comprehensive printing and office equipment solutions based in Abu Dhabi, serving clients across the UAE.
            </p>
            <p className="text-gray-500 leading-relaxed">
              We specialize in supplying, renting, maintaining, and repairing a wide range of printers from leading global brands. Our solutions are designed to support businesses of all sizes—from small offices to large corporate organizations—with reliable, cost-effective, and efficient printing infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* --- 3. SERVICES SECTION --- */}
      <section className="py-20 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black uppercase tracking-tight text-center mb-12">Our Specialized Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-[#e63946] transition-all group">
                <div className="text-[#e63946] mb-4 group-hover:scale-110 transition-transform font-bold">
                  {item.icon}
                </div>
                <h4 className="font-bold text-lg mb-2 uppercase">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. MISSION & VISION --- */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="bg-[#101828] text-white p-12 rounded-[2rem] flex items-start gap-6">
            <div className="bg-[#e63946] p-3 rounded-xl"><Target size={30} /></div>
            <div>
              <h3 className="text-2xl font-black uppercase mb-4 tracking-tighter">Our Mission</h3>
              <p className="text-gray-400 leading-relaxed">
                To deliver reliable, efficient, and cost-effective printing solutions that enhance operational productivity for businesses across the UAE.
              </p>
            </div>
          </div>
          {/* Vision */}
          <div className="bg-white border-2 border-gray-100 p-12 rounded-[2rem] flex items-start gap-6">
            <div className="bg-gray-100 text-[#101828] p-3 rounded-xl"><Eye size={30} /></div>
            <div>
              <h3 className="text-2xl font-black uppercase mb-4 tracking-tighter">Our Vision</h3>
              <p className="text-gray-500 leading-relaxed">
                To become a leading and most trusted office equipment solutions provider in the UAE through service excellence and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 5. CALL TO ACTION --- */}
      <section className="py-20 bg-[#e63946] text-white text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black uppercase tracking-tight mb-6">Partner With Nex Print Today</h2>
          <p className="mb-8 opacity-90 font-medium">Providing the heart of UAE business with quality office equipment solutions.</p>
          <button className="bg-white text-[#e63946] px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#101828] hover:text-white transition-all">
            Get Technical Support
          </button>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;