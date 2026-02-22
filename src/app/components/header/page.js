"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { 
  Mail, Phone, Facebook, Linkedin, Search, 
  ShoppingCart, ChevronDown, Menu, X, ArrowRight 
} from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeMobileSub, setActiveMobileSub] = useState(null);
  const searchInputRef = useRef(null);

  // Content Data
  const printerSaleSub = ["Multifunction Printers", "Production Machines", "A3/A4 Photocopiers", "Plotters & Wide Format", "Refurbished Units"];
  const partsSubMenu = ["Toner Cartridges", "Drum Units", "Maintenance Kits", "Fuser Assemblies", "Spare Parts"];
  const brands = ["Canon", "HP", "Epson", "Brother", "Konica Minolta", "Kyocera"];

  useEffect(() => {
    const handleScroll = () => {
      if (isSearchOpen || isMobileMenuOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'unset';
      }
    };
    handleScroll();
  }, [isSearchOpen, isMobileMenuOpen]);

  const toggleSub = (name) => {
    setActiveMobileSub(activeMobileSub === name ? null : name);
  };

  return (
    <header className="w-full z-[100] font-sans tracking-tight">
      {/* ROW 1: Contact Info */}
      <div className="bg-gradient-to-r from-[#e63946] to-[#d62839] text-white py-2.5 px-6 md:px-12 flex justify-between items-center text-[12px] font-semibold relative z-50">
        <div className="flex items-center gap-6">
          <a href="mailto:sales@nexprint.ae" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Mail size={14} /> <span className="hidden sm:inline">sales@nexprint.ae</span>
          </a>
          <div className="flex items-center gap-2 border-l border-white/30 pl-6">
            <Phone size={14} /> <span className="hidden sm:inline">+971 55 644 9916</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Facebook size={14} className="cursor-pointer hover:scale-110 transition-all" />
          <Linkedin size={14} className="cursor-pointer hover:scale-110 transition-all" />
        </div>
      </div>

      {/* ROW 2: Main Navigation */}
      <nav className="bg-white sticky top-0 border-b border-gray-100 shadow-sm z-40">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-9 h-9 bg-[#e63946] rounded flex items-center justify-center text-white font-bold text-xl shadow-lg">N</div>
            <span className="text-2xl font-black text-[#101828] tracking-tighter uppercase">
              NEX<span className="text-[#e63946]">PRINT</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8 text-[13px] font-extrabold text-[#475467]">
            <Link href="/" className="hover:text-[#e63946] transition-colors">HOME</Link>
            
            {/* Printers Dropdown */}
            <div className="relative group h-20 flex items-center">
              <button className="flex items-center gap-1 group-hover:text-[#e63946] transition-colors uppercase">
                Printers <ChevronDown size={14} strokeWidth={3} />
              </button>
              <div className="absolute top-[80px] left-0 hidden group-hover:block bg-white shadow-2xl border border-gray-100 rounded-b-xl w-60 py-4 z-50 animate-in fade-in slide-in-from-top-1">
                {printerSaleSub.map(item => (
                  <Link key={item} href="#" className="block px-6 py-2.5 hover:bg-gray-50 hover:text-[#e63946] border-l-2 border-transparent hover:border-[#e63946] transition-all">{item}</Link>
                ))}
              </div>
            </div>

            {/* Spare Parts Dropdown */}
            <div className="relative group h-20 flex items-center">
              <button className="flex items-center gap-1 group-hover:text-[#e63946] transition-colors uppercase">
                Spare Parts <ChevronDown size={14} strokeWidth={3} />
              </button>
              <div className="absolute top-[80px] left-0 hidden group-hover:block bg-white shadow-2xl border border-gray-100 rounded-b-xl w-60 py-4 z-50 animate-in fade-in slide-in-from-top-1">
                {partsSubMenu.map(item => (
                  <Link key={item} href="#" className="block px-6 py-2.5 hover:bg-gray-50 hover:text-[#e63946] border-l-2 border-transparent hover:border-[#e63946] transition-all">{item}</Link>
                ))}
              </div>
            </div>

            <Link href="/rental" className="hover:text-[#e63946] transition-colors">RENTALS</Link>
          </div>

          {/* Action Icons */}
          <div className="flex items-center gap-2 md:gap-4">
            <button onClick={() => setIsSearchOpen(true)} className="p-2.5 text-[#101828] hover:bg-gray-50 rounded-full transition-all group">
              <Search size={22} strokeWidth={2.5} className="group-hover:text-[#e63946]" />
            </button>

            <Link href="/cart" className="relative p-2.5 text-[#101828] hover:bg-gray-50 rounded-full transition-all group">
              <ShoppingCart size={22} strokeWidth={2.5} className="group-hover:text-[#e63946]" />
              <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#e63946] text-white text-[10px] font-bold border-2 border-white">0</span>
            </Link>
            
            <button className="lg:hidden p-2 text-[#101828]" onClick={() => setIsMobileMenuOpen(true)}>
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* --- SEARCH OVERLAY --- */}
      <div className={`fixed inset-0 z-[150] transition-all duration-300 ${isSearchOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}>
        <div className="absolute inset-0 bg-[#101828]/95 backdrop-blur-md" onClick={() => setIsSearchOpen(false)} />
        <div className="relative max-w-4xl mx-auto pt-20 px-6">
          <div className="flex items-center border-b-2 border-white/20 pb-4">
            <Search size={30} className="text-[#e63946] mr-4" />
            <input ref={searchInputRef} type="text" placeholder="Search brands or machine models..." className="bg-transparent w-full text-2xl md:text-4xl text-white font-bold outline-none" />
            <X size={32} className="text-white cursor-pointer" onClick={() => setIsSearchOpen(false)} />
          </div>
        </div>
      </div>

      {/* --- MOBILE DRAWER --- */}
      <div className={`fixed inset-0 z-[160] lg:hidden transition-all duration-300 ${isMobileMenuOpen ? 'visible' : 'invisible'}`}>
        <div className={`absolute inset-0 bg-black/60 transition-opacity ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setIsMobileMenuOpen(false)} />
        <div className={`absolute right-0 top-0 h-full w-[85%] bg-white transition-transform duration-500 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex justify-between items-center p-6 border-b">
            <span className="font-black text-[#101828] tracking-widest uppercase text-sm">Navigation Menu</span>
            <X size={24} onClick={() => setIsMobileMenuOpen(false)} />
          </div>
          <div className="p-6 space-y-4 overflow-y-auto h-full pb-32">
            <Link href="/" className="block p-4 bg-gray-50 rounded-xl font-bold uppercase text-sm tracking-tight">Home</Link>
            
            {/* Mobile Printers */}
            <div>
              <button onClick={() => toggleSub('printers')} className="w-full flex justify-between p-4 bg-gray-50 rounded-xl font-bold uppercase text-sm tracking-tight">
                Printers <ChevronDown className={`transition-transform ${activeMobileSub === 'printers' ? 'rotate-180 text-[#e63946]' : ''}`} />
              </button>
              {activeMobileSub === 'printers' && (
                <div className="pl-4 mt-2 border-l-2 border-[#e63946]/20 space-y-2">
                  {printerSaleSub.map(s => <Link key={s} href="#" className="block py-2 text-gray-600 font-semibold text-sm tracking-tight">• {s}</Link>)}
                </div>
              )}
            </div>

            {/* Mobile Spare Parts */}
            <div>
              <button onClick={() => toggleSub('parts')} className="w-full flex justify-between p-4 bg-gray-50 rounded-xl font-bold uppercase text-sm tracking-tight">
                Spare Parts <ChevronDown className={`transition-transform ${activeMobileSub === 'parts' ? 'rotate-180 text-[#e63946]' : ''}`} />
              </button>
              {activeMobileSub === 'parts' && (
                <div className="pl-4 mt-2 border-l-2 border-[#e63946]/20 space-y-2">
                  {partsSubMenu.map(s => <Link key={s} href="#" className="block py-2 text-gray-600 font-semibold text-sm tracking-tight">• {s}</Link>)}
                </div>
              )}
            </div>

            <Link href="/rental" className="block p-4 bg-gray-50 rounded-xl font-bold uppercase text-sm tracking-tight">Rentals</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;