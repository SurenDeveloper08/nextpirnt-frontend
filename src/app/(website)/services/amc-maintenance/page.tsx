"use client";

import React from "react";
import Image from "next/image";
const AMCServicePage = () => {
  return (
    <section className="bg-white">

      {/* 🔷 HERO (SEO + Intro) */}
      <div className="bg-[#f8f9fa] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900">
            Printer <span className="text-[#e63946]">AMC Maintenance</span> in UAE
          </h1>

          <p className="text-slate-600 mt-6 max-w-2xl text-lg">
            Reliable Annual Maintenance Contracts (AMC) for printers across Abu Dhabi and all Emirates.
            Keep your business running without downtime.
          </p>

          <a
            href="/contact"
            className="inline-block mt-8 bg-[#e63946] text-white px-6 py-3 font-bold"
          >
            Request AMC Quote
          </a>
        </div>
      </div>

      {/* 🔷 WHAT IS AMC */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              What is AMC (Maintenance Contract)?
            </h2>

            <p className="text-slate-600 leading-relaxed mb-4">
              AMC is a yearly service contract that ensures your printers stay in perfect working condition
              with regular maintenance, repairs, and technical support.
            </p>

            <p className="text-slate-600 leading-relaxed">
              It helps businesses reduce downtime, control maintenance costs, and extend equipment life.
            </p>
          </div>

           <div className="relative h-[350px] w-full overflow-hidden rounded-2xl">
  <Image
    src="/images/services/amc.png"
    alt="Printer Service Technician"
    fill
    className="object-cover"
    priority
  />

          </div>

        </div>
      </div>

      {/* 🔷 FEATURES */}
      <div className="py-20 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-6 text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">
            AMC Features & Benefits
          </h2>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 text-slate-700">

          {[
            "Priority on-site support",
            "Preventive maintenance visits",
            "Fixed annual cost (no surprises)",
            "Genuine spare parts",
            "Fast response across UAE",
            "Expert certified technicians",
          ].map((item, i) => (
            <div key={i} className="bg-white p-4 border border-slate-200">
              ✔ {item}
            </div>
          ))}

        </div>
      </div>

      {/* 🔷 WHY CHOOSE US */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div className="relative h-[350px] overflow-hidden">
            <div className="relative w-full h-[400px]">
  <Image
    src="/images/services/amc.png"
    alt="AMC Technician"
    fill
    className="object-cover"
  />
</div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Why Choose Nexprint AMC?
            </h2>

            <ul className="space-y-3 text-slate-600">
              <li>✔ Fast response across all Emirates</li>
              <li>✔ Experienced printer technicians</li>
              <li>✔ Reduced downtime for your business</li>
              <li>✔ Cost-effective service contracts</li>
              <li>✔ Support for all major brands (HP, Canon, Epson)</li>
            </ul>
          </div>

        </div>
      </div>

      {/* 🔷 FAQ */}
      <div className="py-20 bg-[#f8f9fa]">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">

            <div className="bg-white p-5 border">
              <h3 className="font-bold">What is included in AMC?</h3>
              <p className="text-slate-600 mt-2">
                Maintenance, repairs, preventive checks, and technical support.
              </p>
            </div>

            <div className="bg-white p-5 border">
              <h3 className="font-bold">Do you support all printer brands?</h3>
              <p className="text-slate-600 mt-2">
                Yes, we support HP, Canon, Epson, Xerox and more.
              </p>
            </div>

            <div className="bg-white p-5 border">
              <h3 className="font-bold">How fast is your response time?</h3>
              <p className="text-slate-600 mt-2">
                We provide same-day or next-day support across UAE.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* 🔷 CTA */}
      <div className="py-20 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          Need Reliable Printer Maintenance?
        </h2>

        <p className="text-slate-600 mb-8">
          Get a customized AMC plan for your business today.
        </p>

        <div className="flex gap-4 justify-center">
          <a
            href="/contact"
            className="bg-[#e63946] text-white px-6 py-3 font-bold"
          >
            Get Quote
          </a>

          <a
            href="https://wa.me/"
            className="border border-slate-900 px-6 py-3 font-bold"
          >
            WhatsApp Us
          </a>
        </div>
      </div>

    </section>
  );
};

export default AMCServicePage;