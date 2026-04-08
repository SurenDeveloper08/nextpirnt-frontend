"use client";

import React from 'react';
import { MapPin, Phone, Mail, Printer, ShieldCheck, PenTool, Droplets } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & TRN */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col">
              <span className="text-2xl font-black uppercase tracking-tighter text-slate-900">
                NEX<span style={{ color: '#e63946' }}>PRINT</span>
              </span>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">
                Industrial Printing Solutions
              </p>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed font-medium">
              UAE&apos;s leading provider of managed print services, specialized in high-volume MFP rentals and maintenance.
            </p>
            {/* <div className="bg-white border border-slate-200 p-4 inline-block">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">VAT TRN NUMBER</p>
              <p className="text-sm font-bold text-slate-900">100XXXXXXXXXXXX</p>
            </div> */}
          </div>

          {/* Services - SEO Linked */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-900 mb-6 border-l-4 pl-3" style={{ borderColor: '#e63946' }}>
              Solutions
            </h4>
            <ul className="space-y-4 text-sm font-bold text-slate-500 uppercase tracking-tight">
              <li className="flex items-center gap-2 hover:text-[#e63946] transition-colors cursor-pointer">
                <Printer className="w-4 h-4" /> Printer Sale & Rental
              </li>
              <li className="flex items-center gap-2 hover:text-[#e63946] transition-colors cursor-pointer">
                <ShieldCheck className="w-4 h-4" /> Annual Maintenance (AMC)
              </li>
              <li className="flex items-center gap-2 hover:text-[#e63946] transition-colors cursor-pointer">
                <Droplets className="w-4 h-4" /> Toner & Consumables
              </li>
              <li className="flex items-center gap-2 hover:text-[#e63946] transition-colors cursor-pointer">
                <PenTool className="w-4 h-4" /> Repair & On-Site Service
              </li>
            </ul>
          </div>

          {/* Brand SEO Links */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-900 mb-6 border-l-4 pl-3" style={{ borderColor: '#e63946' }}>
              Support Hub
            </h4>
            <ul className="space-y-3 text-sm font-medium text-slate-500">
              <li className="hover:text-[#e63946] transition-colors cursor-pointer">Canon Printer Repair Dubai</li>
              <li className="hover:text-[#e63946] transition-colors cursor-pointer">Ricoh MFP Service Abu Dhabi</li>
              <li className="hover:text-[#e63946] transition-colors cursor-pointer">Konica Minolta Support UAE</li>
              <li className="hover:text-[#e63946] transition-colors cursor-pointer">Plotter Maintenance Sharjah</li>
              <li className="hover:text-[#e63946] transition-colors cursor-pointer">Kyocera Service Center</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-900 mb-6 border-l-4 pl-3" style={{ borderColor: '#e63946' }}>
              Locations
            </h4>
            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="w-5 h-5 shrink-0" style={{ color: '#e63946' }} />
                <p className="text-sm text-slate-500 leading-relaxed">
                  <strong>Abu Dhabi:</strong> Mussafah Industrial Area, M-14, Building 45
                </p>
              </div>
              <div className="flex gap-4">
                <Phone className="w-5 h-5 shrink-0" style={{ color: '#e63946' }} />
                <p className="text-sm font-bold text-slate-900">+971 2 XXX XXXX</p>
              </div>
              <div className="flex gap-4">
                <Mail className="w-5 h-5 shrink-0" style={{ color: '#e63946' }} />
                <p className="text-sm font-bold text-slate-900">support@nexprint.ae</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            © {currentYear} Nexprint Solutions UAE. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            <span className="hover:text-[#e63946] cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-[#e63946] cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}