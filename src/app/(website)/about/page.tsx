"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

const AboutPage = () => {
  return (
    <section className="bg-white">

      {/* 🔷 HERO */}
      <div className="relative bg-[#f8f9fa] py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
            About <span className="text-[#e63946]">Nexprint</span>
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Powering businesses across the UAE with reliable printer sales,
            rental, and maintenance solutions.
          </p>
        </div>
      </div>

      {/* 🔷 WHO WE ARE */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* TEXT */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Who We Are
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Nexprint Office Equipment LLC is a trusted provider of office
              printing solutions headquartered in Abu Dhabi, serving clients
              across all Emirates.
            </p>
            <p className="text-slate-600 leading-relaxed">
              We specialize in printer sales, rental, and maintenance services,
              ensuring your business runs smoothly without interruptions.
            </p>
          </div>

          {/* IMAGE (REPLACED BOX) */}
          <div className="relative group overflow-hidden rounded-2xl">
  <Image
    src="/images/nexprint.png"
    alt="Nexprint Office Equipment"
    width={700}
    height={500}
    className="w-full h-[350px] md:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
  />

  {/* overlay */}
  <div className="absolute inset-0 bg-black/10"></div>

  {/* badge */}
  <div className="absolute bottom-4 left-4 bg-white px-4 py-2 shadow-md text-sm font-semibold text-slate-800 rounded-lg">
    Abu Dhabi HQ • UAE Wide Service
  </div>
</div>

        </div>
      </div>

      {/* 🔷 MISSION & VISION */}
      <div className="py-20 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          <div className="bg-white p-8 border border-slate-200 hover:shadow-md transition">
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Our Mission
            </h3>
            <p className="text-slate-600 leading-relaxed">
              To deliver reliable, cost-effective printing solutions with fast
              response and professional service.
            </p>
          </div>

          <div className="bg-white p-8 border border-slate-200 hover:shadow-md transition">
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Our Vision
            </h3>
            <p className="text-slate-600 leading-relaxed">
              To become the most trusted printing solutions partner across the UAE.
            </p>
          </div>

        </div>
      </div>

      {/* 🔷 SERVICES */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            What We Do
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Complete printing solutions designed to support your business operations efficiently.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">

          {[
            "Printer Sales",
            "Printer Rental",
            "AMC Maintenance",
            "Repair & Service",
            "Consumables Supply",
            "Office Stationery",
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-slate-700 hover:text-[#e63946] transition"
            >
              <CheckCircle className="text-[#e63946]" size={18} />
              <span className="font-medium">{item}</span>
            </div>
          ))}

        </div>
      </div>

      {/* 🔷 STATS */}
      <div className="py-20 bg-[#e63946] text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

          {[
            { number: "10+", label: "Years Experience" },
            { number: "500+", label: "Happy Clients" },
            { number: "1000+", label: "Machines Installed" },
            { number: "24/7", label: "Support" },
          ].map((stat, i) => (
            <div key={i}>
              <h3 className="text-3xl font-black">{stat.number}</h3>
              <p className="text-sm mt-2 opacity-90">{stat.label}</p>
            </div>
          ))}

        </div>
      </div>

      {/* 🔷 CTA */}
      <div className="py-20 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          Need a Reliable Printing Partner?
        </h2>
        <p className="text-slate-600 mb-8">
          Contact Nexprint today for sales, rental, or service across the UAE.
        </p>

        <a
          href="/contact"
          className="inline-block bg-[#e63946] text-white px-8 py-3 font-bold hover:opacity-90 transition shadow-md"
        >
          CONTACT US
        </a>
      </div>

    </section>
  );
};

export default AboutPage;