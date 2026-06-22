"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useCartCount } from "@/hooks/useCartCount";
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
    Youtube
} from "lucide-react";

import {
    FaPinterestP,
} from "react-icons/fa6";
import SearchModal from "./SearchModal";

interface SubmenuItem {
    name: string;
    href: string;
}

interface NavItem {
    name: string;
    href: string;
    submenu?: SubmenuItem[];
}

interface HeaderProps {
    navLinks: NavItem[];
}

export default function Header({ navLinks }: HeaderProps) {
    const menuItems = [
        {
            name: "Home",
            href: "/",
        },

        ...navLinks.filter(
            (item) =>
                item.name !== "Home" &&
                item.name !== "About Us" &&
                item.name !== "Blog"
        ),

        {
            name: "About Us",
            href: "/about",
        },

        {
            name: "Blog",
            href: "/blogs",
        },
    ];
    const count = useCartCount();
    const [mobileMenu, setMobileMenu] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

    // SEARCH
    const [searchOpen, setSearchOpen] = useState(false);

    return (
        <header className="w-full bg-white border-b border-slate-200 sticky top-0 z-50">

            {/* TOP BAR */}
            <div className="hidden lg:block bg-black text-white">
                <div className="max-w-7xl mx-auto px-6 h-11 flex items-center justify-between">

                    {/* LEFT */}
                    <div className="flex items-center gap-6 text-sm">
                        <a
                            href="tel:+971527761348"
                            className="flex items-center gap-2 hover:text-[#e63946] transition-colors"
                        >
                            <Phone size={15} />
                            +971 52 776 1348
                        </a>

                        <a
                            href="mailto:nexprintuae@gmail.com"
                            className="flex items-center gap-2 hover:text-[#e63946] transition-colors"
                        >
                            <Mail size={15} />
                            nexprintuae@gmail.com
                        </a>
                    </div>

                    {/* RIGHT */}
                    <div className="flex items-center gap-4">

                        <a
                            href="https://facebook.com/nexprintuae"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#e63946] transition-colors"
                            aria-label="Facebook"
                        >
                            <Facebook size={17} />
                        </a>

                        <a
                            href="https://www.instagram.com/nexprintuae/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#e63946] transition-colors"
                            aria-label="Instagram"
                        >
                            <Instagram size={17} />
                        </a>

                        <a
                            href="https://x.com/nexprintuae"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#e63946] transition-colors"
                            aria-label="X"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="17"
                                height="17"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M18.901 1H22L15.24 8.73L23.2 23H16.97L12.09 15.1L5.18 23H2.08L9.31 14.73L1.68 1H8.07L12.48 8.22L18.901 1Z" />
                            </svg>
                        </a>

                        <a
                            href="https://www.youtube.com/@nexprintuae"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#e63946] transition-colors"
                            aria-label="YouTube"
                        >
                            <Youtube size={17} />
                        </a>

                        <a
                            href="https://www.pinterest.com/nexprintuae/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#e63946] transition-colors"
                            aria-label="Pinterest"
                        >
                            <FaPinterestP size={17} />
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
                            src="/logo.jpeg"
                            alt="Logo"
                            className="h-12 w-auto object-contain"
                        />
                    </Link>

                    {/* DESKTOP NAV */}
                    <div className="flex items-center flex-1 justify-center px-6">

                        <nav className="hidden lg:flex items-center gap-4 xl:gap-6 2xl:gap-8 overflow-visible">

                            {menuItems.map((item, index) => {
                                const hasSubmenu = (item.submenu?.length ?? 0) > 0;

                                return (
                                    <div
                                        key={index}
                                        className="relative group flex-shrink-0"
                                    >
                                        {hasSubmenu ? (
                                            <>
                                                <Link
                                                    href={item.href}
                                                    className="flex items-center gap-1 text-[14px] xl:text-[15px] font-semibold text-slate-800 hover:text-[#e63946] transition-colors whitespace-nowrap"
                                                >
                                                    {item.name}
                                                    <ChevronDown size={15} />
                                                </Link>

                                                <div className="absolute top-full left-1/2 -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-3 group-hover:translate-y-0 transition-all duration-300 bg-white shadow-2xl border border-slate-100 min-w-[280px] py-3 rounded-2xl z-50">
                                                    {item.submenu?.map((sub, subIndex) => (
                                                        <Link
                                                            key={subIndex}
                                                            href={sub.href}
                                                            className="block px-5 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-[#e63946]"
                                                        >
                                                            {sub.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </>
                                        ) : (
                                            <Link
                                                href={item.href}
                                                className="text-[14px] xl:text-[15px] font-semibold text-slate-800 hover:text-[#e63946] transition-colors whitespace-nowrap"
                                            >
                                                {item.name}
                                            </Link>
                                        )}
                                    </div>
                                );
                            })}
                        </nav>

                    </div>

                    {/* RIGHT SIDE */}
                    <div className="flex items-center gap-3">

                        {/* SEARCH BUTTON */}
                        <button
                            onClick={() => setSearchOpen(true)}
                            className="w-11 h-11 border border-slate-200 rounded-full flex items-center justify-center"
                        >
                            <Search size={18} />
                        </button>

                        {/* CART */}
                        <Link
                            href="/cart"
                            className="relative w-11 h-11 border border-slate-200 rounded-full flex items-center justify-center hover:bg-[#e63946] hover:text-white hover:border-[#e63946] transition-all"
                        >
                            <ShoppingCart size={18} />

                            {count > 0 && (
                                <span className="absolute -top-1 -right-1 bg-[#e63946] text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold animate-pulse">
                                    {count}
                                </span>
                            )}
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

            <SearchModal
                open={searchOpen}
                onClose={() => setSearchOpen(false)}
            />

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

                         <h3 className="text-lg font-bold text-slate-900">
                                Menu
                            </h3>
                       
                        <button
                            onClick={() => setMobileMenu(false)}
                            className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-[#e63946] hover:text-white hover:border-[#e63946] transition-all"
                        >
                            <X size={20} />
                        </button>

                    </div>

                    {/* MOBILE LINKS */}
                    <div className="p-5">

                        {menuItems.map((item, index) => (
                            <div key={index} className="border-b border-slate-100">

                                {item?.submenu ? (
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

                    </div>
                </div>
            </div>
        </header>
    );
};