"use client";

import React from 'react';
import { Phone, Mail, MapPin, Linkedin, Instagram, Facebook, ArrowRight, Globe } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    solutions: [
      { name: 'Printer AMC Abu Dhabi', href: '#' },
      { name: 'Photocopier Rental UAE', href: '#' },
      { name: 'Enterprise MFP Sales', href: '#' },
      { name: 'Original OEM Toners', href: '#' },
      { name: 'Managed Print Services', href: '#' },
    ],
    company: [
      { name: 'About Nexprint', href: '#' },
      { name: 'Request a Quote', href: '#' },
      { name: 'Service Support', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
    ]
  };

  return (
    <footer className="bg-slate-950 text-white pt-20 pb-8 border-t-4 border-[#e63946]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & UAE Identity */}
          <div className="space-y-6">
            <h2 className="text-3xl font-black italic tracking-tighter uppercase">
              NEX<span className="text-[#e63946]">PRINT</span>
            </h2>
            <p className="text-slate-400 text-[11px] font-bold uppercase tracking-[0.15em] leading-relaxed">
              Abu Dhabi's premier partner for office automation. Delivering high-performance printer rentals, sales, and specialized AMC services across the UAE.
            </p>
            <div className="flex gap-3">
              {[Linkedin, Instagram, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 border border-slate-800 flex items-center justify-center hover:bg-[#e63946] hover:border-[#e63946] transition-all group">
                  <Icon size={18} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: SEO-Optimized Solutions */}
          <div>
            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#e63946] mb-8">Solutions</h3>
            <ul className="space-y-4">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-400 hover:text-white text-[11px] font-bold uppercase tracking-widest flex items-center gap-2 group transition-colors">
                    <ArrowRight size={12} className="text-[#e63946] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Corporate Navigation */}
          <div>
            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#e63946] mb-8">Navigation</h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-400 hover:text-white text-[11px] font-bold uppercase tracking-widest transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Local Abu Dhabi Contact */}
          <div>
            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#e63946] mb-8">Connect</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <Phone size={18} className="text-[#e63946] shrink-0" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-slate-300">+971 2 XXX XXXX</span>
              </li>
              <li className="flex items-start gap-4">
                <Mail size={18} className="text-[#e63946] shrink-0" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-slate-300">sales@nexprint.ae</span>
              </li>
              <li className="flex items-start gap-4">
                <MapPin size={18} className="text-[#e63946] shrink-0" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-slate-300 leading-relaxed">
                  Mussafah Industrial Area,<br />Abu Dhabi, UAE
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: SEO Keywords & Legal */}
        <div className="pt-8 border-t border-slate-900 flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4">
             <div className="flex items-center gap-2 px-3 py-1 bg-slate-900 border border-slate-800">
               <Globe size={12} className="text-[#e63946]" />
               <span className="text-[9px] font-black uppercase tracking-[0.2em]">UAE Wide Support</span>
             </div>
             <p className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-600 text-center">
              © {currentYear} NEXPRINT SOLUTIONS. ALL RIGHTS RESERVED.
            </p>
          </div>
          
          <div className="hidden lg:flex gap-6">
            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-700 italic">Precision</span>
            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-700 italic">Reliability</span>
            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-700 italic">Speed</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;