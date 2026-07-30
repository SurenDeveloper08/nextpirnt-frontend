"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";
import Link from "next/link";
import {
  FaWhatsapp,
  FaPhoneAlt,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

export default function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Dock */}
      <div className="fixed right-4 bottom-6 z-50 flex flex-col gap-3">

        {/* WhatsApp */}
        <motion.a
          href="https://wa.me/971555328978?text=Hello%20NexPrint,%20I%20would%20like%20to%20know%20more%20about%20your%20products%20and%20services."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          whileHover={{ x: -8, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group flex items-center justify-end"
        >
          {/* Label */}
          <span className="mr-3 whitespace-nowrap rounded-full border border-green-100 bg-white/95 px-4 py-2 text-sm font-semibold text-slate-700 shadow-xl backdrop-blur-xl opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
            WhatsApp
          </span>

          {/* Button */}
          <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">

            {/* Pulse */}
            <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-20"></span>

            <FaWhatsapp className="relative text-[30px]" />
          </div>
        </motion.a>

        <motion.a
          href="tel:+971 55 532 8978"
          aria-label="Call NexPrint"
          whileHover={{ x: -8, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group flex items-center justify-end"
        >
          <span className="mr-3 whitespace-nowrap rounded-full border border-blue-100 bg-white/95 px-4 py-2 text-sm font-semibold text-slate-700 shadow-xl backdrop-blur-xl opacity-0 transition-all duration-300 group-hover:opacity-100">
            Call Us
          </span>

          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#2563eb] text-white shadow-2xl transition-all duration-300 group-hover:-rotate-6 group-hover:scale-110">
            <FaPhoneAlt className="text-[22px]" />
          </div>
        </motion.a>

        {/* Contact */}
        <Link
          href="/contact"
          className="group flex items-center justify-end"
        >
          <span className="mr-3 whitespace-nowrap rounded-full border border-red-100 bg-white/95 px-4 py-2 text-sm font-semibold text-slate-700 shadow-xl backdrop-blur-xl opacity-0 transition-all duration-300 group-hover:opacity-100">
            Contact Us
          </span>

          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#e63946] text-white shadow-2xl transition-all duration-300 group-hover:scale-110">
            <MdEmail className="text-[26px]" />
          </div>
        </Link>
      </div>


    </>
  );
}