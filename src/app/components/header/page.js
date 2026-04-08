"use client"; 
import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Search, 
  ShoppingCart, 
  User, 
  Menu, 
  X, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Linkedin,
  ChevronDown
} from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Printer Sale', href: '/sales' },
    { name: 'Rental', href: '/rental' },
    { name: 'AMC (Maintenance)', href: '/amc' },
    { name: 'Consumables', href: '/consumables' },
    { name: 'Repair & Service', href: '/service' },
  ];

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      {/* 1. TOP BAR - Contact & Socials */}
      <div className="bg-[#e63946] text-white py-2 px-4 md:px-12 hidden md:flex justify-between items-center text-sm">
        <div className="flex items-center gap-6">
          <a href="tel:+971XXXXXXXXX" className="flex items-center gap-2 hover:text-[#e63946] transition-colors">
            <Phone size={14} /> +971 X XXX XXXX
          </a>
          <a href="mailto:info@nexprint.ae" className="flex items-center gap-2 hover:text-[#e63946] transition-colors">
            <Mail size={14} /> info@nexprint.ae
          </a>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-slate-400">Follow us:</span>
          <div className="flex gap-3">
            <Facebook size={16} className="cursor-pointer hover:text-[#e63946]" />
            <Instagram size={16} className="cursor-pointer hover:text-[#e63946]" />
            <Linkedin size={16} className="cursor-pointer hover:text-[#e63946]" />
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION */}
      <nav className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex flex-col">
          <span className="text-2xl font-black tracking-tighter text-slate-900 leading-none">
            NEX<span className="text-[#e63946]">PRINT</span>
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500">Office Equipment</span>
        </Link>

        {/* DESKTOP NAV LINKS */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-sm font-bold text-slate-700 hover:text-[#e63946] transition-colors uppercase tracking-wide"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* ACTION ICONS */}
        <div className="flex items-center gap-3 md:gap-6">
          <div className="hidden sm:flex items-center bg-slate-100 rounded-full px-3 py-1.5">
            <input 
              type="text" 
              placeholder="Search..." 
              className="bg-transparent border-none focus:outline-none text-xs w-24 lg:w-40"
            />
            <Search size={16} className="text-slate-500" />
          </div>
          
          <div className="flex items-center gap-4">
            <Link href="/login" className="hover:text-[#e63946] text-slate-700 flex items-center gap-1">
              <User size={20} />
              <span className="hidden md:inline text-xs font-bold">Login</span>
            </Link>
            <Link href="/cart" className="relative hover:text-[#e63946] text-slate-700">
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 bg-[#e63946] text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">0</span>
            </Link>
            {/* MOBILE MENU TOGGLE */}
            <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* 3. MOBILE MENU */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 absolute w-full left-0 shadow-xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-bold text-slate-800 border-b border-slate-50 pb-2"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-4">
              <a href="tel:+971XXXXXXXXX" className="flex items-center gap-3 font-bold text-[#e63946]">
                <Phone size={20} /> Call Now
              </a>
              <div className="flex gap-6 pt-2">
                <Facebook size={24} />
                <Instagram size={24} />
                <Linkedin size={24} />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;