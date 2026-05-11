"use client";

import React from "react";
import Image from "next/image";
const PrinterRentalPage = () => {
  return (
    <section className="bg-white">

      {/* 🔷 HERO (SEO + CTA) */}
      <div className="bg-[#f8f9fa] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900">
            Printer <span className="text-[#e63946]">Rental</span> in UAE
          </h1>

          <p className="text-slate-600 mt-6 max-w-2xl text-lg">
            Flexible and cost-effective printer rental solutions for businesses across Abu Dhabi and all Emirates.
            No upfront investment, zero maintenance stress.
          </p>

          <a
            href="/contact"
            className="inline-block mt-8 bg-[#e63946] text-white px-6 py-3 font-bold"
          >
            Get Rental Quote
          </a>
        </div>
      </div>

      {/* 🔷 WHAT IS PRINTER RENTAL */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Flexible Printer Rental Solutions
            </h2>

            <p className="text-slate-600 leading-relaxed mb-4">
              Printer rental allows businesses to use high-quality office printers without purchasing them upfront.
              You only pay a fixed monthly fee.
            </p>

            <p className="text-slate-600 leading-relaxed">
              Ideal for startups, corporate offices, and companies that want cost control and flexibility.
            </p>
          </div>

          <div className="relative h-[350px] overflow-hidden">

            <div className="relative w-full h-[400px]">
              <Image
                src="/images/services/printer-rental.png"
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
            Printer Rental Benefits
          </h2>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 text-slate-700">

          {[
            "Zero upfront investment",
            "Monthly flexible plans",
            "Free maintenance & support",
            "Latest printer models",
            "Upgrade anytime option",
            "On-site installation included",
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
            <div className="relative h-[350px] w-full overflow-hidden rounded-2xl">
              <Image
                src="/images/services/printer-rental.png"
                alt="Printer Service Technician"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Why Choose Nexprint Rental?
            </h2>

            <ul className="space-y-3 text-slate-600">
              <li>✔ Cost-effective for businesses</li>
              <li>✔ Fast delivery & setup across UAE</li>
              <li>✔ No maintenance worries</li>
              <li>✔ High-performance machines</li>
              <li>✔ Flexible contract terms</li>
              <li>✔ Dedicated support team</li>
            </ul>
          </div>

        </div>
      </div>

      {/* 🔷 WHO IS IT FOR */}
      <div className="py-20 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-6 text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">
            Who Should Use Printer Rental?
          </h2>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 text-center">

          <div className="bg-white p-6 border">
            <h3 className="font-bold mb-2">Startups</h3>
            <p className="text-slate-600 text-sm">
              No heavy investment needed to start printing.
            </p>
          </div>

          <div className="bg-white p-6 border">
            <h3 className="font-bold mb-2">Corporate Offices</h3>
            <p className="text-slate-600 text-sm">
              Reliable printing without maintenance burden.
            </p>
          </div>

          <div className="bg-white p-6 border">
            <h3 className="font-bold mb-2">Event Companies</h3>
            <p className="text-slate-600 text-sm">
              Short-term printing needs covered easily.
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
              <h3 className="font-bold">Is maintenance included in rental?</h3>
              <p className="text-slate-600 mt-2">
                Yes, full maintenance and support are included in all rental plans.
              </p>
            </div>

            <div className="border p-5">
              <h3 className="font-bold">Can I upgrade the printer later?</h3>
              <p className="text-slate-600 mt-2">
                Yes, you can upgrade anytime based on your business needs.
              </p>
            </div>

            <div className="border p-5">
              <h3 className="font-bold">What is the minimum rental period?</h3>
              <p className="text-slate-600 mt-2">
                Flexible monthly and long-term contracts are available.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* 🔷 CTA */}
      <div className="py-20 text-center bg-[#e63946] text-white">
        <h2 className="text-3xl font-bold mb-4">
          Need Affordable Printer Rental?
        </h2>

        <p className="mb-8">
          Get flexible rental plans tailored for your business.
        </p>

        <div className="flex gap-4 justify-center">
          <a
            href="/contact"
            className="bg-white text-[#e63946] px-6 py-3 font-bold"
          >
            Get Quote
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

export default PrinterRentalPage;