"use client";

import React from "react";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Youtube,
  ChevronRight,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

import {
  FaXTwitter,
  FaPinterestP,
} from "react-icons/fa6";


interface SubmenuItem {
  name: string;
  href: string;
}

interface NavItem {
  name: string;
  href: string;
  submenu?: SubmenuItem[];
}

interface FooterProps {
  navLinks: NavItem[];
}
// import {
//   Phone,
//   Mail,
//   MapPin,
//   Facebook,
//   Instagram,
//   Linkedin,
//   ChevronRight,
// } from "lucide-react";



export default function Footer({ navLinks }: FooterProps) {
  const productMenus = navLinks
    ?.filter((item) => item.href.startsWith("/products"))
    ?.slice(0, 4);
  const servicesMenu = navLinks.find(
    (item) => item.name === "Services"
  );
  return (
    <footer className="relative overflow-hidden bg-white border-t border-slate-200">
      {/* Glow */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-red-100 blur-3xl rounded-full opacity-60"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-slate-100 blur-3xl rounded-full opacity-80"></div>

      {/* Main Footer */}
      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Company */}
          <div>
            <img
              src="/logo.jpeg"
              alt="Logo"
              className="h-14 w-auto object-contain mb-6"
            />

            <p className="text-slate-500 leading-relaxed text-sm mb-6">
              Professional printer sales, rental, AMC support,
              consumables, and repair solutions for businesses
              across Abu Dhabi and UAE.
            </p>

            {/* Social */}
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com/nexprintuae"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center hover:bg-[#e63946] hover:border-[#e63946] hover:text-white transition-all"
              >
                <Facebook size={18} />
              </a>

              <a
                href="https://www.instagram.com/nexprintuae/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center hover:bg-[#e63946] hover:border-[#e63946] hover:text-white transition-all"
              >
                <Instagram size={18} />
              </a>

              <a
                href="https://x.com/nexprintuae"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center hover:bg-[#e63946] hover:border-[#e63946] hover:text-white transition-all"
              >
                <FaXTwitter size={16} />
              </a>

              <a
                href="https://www.youtube.com/@nexprintuae"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center hover:bg-[#e63946] hover:border-[#e63946] hover:text-white transition-all"
              >
                <Youtube size={18} />
              </a>

              <a
                href="https://www.pinterest.com/nexprintuae/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinterest"
                className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center hover:bg-[#e63946] hover:border-[#e63946] hover:text-white transition-all"
              >
                <FaPinterestP size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-6">
              Products
            </h3>

            <ul className="space-y-4">
              {productMenus?.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-2 text-slate-600 hover:text-[#e63946] transition-colors"
                  >
                    <ChevronRight
                      size={16}
                      className="text-[#e63946] group-hover:translate-x-1 transition-transform"
                    />

                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-6">
              Services
            </h3>
            <ul className="space-y-4">
              {servicesMenu?.submenu?.map(
                (item: SubmenuItem, index: number) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="group flex items-center gap-2 text-slate-600 hover:text-[#e63946] transition-colors"
                    >
                      <ChevronRight
                        size={16}
                        className="text-[#e63946] group-hover:translate-x-1 transition-transform"
                      />

                      {item.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-6">
              Contact Info
            </h3>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center">
                  <Phone
                    size={18}
                    className="text-[#e63946]"
                  />
                </div>

                <div>
                  <p className="text-slate-400 text-sm mb-1">
                    Call Us
                  </p>

                  <a
                    href="tel:+971527761348"
                    className="font-semibold text-slate-900 hover:text-[#e63946]"
                  >
                    +971 52 776 1348
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center">
                  <Mail
                    size={18}
                    className="text-[#e63946]"
                  />
                </div>

                <div>
                  <p className="text-slate-400 text-sm mb-1">
                    Email
                  </p>

                  <a
                    href="mailto:nexprintuae@gmail.com"
                    className="font-semibold text-slate-900 hover:text-[#e63946]"
                  >
                    nexprintuae@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center">
                  <MapPin
                    size={18}
                    className="text-[#e63946]"
                  />
                </div>

                <div>
                  <p className="text-slate-400 text-sm mb-1">
                    Location
                  </p>

                  <h4 className="font-semibold text-slate-900 leading-relaxed">
                    Musaffah, Abu Dhabi, UAE
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-200 mt-14 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm text-center md:text-left">
            © 2026 NexPrint. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm text-slate-500">
            {/* <Link
              href="/privacy-policy"
              className="hover:text-[#e63946] transition-colors"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="hover:text-[#e63946] transition-colors"
            >
              Terms & Conditions
            </Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
}