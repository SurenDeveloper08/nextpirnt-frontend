"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle,
  ArrowRight,
  ShieldCheck,
  Printer,
  Wrench,
} from "lucide-react";

const services = [
  "Printer Sales",
  "Printer Rental",
  "AMC Maintenance",
  "Repair & Service",
  "Consumables Supply",
  "Office Stationery",
];

const stats = [
  { number: "10+", label: "Years Experience" },
  { number: "500+", label: "Happy Clients" },
  { number: "1000+", label: "Machines Installed" },
  { number: "24/7", label: "Support" },
];

export default function AboutPage() {
  return (
    <main className="bg-white overflow-hidden">

      {/* HERO */}
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

      {/* WHO WE ARE */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">

          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

            {/* LEFT CONTENT */}
            <div>

              <span className="inline-flex px-4 py-1.5 rounded-full bg-red-50 text-[#e63946] text-sm font-semibold mb-5">
                Who We Are
              </span>

              <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-6">
                Complete Office Printing
                Solutions Partner
              </h2>

              <p className="text-slate-600 leading-relaxed mb-5">
                NexPrint Office Equipment LLC is a trusted provider
                of office printing solutions headquartered in Abu Dhabi,
                supporting businesses across the UAE.
              </p>

              <p className="text-slate-600 leading-relaxed mb-8">
                We specialize in printer sales, rentals,
                maintenance contracts, repair services,
                and consumables supply with fast response
                and professional support.
              </p>

              {/* FEATURES */}
              <div className="grid sm:grid-cols-2 gap-4">

                <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-11 h-11 rounded-xl bg-red-50 flex items-center justify-center shrink-0">
                    <Printer className="text-[#e63946]" size={20} />
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900">
                      Multi-Brand Support
                    </h3>

                    <p className="text-sm text-slate-500 mt-1">
                      HP, Canon, Epson, Brother & more
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-11 h-11 rounded-xl bg-red-50 flex items-center justify-center shrink-0">
                    <ShieldCheck className="text-[#e63946]" size={20} />
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900">
                      Reliable Service
                    </h3>

                    <p className="text-sm text-slate-500 mt-1">
                      Fast and professional technical support
                    </p>
                  </div>
                </div>

              </div>

            </div>

            {/* RIGHT IMAGE */}
            <div className="relative">

              <div className="relative overflow-hidden rounded-[32px] border border-slate-200 shadow-xl group">

                <Image
                  src="/images/nexprint.png"
                  alt="NexPrint Office Equipment"
                  width={700}
                  height={500}
                  className="
                    w-full
                    h-[350px] md:h-[500px]
                    object-cover
                    transition-transform duration-700
                    group-hover:scale-105
                  "
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>

                {/* Floating Badge */}
                <div className="absolute bottom-5 left-5 bg-white/95 backdrop-blur rounded-2xl px-5 py-4 shadow-xl">

                  <p className="text-xs uppercase tracking-widest text-slate-500 mb-1">
                    Headquarters
                  </p>

                  <h3 className="font-bold text-slate-900">
                    Abu Dhabi • UAE Wide Service
                  </h3>

                </div>

              </div>

              {/* FLOAT CARD */}
              <div className="hidden md:flex absolute -bottom-8 -left-8 bg-white rounded-3xl shadow-2xl border border-slate-100 p-5 items-center gap-4">

                <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center">
                  <Wrench className="text-[#e63946]" />
                </div>

                <div>
                  <h4 className="font-black text-slate-900 text-lg">
                    Professional Support
                  </h4>

                  <p className="text-slate-500 text-sm">
                    Fast AMC & repair response
                  </p>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-20 bg-[#f8fafc]">

        <div className="max-w-7xl mx-auto px-4 lg:px-6">

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">

            {/* MISSION */}
            <div className="bg-white rounded-[32px] p-8 border border-slate-200 hover:shadow-xl transition-all duration-300">

              <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center mb-6">
                <ShieldCheck className="text-[#e63946]" />
              </div>

              <h3 className="text-2xl font-black text-slate-900 mb-4">
                Our Mission
              </h3>

              <p className="text-slate-600 leading-relaxed">
                To provide reliable and cost-effective printing
                solutions with fast support, quality products,
                and professional customer service.
              </p>

            </div>

            {/* VISION */}
            <div className="bg-white rounded-[32px] p-8 border border-slate-200 hover:shadow-xl transition-all duration-300">

              <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center mb-6">
                <Printer className="text-[#e63946]" />
              </div>

              <h3 className="text-2xl font-black text-slate-900 mb-4">
                Our Vision
              </h3>

              <p className="text-slate-600 leading-relaxed">
                To become the UAE’s most trusted office printing
                solutions provider through innovation,
                reliability, and customer satisfaction.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 lg:py-28">

        <div className="max-w-7xl mx-auto px-4 lg:px-6">

          {/* HEADER */}
          <div className="text-center mb-16">

            <span className="inline-flex px-5 py-2 rounded-full bg-red-50 text-[#e63946] text-sm font-semibold mb-5">
              Our Services
            </span>

            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-5">
              What We Provide
            </h2>

            <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Complete office printing solutions designed
              for modern businesses across UAE.
            </p>

          </div>

          {/* SERVICES GRID */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

            {services.map((item, index) => (
              <div
                key={index}
                className="
                  flex items-center gap-4
                  bg-white
                  border border-slate-200
                  rounded-2xl
                  p-5
                  hover:border-[#e63946]/30
                  hover:shadow-lg
                  transition-all duration-300
                  group
                "
              >

                <div className="w-11 h-11 rounded-xl bg-red-50 flex items-center justify-center shrink-0">
                  <CheckCircle
                    className="text-[#e63946]"
                    size={20}
                  />
                </div>

                <span className="font-semibold text-slate-800 group-hover:text-[#e63946] transition-colors">
                  {item}
                </span>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* STATS */}
      <section className="py-20 bg-[#e63946] relative overflow-hidden">

        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 lg:px-6">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">

            {stats.map((stat, i) => (
              <div key={i}>

                <h3 className="text-4xl lg:text-5xl font-black text-white">
                  {stat.number}
                </h3>

                <p className="text-white/90 mt-3 text-sm md:text-base">
                  {stat.label}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

      <div className="py-20 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Need a Reliable Printing Partner?
          </h2>
          <p className="text-slate-600 mb-8">
            Contact Nexprint today for sales, rental, or service across the UAE.
          </p>

          <a
            href="/contact"
            className="inline-block bg-[#e63946] text-white px-8 py-3 font-bold hover:opacity-90 rounded-2xl transition shadow-md"
          >
            CONTACT US
          </a>
        </div>

    </main>
  );
}