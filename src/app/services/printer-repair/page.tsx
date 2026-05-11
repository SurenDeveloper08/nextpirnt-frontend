"use client";

import React from "react";
import Image from "next/image";

const RepairServicePage = () => {
  return (
    <section className="bg-white">

      {/* 🔷 HERO (SEO + CTA) */}
      <div className="bg-[#f8f9fa] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900">
            Printer <span className="text-[#e63946]">Repair & Service</span> in UAE
          </h1>

          <p className="text-slate-600 mt-6 max-w-2xl text-lg">
            Fast and reliable printer repair services across Abu Dhabi and all Emirates.
            On-site support for HP, Canon, Epson, and more.
          </p>

          <a
            href="/contact"
            className="inline-block mt-8 bg-[#e63946] text-white px-6 py-3 font-bold"
          >
            Book Service Now
          </a>
        </div>
      </div>

      {/* 🔷 WHAT WE DO */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Professional Printer Repair Services
            </h2>

            <p className="text-slate-600 leading-relaxed mb-4">
              We diagnose and repair all types of printer issues including paper jams,
              printing errors, connectivity problems, and hardware failures.
            </p>

            <p className="text-slate-600 leading-relaxed">
              Our certified technicians ensure fast turnaround time to minimize your business downtime.
            </p>
          </div>

          <div className="relative h-[350px] overflow-hidden">
            <div className="relative h-[350px] w-full overflow-hidden rounded-2xl">
              <Image
                src="/images/services/service.png"
                alt="Printer Service Technician"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

        </div>
      </div>

      {/* 🔷 FEATURES */}
      <div className="py-20 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-6 text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">
            What We Fix & Service
          </h2>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 text-slate-700">

          {[
            "Paper jam & feeding issues",
            "Print quality problems",
            "Network & connectivity errors",
            "Hardware & mechanical faults",
            "Toner & cartridge issues",
            "Firmware & software errors",
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

            <Image
              src="/images/services/service.png"
              alt="AMC Technician"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Why Choose Nexprint Repair Service?
            </h2>

            <ul className="space-y-3 text-slate-600">
              <li>✔ Fast on-site technician support</li>
              <li>✔ Certified & experienced engineers</li>
              <li>✔ Genuine spare parts only</li>
              <li>✔ Support for all major brands</li>
              <li>✔ Quick turnaround time</li>
              <li>✔ UAE-wide coverage</li>
            </ul>
          </div>

        </div>
      </div>

      {/* 🔷 PROCESS SECTION */}
      <div className="py-20 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-6 text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">
            Our Repair Process
          </h2>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 text-center">

          <div className="bg-white p-6 border">
            <h3 className="font-bold mb-2">1. Diagnose</h3>
            <p className="text-slate-600 text-sm">
              We inspect and identify the exact issue.
            </p>
          </div>

          <div className="bg-white p-6 border">
            <h3 className="font-bold mb-2">2. Repair</h3>
            <p className="text-slate-600 text-sm">
              Our technicians fix the issue using genuine parts.
            </p>
          </div>

          <div className="bg-white p-6 border">
            <h3 className="font-bold mb-2">3. Test</h3>
            <p className="text-slate-600 text-sm">
              We test the printer to ensure perfect performance.
            </p>
          </div>

        </div>
      </div>

      {/* 🔷 FAQ */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">

            <div className="border p-5">
              <h3 className="font-bold">Do you provide on-site repair?</h3>
              <p className="text-slate-600 mt-2">
                Yes, we provide on-site printer repair across UAE.
              </p>
            </div>

            <div className="border p-5">
              <h3 className="font-bold">How fast is your response time?</h3>
              <p className="text-slate-600 mt-2">
                We offer same-day or next-day service depending on location.
              </p>
            </div>

            <div className="border p-5">
              <h3 className="font-bold">Do you support all printer brands?</h3>
              <p className="text-slate-600 mt-2">
                Yes, HP, Canon, Epson, Xerox and more.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* 🔷 CTA */}
      <div className="py-20 text-center bg-[#e63946] text-white">
        <h2 className="text-3xl font-bold mb-4">
          Need Fast Printer Repair?
        </h2>

        <p className="mb-8">
          Get expert technicians at your location anywhere in UAE.
        </p>

        <div className="flex gap-4 justify-center">
          <a
            href="/contact"
            className="bg-white text-[#e63946] px-6 py-3 font-bold"
          >
            Book Repair
          </a>

          <a
            href="https://wa.me/"
            className="border border-white px-6 py-3 font-bold"
          >
            WhatsApp Us
          </a>
        </div>
      </div>

    </section>
  );
};

export default RepairServicePage;