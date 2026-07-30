"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  ChevronDown,
  Search,
  ShoppingCart,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

const servicesMenu = [
  // { name: "Printer Sales", href: "/services/printer-sales" },
  { name: "Printer Rental", href: "/services/printer-rental" },
  { name: "AMC Maintenance", href: "/services/amc-maintenance" },
  { name: "Printer Repair", href: "/services/printer-repair" },
  // { name: "Consumables", href: "/services/consumables" },
  // { name: "Office Stationery", href: "/services/stationery" },
];

const printersMenu = [
  { name: "All Printers", href: "/printers" },
  { name: "Multifunction Printers", href: "/printers/mfp" },
  { name: "Laser Printers", href: "/printers/laser" },
  { name: "Ink Tank Printers", href: "/printers/ink-tank" },
  { name: "Color Printers", href: "/printers/color" },
  { name: "Scanners", href: "/printers/scanners" },
  { name: "Photocopiers", href: "/printers/photocopiers" },
];

const consumablesMenu = [
  { name: "Toners", href: "/consumables/toners" },
  { name: "Inks", href: "/consumables/inks" },
  { name: "Drums", href: "/consumables/drums" },
  { name: "Fusers", href: "/consumables/fusers" },
  { name: "Transfer Belts", href: "/consumables/transfer-belts" },
  { name: "Waste Toner Boxes", href: "/consumables/waste-boxes" },
];
const officeEquipmentMenu = [
  { name: "Projectors", href: "/office-equipment/projectors" },
  { name: "Shredders", href: "/office-equipment/shredders" },
  { name: "Laminators", href: "/office-equipment/laminators" },
  { name: "Binding Machines", href: "/office-equipment/binding-machines" },
  { name: "Attendance Machines", href: "/office-equipment/attendance-machines" },
  { name: "POS Systems", href: "/office-equipment/pos-systems" },
  { name: "Paper Cutters", href: "/office-equipment/paper-cutters" },
];

