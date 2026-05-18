"use client";

import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock3,
} from "lucide-react";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section
      className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white"
      id="contact"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-red-100 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-80"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center px-5 py-2 rounded-full bg-red-50 border border-red-100 text-[#e63946] text-sm font-semibold mb-6">
              Contact Us
            </span>

            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
              Let’s Discuss Your{" "}
              <span className="text-[#e63946]">
                Printing Needs
              </span>
            </h2>

            <p className="text-slate-500 leading-relaxed text-base md:text-lg mb-10 max-w-xl">
              Need printer rental, AMC support, consumables, or urgent repair
              services? Our team is ready to provide fast and reliable business
              solutions across Abu Dhabi and UAE.
            </p>

            {/* Contact Cards */}
            <div className="space-y-5">
              {[
                {
                  icon: Phone,
                  title: "Call Us",
                  value: "+971 50 123 4567",
                },
                {
                  icon: Mail,
                  title: "Email Support",
                  value: "support@nexprint.ae",
                },
                {
                  icon: MapPin,
                  title: "Office Location",
                  value: "Abu Dhabi, United Arab Emirates",
                },
                {
                  icon: Clock3,
                  title: "Working Hours",
                  value: "Mon - Sat : 8:00 AM - 8:00 PM",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    viewport={{ once: true }}
                    className="group flex items-start gap-5 p-5 rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:border-[#e63946]/20 transition-all duration-500"
                  >
                    <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-red-50 border border-red-100 group-hover:bg-[#e63946] transition-all duration-500">
                      <Icon
                        size={24}
                        className="text-[#e63946] group-hover:text-white transition duration-500"
                      />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-slate-400 mb-1">
                        {item.title}
                      </p>

                      <h3 className="text-lg font-bold text-slate-900">
                        {item.value}
                      </h3>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Side Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-xl p-8 md:p-10"
          >
            {/* Top Gradient */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#e63946] via-red-400 to-pink-400"></div>

            {/* Glow */}
            <div className="absolute -top-20 -right-20 w-52 h-52 bg-red-100 rounded-full blur-3xl opacity-60"></div>

            <div className="relative z-10">
              <h3 className="text-3xl font-black text-slate-900 mb-3">
                Request a Quote
              </h3>

              <p className="text-slate-500 mb-8">
                Fill out the form below and our team will contact you shortly.
              </p>

              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full h-14 rounded-2xl border border-slate-200 bg-slate-50 px-5 outline-none focus:border-[#e63946] focus:bg-white transition-all"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="john@company.com"
                    className="w-full h-14 rounded-2xl border border-slate-200 bg-slate-50 px-5 outline-none focus:border-[#e63946] focus:bg-white transition-all"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">
                    Phone Number
                  </label>

                  <input
                    type="text"
                    placeholder="+971 50 000 0000"
                    className="w-full h-14 rounded-2xl border border-slate-200 bg-slate-50 px-5 outline-none focus:border-[#e63946] focus:bg-white transition-all"
                  />
                </div>

                {/* Service */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">
                    Service Required
                  </label>

                  <select className="w-full h-14 rounded-2xl border border-slate-200 bg-slate-50 px-5 outline-none focus:border-[#e63946] focus:bg-white transition-all">
                    <option>Printer AMC</option>
                    <option>Printer Rental</option>
                    <option>Printer Repair</option>
                    <option>Consumables Supply</option>
                  </select>
                </div>

                {/* Message */}
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-semibold text-slate-700">
                    Message
                  </label>

                  <textarea
                    rows={5}
                    placeholder="Tell us about your requirement..."
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 p-5 outline-none focus:border-[#e63946] focus:bg-white transition-all resize-none"
                  ></textarea>
                </div>

                {/* Button */}
                <div className="md:col-span-2">
                  <button className="group inline-flex items-center justify-center gap-3 h-14 px-8 rounded-2xl bg-[#e63946] hover:bg-slate-900 text-white font-bold transition-all duration-300">
                    Send Message

                    <Send
                      size={18}
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;