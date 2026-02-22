"use client";

import React from 'react';
import Image from 'next/image';
// Ensure the path is correct for your project structure
import Img from '../../assets/photocopy.avif'

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen lg:h-screen flex items-center bg-[#f8f9fa] overflow-hidden pt-20 lg:pt-0 py-12">

      {/* Background Decor - Optimized with pointer-events-none to prevent interaction lag */}
      <div className="absolute top-[10%] left-[5%] w-32 h-32 bg-gray-200 rounded-full blur-[80px] opacity-30 pointer-events-none animate-pulse" />
      <div className="absolute bottom-[10%] right-[10%] w-64 h-64 bg-red-100 rounded-full blur-[100px] opacity-20 pointer-events-none" />

     <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center relative z-10">
  {/* LEFT SIDE */}
  <div className="flex flex-col items-start space-y-8 order-2 lg:order-1">
    <h1 className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-[900] text-gray-900 leading-[1.05] tracking-tight">
      Innovative <br className="hidden md:block" />
      Print <span className="text-[#e63946]">Solutions</span>
    </h1>
    <p className="max-w-md text-gray-500 text-lg md:text-xl font-medium leading-relaxed border-l-4 border-[#e63946] pl-6 py-1">
      we deliver cost-effective printer sales, rental, AMC, and repair services across the UAE.
    </p>
    <div className="flex flex-wrap gap-4">
      <button className="px-10 py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-[#e63946] transition-all transform hover:-translate-y-1 active:scale-95 shadow-xl">
        View Our Catalog
      </button>
      <button className="px-10 py-4 bg-white text-gray-900 border border-gray-200 rounded-2xl font-bold hover:border-[#e63946] transition-all active:scale-95">
        Contact Sales
      </button>
    </div>
  </div>

        {/* --- RIGHT SIDE: Tilted Visual Stack --- */}
        <div className="relative w-full h-[400px] md:h-[500px] lg:h-full flex items-center justify-center order-1 lg:order-2">
          <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">

            {/* Card 1: Industrial Printer (Top Left) */}
            <div className="absolute z-10 top-0 left-0 w-[80%] aspect-[16/10] bg-white p-2 rounded-[2rem] shadow-2xl border-[8px] border-white transform -rotate-[12deg] transition-all duration-500 hover:-rotate-[5deg] hover:scale-105 cursor-pointer">
              <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden">
                <Image
                  src={Img}
                  alt="Industrial Printer"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority // LCP Optimization
                />
                <div className="absolute bottom-4 left-6 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-sm border border-white/50">
                  <p className="text-[10px] font-bold text-gray-700 tracking-tight">Industrial Printer.jpg</p>
                </div>
              </div>
            </div>

            {/* Card 2: Sales & Rental (Bottom Right) */}
            <div className="absolute z-20 bottom-[10%] right-0 w-[75%] aspect-[16/10] bg-white p-2 rounded-[2rem] shadow-2xl border-[8px] border-white transform -rotate-[12deg] translate-y-8 transition-all duration-700 hover:-rotate-[8deg] cursor-pointer group">
              <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden">
                <Image
                  src={Img}
                  alt="Sales and Rental"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover brightness-75 group-hover:brightness-90 transition-all"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/95 backdrop-blur px-8 py-3 rounded-xl shadow-xl border border-white/50 transform group-hover:scale-110 transition-transform">
                    <h2 className="text-gray-900 font-black text-xl md:text-2xl tracking-tighter uppercase">
                      Sales & Rental
                    </h2>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;