const navLinks = [
  { name: "Home", href: "/" },

  {
    name: "Printers",
    href: "/products/printers",
    submenu: printersMenu,
  },

  {
    name: "Consumables",
    href: "/products/consumables",
    submenu: consumablesMenu,
  },
  {
  name: "Office Equipment",
  href: "/products/office-equipment",
  submenu: officeEquipmentMenu,
},
  {
    name: "Services",
    href: "/services",
    submenu: servicesMenu,
  },

  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
 const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  // SEARCH
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const allSearchItems = [
    ...servicesMenu,
    ...printersMenu,
    ...consumablesMenu,
    { name: "Rental Printers", href: "/rental-printers" },
    { name: "About Us", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const filteredResults = allSearchItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <header className="w-full bg-white border-b border-slate-200 sticky top-0 z-50">

      {/* TOP BAR */}
      <div className="hidden lg:block bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 h-11 flex items-center justify-between">

          {/* LEFT */}
          <div className="flex items-center gap-6 text-sm">
            <a
              href="tel:+971 55 532 8978"
              className="flex items-center gap-2 hover:text-[#e63946] transition-colors"
            >
              <Phone size={15} />
              +971 55 532 8978
            </a>

            <a
              href="mailto:sales@nexprint.ae"
              className="flex items-center gap-2 hover:text-[#e63946] transition-colors"
            >
              <Mail size={15} />
              sales@nexprint.ae
            </a>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-[#e63946] transition-colors">
              <Facebook size={17} />
            </a>

            <a href="#" className="hover:text-[#e63946] transition-colors">
              <Instagram size={17} />
            </a>

            <a href="#" className="hover:text-[#e63946] transition-colors">
              <Linkedin size={17} />
            </a>
          </div>
        </div>
      </div>

      {/* MAIN HEADER */}
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="h-[82px] flex items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="flex-shrink-0">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-8">

            {navLinks.map((item, index) => (
              <div key={index} className="relative group">

                {item.submenu ? (
                  <>
                    <button className="flex items-center gap-1 text-[15px] font-semibold text-slate-800 hover:text-[#e63946] transition-colors">
                      {item.name}
                      <ChevronDown size={16} />
                    </button>

                    {/* DROPDOWN */}
                    <div className="absolute top-full left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-3 group-hover:translate-y-0 transition-all duration-300 bg-white shadow-2xl border border-slate-100 min-w-[260px] py-3">

                      {item.submenu.map((sub, subIndex) => (
                        <Link
                          key={subIndex}
                          href={sub.href}
                          className="block px-5 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-[#e63946] transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="text-[15px] font-semibold text-slate-800 hover:text-[#e63946] transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3">

            {/* SEARCH BUTTON */}
            <button
              onClick={() => setSearchOpen(true)}
              className="w-11 h-11 border border-slate-200 rounded-full flex items-center justify-center hover:bg-[#e63946] hover:text-white hover:border-[#e63946] transition-all"
            >
              <Search size={18} />
            </button>

            {/* CART */}
            <button className="relative w-11 h-11 border border-slate-200 rounded-full flex items-center justify-center hover:bg-[#e63946] hover:text-white hover:border-[#e63946] transition-all">
              <ShoppingCart size={18} />

              <span className="absolute -top-1 -right-1 bg-[#e63946] text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
                2
              </span>
            </button>

            {/* BUTTON */}
            <Link
              href="/contact"
              className="hidden md:flex h-11 px-6 bg-[#e63946] text-white rounded-full items-center justify-center text-sm font-semibold hover:bg-slate-900 transition-colors"
            >
              Get Quote
            </Link>

            {/* MOBILE MENU */}
            <button
              onClick={() => setMobileMenu(true)}
              className="lg:hidden w-11 h-11 border border-slate-200 rounded-full flex items-center justify-center"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </div>

      {/* SEARCH MODAL */}
      <div
        className={`fixed inset-0 z-[120] bg-black/50 transition-all duration-300 ${searchOpen
          ? "opacity-100 visible"
          : "opacity-0 invisible"
          }`}
      >
        <div className="flex items-start justify-center pt-24 px-4">

          <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden">

            {/* SEARCH TOP */}
            <div className="flex items-center border-b border-slate-200 px-5 h-16">

              <Search size={20} className="text-slate-400" />

              <input
                type="text"
                placeholder="Search products, services, brands..."
                className="flex-1 h-full px-4 outline-none text-slate-700"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />

              <button
                onClick={() => setSearchOpen(false)}
                className="w-10 h-10 rounded-full hover:bg-slate-100 flex items-center justify-center"
              >
                <X size={20} />
              </button>
            </div>

            {/* RESULTS */}
            <div className="max-h-[400px] overflow-y-auto">

              {searchTerm.length > 0 ? (
                filteredResults.length > 0 ? (
                  filteredResults.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      onClick={() => setSearchOpen(false)}
                      className="flex items-center justify-between px-5 py-4 border-b border-slate-100 hover:bg-slate-50 transition-colors"
                    >
                      <span className="text-sm font-medium text-slate-700">
                        {item.name}
                      </span>

                      <Search size={16} className="text-slate-400" />
                    </Link>
                  ))
                ) : (
                  <div className="p-8 text-center text-slate-500 text-sm">
                    No results found
                  </div>
                )
              ) : (
                <div className="p-8 text-center text-slate-400 text-sm">
                  Start typing to search...
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 bg-black/50 z-[100] transition-opacity duration-300 ${mobileMenu
          ? "opacity-100 visible"
          : "opacity-0 invisible"
          }`}
      >
        <div
          className={`absolute top-0 right-0 w-[320px] h-full bg-white transition-transform duration-300 overflow-y-auto ${mobileMenu
            ? "translate-x-0"
            : "translate-x-full"
            }`}
        >

          {/* MOBILE HEADER */}
          <div className="h-20 px-5 border-b border-slate-200 flex items-center justify-between">

            <img
              src="/logo.png"
              alt="Logo"
              className="h-10 w-auto"
            />

            <button
              onClick={() => setMobileMenu(false)}
              className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center"
            >
              <X size={20} />
            </button>
          </div>

          {/* MOBILE LINKS */}
          <div className="p-5">

            {navLinks.map((item, index) => (
              <div key={index} className="border-b border-slate-100">

                {item.submenu ? (
                  <>
                    <button
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === index ? null : index
                        )
                      }
                      className="w-full h-14 flex items-center justify-between text-left font-semibold text-slate-800"
                    >
                      {item.name}

                      <ChevronDown
                        size={18}
                        className={`transition-transform ${activeDropdown === index
                          ? "rotate-180"
                          : ""
                          }`}
                      />
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${activeDropdown === index
                        ? "max-h-96 pb-3"
                        : "max-h-0"
                        }`}
                    >
                      {item.submenu.map((sub, subIndex) => (
                        <Link
                          key={subIndex}
                          href={sub.href}
                          className="block py-3 pl-4 text-sm text-slate-600 hover:text-[#e63946]"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="h-14 flex items-center font-semibold text-slate-800 hover:text-[#e63946]"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            {/* MOBILE BUTTON */}
            <Link
              href="/contact"
              className="mt-6 h-12 bg-[#e63946] text-white rounded-full flex items-center justify-center text-sm font-semibold"
            >
              Get Quote
            </Link>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;