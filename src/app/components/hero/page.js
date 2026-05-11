  import React from 'react';
  import { Phone, ArrowRight, CheckCircle2 } from 'lucide-react';

  const Hero = () => {
    return (
      <section className="relative w-full min-h-[650px] sm:min-h-[700px] lg:h-[85vh] flex items-center overflow-hidden bg-slate-100">
        
        {/* 1. BACKGROUND LAYER */}
        <div className="absolute inset-0 z-0">
          {/* Mobile View - Specifically tuned for the portrait image */}
          <div className="lg:hidden w-full h-full relative">
            <img
              src="/images/hero-mobile.png" 
              alt="Printer Rental Dubai"
              className="w-full h-full object-cover object-top" // Changed to object-top to keep the sky visible for text
            />
            {/* Stronger gradient on mobile to ensure white text pops against the clouds */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent"></div>
          </div>

          {/* Desktop View */}
          <div className="hidden lg:block w-full h-full relative">
            <img
              src="/images/hero-desktop.png" 
              alt="Printer Rental Desktop"
              className="w-full h-full object-cover object-right"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent"></div>
          </div>
        </div>

        {/* 2. CONTENT LAYER */}
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          {/* mt-[-120px] on mobile pushes text into the sky area. Adjust this number if needed. */}
          <div className="max-w-xl lg:max-w-2xl mt-[-120px] sm:mt-[-150px] lg:mt-0 text-center lg:text-left">
            
            {/* Badge */}
          

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white lg:text-slate-900 leading-[1.15] lg:leading-[1.1]">
    One-Stop <span className="text-[#e63946]">Printer Solutions</span> <br className="hidden sm:block lg:hidden" /> in Abu Dhabi
  </h1>

  <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-gray-100 lg:text-slate-700 font-medium leading-relaxed max-w-lg mx-auto lg:mx-0">
    Sales • Rental • AMC • Repair • Consumables • Stationery — Reliable, affordable, and fast service across Abu Dhabi, UAE.
  </p>

            {/* Buttons - Stacked on tiny screens, side-by-side on tablets/desktop */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <button className="w-full sm:w-auto px-7 py-4 bg-[#e63946] text-white font-bold rounded-lg shadow-xl hover:bg-red-700 transition-all flex items-center justify-center gap-2 group">
                Get Quote 
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <a href="tel:+971XXXXXXXXX" className="w-full sm:w-auto px-7 py-4 bg-white text-slate-900 border-2 border-slate-200 font-bold rounded-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                <Phone size={18} className="text-[#e63946]" /> Call Now
              </a>
            </div>

            {/* Trust Points - Simplified for mobile */}
            <div className="mt-8 flex flex-wrap justify-center lg:justify-start items-center gap-4 lg:gap-8 text-white lg:text-slate-600 font-bold text-xs sm:text-sm">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={16} className="text-green-400 lg:text-green-500" /> 4hr Response
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={16} className="text-green-400 lg:text-green-500" /> Original Ink
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default Hero;