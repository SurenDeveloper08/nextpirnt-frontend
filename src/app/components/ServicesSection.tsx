import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: "Printer Sales",
      description: "Brand new & refurbished high-end A3/A4 MFPs from top brands like Ricoh, Canon, and HP.",
      image: "/images/services/printer-sale.png", // The image with the "For Sale" tag
      link: "/sales",
      tag: "Authorized Dealer"
    },
    {
      title: "Printer Rental",
      description: "Flexible short & long-term leasing plans. Ideal for Dubai startups, events, and offices.",
      image: "/images/services/printer-rental.png",
      link: "/rental",
      tag: "Zero Capex"
    },
    {
      title: "AMC Contracts",
      description: "Comprehensive maintenance with guaranteed uptime, parts coverage, and 4-hour response.",
      image: "/images/services/amc.png",
      link: "/amc",
      tag: "Full Support"
    },
    {
      title: "Genuine Consumables",
      description: "100% original toners, inks & spare parts ensuring the longevity of your office equipment.",
      image: "/images/services/consumables.png",
      link: "/consumables",
      tag: "Genuine Parts"
    },
    {
      title: "Repair & Service",
      description: "Expert on-site troubleshooting by certified engineers. Reliable support across the UAE.",
      image: "/images/services/service.png",
      link: "/service",
      tag: "Fastest Response"
    },
  ];

  return (
    <section className="py-24 bg-white" id="services">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* --- HEADER --- */}
        <div className="border-l-4 border-[#e63946] pl-6 mb-16">
          <h2 className="text-slate-500 font-bold uppercase tracking-widest text-sm mb-2">
            Nexprint Solutions
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 uppercase">
            Our Core <span className="text-[#e63946]">Services</span>
          </h3>
        </div>

        {/* --- GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative flex flex-col bg-white border border-slate-200 rounded-none transition-all duration-300 hover:z-10 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:-translate-y-1"
            >
              {/* IMAGE BOX - Square */}
              <div className="relative h-64 w-full overflow-hidden bg-slate-100">
                <Image 
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay Tag */}
                <div className="absolute top-0 left-0 bg-[#e63946] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2">
                  {service.tag}
                </div>
              </div>

              {/* CONTENT BOX */}
              <div className="p-8 flex flex-col flex-grow">
                <h4 className="text-xl font-black text-slate-900 uppercase mb-4 tracking-tight group-hover:text-[#e63946] transition-colors">
                  {service.title}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>
                
                <a 
                  href={service.link} 
                  className="inline-flex items-center gap-3 text-xs font-black uppercase tracking-widest text-slate-900 group-hover:text-[#e63946] transition-all"
                >
                  View Details 
                  <div className="w-8 h-[2px] bg-[#e63946] transition-all group-hover:w-12"></div>
                </a>
              </div>
            </div>
          ))}

          {/* 6th BOX - CALL TO ACTION */}
          <div className="flex flex-col justify-center items-start p-10 bg-slate-900 rounded-none text-white border border-slate-900">
            <h4 className="text-2xl font-black uppercase mb-4 leading-tight">
              Customized <br /> Corporate <br /> Packages
            </h4>
            <p className="text-slate-400 text-sm mb-8">
              Tailored solutions for government, healthcare, and large enterprise fleets in the UAE.
            </p>
            <button className="px-8 py-3 bg-[#e63946] text-white font-bold uppercase text-xs tracking-widest hover:bg-white hover:text-slate-900 transition-all">
              Request a Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;