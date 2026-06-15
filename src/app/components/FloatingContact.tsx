"use client";

import { useState } from "react";

export default function FloatingContactWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* FLOATING BUTTONS */}
      <div className="fixed right-4 bottom-5 z-50 flex flex-col gap-3">

        {/* ================= WHATSAPP ================= */}
        <a
          href="https://wa.me/971526515283?text=Hello%20Nexprint%20Office%20Equipments%20LLC,%20I%20would%20like%20to%20get%20a%20quote."
          target="_blank"
          className="group relative flex items-center justify-end"
        >
          {/* Tooltip */}
          <div className="absolute right-16 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-x-3 group-hover:translate-x-0 transition-all duration-300">
            <div className="bg-white shadow-2xl rounded-xl px-4 py-2 border border-slate-100">
              <p className="text-sm font-semibold text-slate-900">WhatsApp Support</p>
              <p className="text-xs text-slate-500">Instant Reply</p>
            </div>
          </div>

          {/* Button */}
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1 group-hover:rotate-6">

            {/* Glow */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] blur-xl opacity-30 group-hover:opacity-60 transition" />

            {/* WhatsApp SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-6 h-6 sm:w-7 sm:h-7 relative z-10"
            >
              <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592z" />
            </svg>
          </div>
        </a>

        {/* ================= CALL ================= */}
        <a
          href="tel:+971527761348"
          className="group relative flex items-center justify-end"
        >
          {/* Tooltip */}
          <div className="absolute right-16 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-x-3 group-hover:translate-x-0 transition-all duration-300">
            <div className="bg-white shadow-2xl rounded-xl px-4 py-2 border border-slate-100">
              <p className="text-sm font-semibold text-slate-900">Call Now</p>
              <p className="text-xs text-slate-500">24/7 Support</p>
            </div>
          </div>

          {/* Button */}
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1 group-hover:rotate-6">

            {/* Phone SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-[22px] h-[22px]"
            >
              <path d="M6.6 10.8c1.4 2.7 3.9 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.3 21 3 13.7 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8z" />
            </svg>
          </div>
        </a>

        {/* ================= CONTACT PAGE ================= */}
        <a
          href="/contact"
          className="group relative flex items-center justify-end"
        >
          {/* Tooltip */}
          <div className="absolute right-16 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-x-3 group-hover:translate-x-0 transition-all duration-300">
            <div className="bg-white shadow-2xl rounded-xl px-4 py-2 border border-slate-100">
              <p className="text-sm font-semibold text-slate-900">Contact Us</p>
              <p className="text-xs text-slate-500">Get a Quote</p>
            </div>
          </div>

          {/* Button */}
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#e63946] flex items-center justify-center text-white shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1 group-hover:rotate-6">

            {/* Message SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-[22px] h-[22px]"
            >
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
            </svg>
          </div>
        </a>
      </div>
    </>
  );
}