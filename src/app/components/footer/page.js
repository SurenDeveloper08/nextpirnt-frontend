"use client";

import React from 'react';
import Link from 'next/link';
import { 
  Mail, Phone, MapPin, Facebook, Twitter, 
  Linkedin, Instagram, ArrowRight
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "Printer Sale", href: "/sales" },
      { name: "Rental", href: "/rental" },
      { name: "AMC (Maintenance)", href: "/amc" },
      { name: "Consumables", href: "/consumables" },
      { name: "Repair & Service", href: "/service" },
    ],
    products: [
      { name: "Photocopiers", href: "/products/photocopier" },
      { name: "Printers", href: "/products/printers" },
      { name: "Scanners", href: "/products/scanners" },
      { name: "Office Equipment", href: "/products/office-equipment" },
    ]
  };

  return (
    <footer className="bg-[#101828] text-white pt-20 pb-10 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#e63946]/5 rounded-full blur-[120px] -z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* COLUMN 1: Brand & Bio */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#e63946] rounded flex items-center justify-center text-white font-bold shadow-lg">N</div>
              <span className="text-xl font-black tracking-tighter">
                NEX<span className="text-[#e63946]">PRINT</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              UAE's trusted provider of printer sales, rentals, AMC services, consumables, and repair solutions.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <Link key={i} href="#" className="w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-[#e63946] transition-all duration-300 group">
                  <Icon size={18} className="text-gray-400 group-hover:text-white" />
                </Link>
              ))}
            </div>
          </div>

          {/* COLUMN 2: Services */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-[0.2em]">Services</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-[#e63946] text-sm font-semibold flex items-center gap-2 transition-colors group">
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: Products */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-[0.2em]">Products</h4>
            <ul className="space-y-4">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-[#e63946] text-sm font-semibold flex items-center gap-2 transition-colors group">
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: Contact Info */}
          <div className="space-y-6">
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-[0.2em]">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="mt-1 w-8 h-8 rounded-full bg-[#e63946]/10 flex items-center justify-center shrink-0">
                  <MapPin size={16} className="text-[#e63946]" />
                </div>
                <p className="text-gray-400 text-sm">
                  M-25, Beside Danube Home, Plot-20, Store-2, Mussafah, Abu Dhabi, UAE
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-[#e63946]/10 flex items-center justify-center shrink-0">
                  <Phone size={16} className="text-[#e63946]" />
                </div>
                <div className="text-sm">
                  <p className="text-gray-400">02 5524336</p>
                  <p className="text-white font-bold">+971 55 644 9916</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-[#e63946]/10 flex items-center justify-center shrink-0">
                  <Mail size={16} className="text-[#e63946]" />
                </div>
                <a href="mailto:sales@nexprint.ae" className="text-gray-400 hover:text-white text-sm transition-colors">
                  sales@nexprint.ae
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="pt-10 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-xs">
            © {currentYear} Nex Print Office Equipment LLC. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <Link href="#" className="text-gray-500 hover:text-white text-xs transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-gray-500 hover:text-white text-xs transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;