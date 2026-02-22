"use client";

import React from 'react';
import Image from 'next/image';
import { ShieldCheck, Truck, Clock, ArrowRight } from 'lucide-react';
// import AboutImg from '../../assets/printer-tech.jpg';
import AboutImg from '../../assets/8814161.jpg'
const AboutUs = () => {
  const stats = [
    { 
      title: "Latest Fleet", 
      desc: "Modern Tech", 
      icon: <ShieldCheck size={20} className="text-[#e63946]" /> 
    },
    { 
      title: "All Emirates", 
      desc: "Fast Delivery", 
      icon: <Truck size={20} className="text-[#e63946]" /> 
    },
    { 
      title: "Rapid SLA", 
      desc: "2-Hr Response", 
      icon: <Clock size={20} className="text-[#e63946]" /> 
    },
  ];

  return (
    <section className="relative w-full py-20 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* --- LEFT SIDE: Content --- */}
          <div className="flex flex-col items-start space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-10 h-[2px] bg-[#e63946]"></span>
                <p className="text-[#e63946] font-black text-[11px] uppercase tracking-[0.3em]">
                  About Nex Print LLC
                </p>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-[900] text-gray-900 tracking-tighter leading-[1.1]">
                Trusted Printer & <br />
                Office Equipment <br />
                <span className="text-[#e63946]">Supplier in UAE</span>
              </h2>
            </div>

            <p className="text-gray-600 text-lg md:text-xl font-medium leading-relaxed">
              Nex Print Office Equipment LLC is a leading provider of advanced 
              printing technology and office automation. We specialize in sales, 
              rentals, and maintenance designed to keep your business running with maximum efficiency across the UAE.
            </p>

        
            <div className="flex flex-wrap gap-4 pt-4 w-full sm:w-auto">
              <button className="group px-10 py-5 bg-[#e63946] text-white rounded-2xl font-bold flex items-center gap-3 hover:bg-gray-900 transition-all duration-300 shadow-xl shadow-red-100 w-full sm:w-auto justify-center">
                Learn More <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* --- RIGHT SIDE: Premium Image Design --- */}
          <div className="relative w-full h-[500px] lg:h-[600px] flex items-center justify-center order-1 lg:order-2">
            {/* Background Decorative Shape */}
          
            {/* The Main Image Card */}
            <div className="relative w-full max-w-[480px] aspect-[4/5] bg-white p-3 rounded-[3rem] shadow-2xl border-[12px] border-white transform transition-transform duration-700">
              <div className="relative w-full h-full rounded-[2.2rem] overflow-hidden bg-gray-100">
                <Image 
                    src={AboutImg} 
                    alt="Nex Print Technical Expertise" 
                    fill 
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  /> 
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;