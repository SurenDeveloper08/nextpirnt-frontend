"use client";

import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-24 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left Side: Contact Information */}
          <div className="lg:w-1/3 space-y-8">
            <div>
              <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter italic">
                Get in <span className="text-[#e63946]">Touch</span>
              </h2>
              <div className="w-16 h-1.5 bg-[#e63946] mt-4"></div>
              <p className="mt-6 text-slate-500 font-medium leading-relaxed">
                Have a printer emergency or need an AMC quote? Our team is ready to assist you within hours.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="bg-[#f8f9fa] p-4 border border-slate-100 group-hover:border-[#e63946] transition-colors">
                  <Phone size={20} className="text-[#e63946]" />
                </div>
                <div>
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Call Us</p>
                  <p className="text-lg font-bold text-slate-900">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="bg-[#f8f9fa] p-4 border border-slate-100 group-hover:border-[#e63946] transition-colors">
                  <Mail size={20} className="text-[#e63946]" />
                </div>
                <div>
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Email Support</p>
                  <p className="text-lg font-bold text-slate-900">support@nexprint.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="bg-[#f8f9fa] p-4 border border-slate-100 group-hover:border-[#e63946] transition-colors">
                  <MapPin size={20} className="text-[#e63946]" />
                </div>
                <div>
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Office Location</p>
                  <p className="text-lg font-bold text-slate-900 text-balance">Business Hub, Sector 62, Noida, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="lg:w-2/3 bg-[#f8f9fa] p-8 md:p-12 border border-slate-100 shadow-sm relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#e63946]/5" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}></div>
            
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-700">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-white border border-slate-200 p-4 outline-none focus:border-[#e63946] transition-all font-medium text-sm"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-700">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@company.com"
                  className="w-full bg-white border border-slate-200 p-4 outline-none focus:border-[#e63946] transition-all font-medium text-sm"
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-700">Service Required</label>
                <select className="w-full bg-white border border-slate-200 p-4 outline-none focus:border-[#e63946] transition-all font-medium text-sm appearance-none">
                  <option>Printer AMC Inquiry</option>
                  <option>Machine Rental</option>
                  <option>Urgent Repair Service</option>
                  <option>Consumables Order</option>
                </select>
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-700">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your printer issues..."
                  className="w-full bg-white border border-slate-200 p-4 outline-none focus:border-[#e63946] transition-all font-medium text-sm"
                ></textarea>
              </div>

              <div className="md:col-span-2">
                <button className="bg-[#e63946] hover:bg-slate-900 text-white font-black uppercase tracking-[0.2em] py-4 px-10 transition-all duration-300 flex items-center justify-center gap-3 w-full md:w-auto">
                  Send Message
                  <Send size={18} />
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;