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
  Youtube,
} from "lucide-react";

import { FaXTwitter, FaPinterestP } from "react-icons/fa6";

import { useCartCount } from "@/hooks/useCartCount";
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
  const services = navLinks.find(
    (item) => item.name.toLowerCase() === "services"
  );

  const menuItems: NavItem[] = [
    {
      name: "Home",
      href: "/",
    },

    ...(services ? [services] : []),

    {
      name: "Products",
      href: "/products",
      submenu: [
        {
          name: "Consumables",
          href: "/products/consumables",
        },
        {
          name: "Printers & Machines",
          href: "/products/printers-machines",
        },
        {
          name: "Office Equipment",
          href: "/products/office-equipments",
        },
      ],
    },

    {
      name: "About Us",
      href: "/about",
    },

    {
      name: "Blog",
      href: "/blogs",
    },

    {
      name: "Contact",
      href: "/contact",
    },
  ];

  const count = useCartCount();

  const [mobileMenu, setMobileMenu] = useState(false);

  const [activeDropdown, setActiveDropdown] =
    useState<number | null>(null);

  const [searchOpen, setSearchOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenu(false);
    setActiveDropdown(null);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md">
        {/* ======================================================
            TOP BAR
        ====================================================== */}

        <div className="hidden border-b border-[#eaecf0] bg-[#fafafa] lg:block">
          <div className="mx-auto flex h-9 w-full max-w-[1600px] items-center justify-between px-5 sm:px-7 md:px-10 lg:px-12 xl:px-16 2xl:px-20">
            {/* Contact */}
            <div className="flex items-center gap-5">
              <a
                href="tel:+971555328978"
                className="group flex items-center gap-1.5 text-[12px] font-normal text-[#667085] transition-colors duration-300 hover:text-[#e63946]"
              >
                <Phone
                  size={13}
                  strokeWidth={1.8}
                  className="text-[#e63946]"
                />

                +971 55 532 8978
              </a>

              <span className="h-3 w-px bg-[#d0d5dd]" />

              <a
                href="mailto:sales@nexprint.ae"
                className="group flex items-center gap-1.5 text-[12px] font-normal text-[#667085] transition-colors duration-300 hover:text-[#e63946]"
              >
                <Mail
                  size={13}
                  strokeWidth={1.8}
                  className="text-[#e63946]"
                />

                sales@nexprint.ae
              </a>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3.5 text-[#98a2b3]">
              <a
                href="https://facebook.com/nexprintuae"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="transition-colors duration-300 hover:text-[#e63946]"
              >
                <Facebook size={14} strokeWidth={1.8} />
              </a>

              <a
                href="https://www.instagram.com/nexprintuae/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="transition-colors duration-300 hover:text-[#e63946]"
              >
                <Instagram size={14} strokeWidth={1.8} />
              </a>

              <a
                href="https://x.com/nexprintuae"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="transition-colors duration-300 hover:text-[#e63946]"
              >
                <FaXTwitter size={13} />
              </a>

              <a
                href="https://www.youtube.com/@nexprintuae"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="transition-colors duration-300 hover:text-[#e63946]"
              >
                <Youtube size={15} strokeWidth={1.8} />
              </a>

              <a
                href="https://www.pinterest.com/nexprintuae/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinterest"
                className="transition-colors duration-300 hover:text-[#e63946]"
              >
                <FaPinterestP size={13} />
              </a>
            </div>
          </div>
        </div>

        {/* ======================================================
            MAIN HEADER
        ====================================================== */}

        <div className="border-b border-[#eaecf0] bg-white/95">
          <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-7 md:px-10 lg:px-12 xl:px-16 2xl:px-20">
            <div className="flex h-[68px] items-center justify-between sm:h-[72px] lg:h-[76px]">
              {/* ================= LOGO ================= */}

              <Link
                href="/"
                aria-label="Nexprint Home"
                className="flex shrink-0 items-center"
              >
                <img
                  src="/nexprint.PNG"
                  alt="Nexprint Office Equipments LLC"
                  className="h-[42px] w-auto object-contain sm:h-[46px] lg:h-[48px]"
                />
              </Link>

              {/* ================= DESKTOP NAV ================= */}

              <div className="hidden min-w-0 flex-1 items-center justify-center px-6 lg:flex xl:px-10">
                <nav className="flex items-center gap-5 xl:gap-7 2xl:gap-8">
                  {menuItems.map((item, index) => {
                    const hasSubmenu =
                      (item.submenu?.length ?? 0) > 0;

                    return (
                      <div
                        key={`${item.name}-${index}`}
                        className="group relative flex shrink-0 items-center"
                      >
                        {hasSubmenu ? (
                          <>
                            <Link
                              href={item.href}
                              className="relative flex h-[76px] items-center gap-1.5 whitespace-nowrap text-[13.5px] font-medium text-[#475467] transition-colors duration-300 hover:text-[#e63946] xl:text-[14px]"
                            >
                              {item.name}

                              <ChevronDown
                                size={14}
                                strokeWidth={1.8}
                                className="transition-transform duration-300 group-hover:rotate-180"
                              />

                              {/* Active hover underline */}
                              <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#e63946] transition-all duration-300 group-hover:w-full" />
                            </Link>

                            {/* ================= DROPDOWN ================= */}

                            <div
                              className="
                                invisible absolute left-1/2 top-[calc(100%-2px)]
                                z-50 min-w-[260px]
                                -translate-x-1/2 translate-y-2
                                rounded-[16px]
                                border border-[#eaecf0]
                                bg-white
                                p-2
                                opacity-0
                                shadow-[0_18px_50px_rgba(16,24,40,0.10)]
                                transition-all duration-200

                                group-hover:visible
                                group-hover:translate-y-0
                                group-hover:opacity-100
                              "
                            >
                              {item.submenu?.map(
                                (sub, subIndex) => (
                                  <Link
                                    key={`${sub.name}-${subIndex}`}
                                    href={sub.href}
                                    className="
                                      group/sub
                                      flex items-center justify-between
                                      rounded-[10px]
                                      px-4 py-3
                                      text-[13.5px]
                                      font-normal
                                      text-[#475467]
                                      transition-all duration-200

                                      hover:bg-[#e63946]/[0.055]
                                      hover:text-[#e63946]
                                    "
                                  >
                                    <span>{sub.name}</span>

                                    <span className="h-1.5 w-1.5 rounded-full bg-[#e63946] opacity-0 transition-opacity group-hover/sub:opacity-100" />
                                  </Link>
                                )
                              )}
                            </div>
                          </>
                        ) : (
                          <Link
                            href={item.href}
                            className="
                              relative
                              flex h-[76px]
                              items-center
                              whitespace-nowrap

                              text-[13.5px]
                              font-medium
                              text-[#475467]

                              transition-colors
                              duration-300

                              hover:text-[#e63946]

                              xl:text-[14px]
                            "
                          >
                            {item.name}

                            <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#e63946] transition-all duration-300 group-hover:w-full" />
                          </Link>
                        )}
                      </div>
                    );
                  })}
                </nav>
              </div>

              {/* ================= ACTIONS ================= */}

              <div className="flex shrink-0 items-center gap-2 sm:gap-2.5">
                {/* Search */}

                <button
                  type="button"
                  onClick={() => setSearchOpen(true)}
                  aria-label="Search"
                  className="
                    flex h-10 w-10
                    items-center justify-center
                    rounded-full
                    border border-[#e4e7ec]
                    bg-white
                    text-[#475467]

                    transition-all duration-300

                    hover:border-[#e63946]/30
                    hover:bg-[#e63946]/[0.05]
                    hover:text-[#e63946]

                    sm:h-11 sm:w-11
                  "
                >
                  <Search size={18} strokeWidth={1.8} />
                </button>

                {/* Cart */}

                <Link
                  href="/cart"
                  aria-label={`Cart with ${count} items`}
                  className="
                    group
                    relative
                    flex h-10 w-10
                    items-center justify-center
                    rounded-full
                    border border-[#e4e7ec]
                    bg-white
                    text-[#475467]

                    transition-all duration-300

                    hover:border-[#e63946]/30
                    hover:bg-[#e63946]/[0.05]
                    hover:text-[#e63946]

                    sm:h-11 sm:w-11
                  "
                >
                  <ShoppingCart size={18} strokeWidth={1.8} />

                  {count > 0 && (
                    <span
                      className="
                        absolute -right-1 -top-1
                        flex h-[18px] min-w-[18px]
                        items-center justify-center
                        rounded-full
                        bg-[#e63946]
                        px-1
                        text-[9px]
                        font-semibold
                        leading-none
                        text-white
                      "
                    >
                      {count > 99 ? "99+" : count}
                    </span>
                  )}
                </Link>

                {/* Mobile Menu */}

                <button
                  type="button"
                  onClick={() => setMobileMenu(true)}
                  aria-label="Open menu"
                  className="
                    flex h-10 w-10
                    items-center justify-center
                    rounded-full
                    border border-[#e4e7ec]
                    bg-white
                    text-[#344054]

                    transition-all duration-300

                    hover:border-[#e63946]/30
                    hover:bg-[#e63946]/[0.05]
                    hover:text-[#e63946]

                    sm:h-11 sm:w-11

                    lg:hidden
                  "
                >
                  <Menu size={20} strokeWidth={1.8} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ======================================================
          SEARCH
      ====================================================== */}

      <SearchModal
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
      />

      {/* ======================================================
          MOBILE OVERLAY
      ====================================================== */}

      <div
        onClick={closeMobileMenu}
        className={`
          fixed inset-0
          z-[100]
          bg-[#101828]/35
          backdrop-blur-[2px]
          transition-all duration-300
          lg:hidden

          ${
            mobileMenu
              ? "visible opacity-100"
              : "invisible opacity-0"
          }
        `}
      >
        {/* ====================================================
            MOBILE DRAWER
        ==================================================== */}

        <div
          onClick={(e) => e.stopPropagation()}
          className={`
            absolute right-0 top-0
            flex h-full
            w-[min(88vw,360px)]
            flex-col
            bg-white
            shadow-[-20px_0_60px_rgba(16,24,40,0.12)]

            transition-transform
            duration-300
            ease-out

            ${
              mobileMenu
                ? "translate-x-0"
                : "translate-x-full"
            }
          `}
        >
          {/* ================= MOBILE HEADER ================= */}

          <div className="flex h-[72px] shrink-0 items-center justify-between border-b border-[#eaecf0] px-5">
            <Link
              href="/"
              onClick={closeMobileMenu}
              className="flex items-center"
            >
              <img
                src="/nexprint.PNG"
                alt="Nexprint"
                className="h-[42px] w-auto object-contain"
              />
            </Link>

            <button
              type="button"
              onClick={closeMobileMenu}
              aria-label="Close menu"
              className="
                flex h-10 w-10
                items-center justify-center
                rounded-full
                border border-[#e4e7ec]
                bg-white
                text-[#475467]

                transition-all duration-300

                hover:border-[#e63946]/30
                hover:bg-[#e63946]/[0.05]
                hover:text-[#e63946]
              "
            >
              <X size={19} strokeWidth={1.8} />
            </button>
          </div>

          {/* ================= MOBILE LINKS ================= */}

          <div className="flex-1 overflow-y-auto px-5 py-4">
            <nav>
              {menuItems.map((item, index) => {
                const hasSubmenu =
                  (item.submenu?.length ?? 0) > 0;

                const open =
                  activeDropdown === index;

                return (
                  <div
                    key={`${item.name}-${index}`}
                    className="border-b border-[#f0f1f3]"
                  >
                    {hasSubmenu ? (
                      <>
                        <button
                          type="button"
                          onClick={() =>
                            setActiveDropdown(
                              open ? null : index
                            )
                          }
                          className="
                            flex min-h-[54px]
                            w-full
                            items-center
                            justify-between
                            gap-4

                            text-left
                            text-[14.5px]
                            font-medium
                            text-[#344054]
                          "
                        >
                          {item.name}

                          <span
                            className={`
                              flex h-7 w-7
                              shrink-0
                              items-center justify-center
                              rounded-full
                              bg-[#f8f9fa]
                              text-[#667085]

                              transition-all duration-300

                              ${
                                open
                                  ? "bg-[#e63946]/[0.07] text-[#e63946]"
                                  : ""
                              }
                            `}
                          >
                            <ChevronDown
                              size={15}
                              strokeWidth={1.8}
                              className={`
                                transition-transform
                                duration-300
                                ${
                                  open
                                    ? "rotate-180"
                                    : ""
                                }
                              `}
                            />
                          </span>
                        </button>

                        {/* Mobile submenu */}

                        <div
                          className={`
                            grid
                            transition-all
                            duration-300

                            ${
                              open
                                ? "grid-rows-[1fr] pb-3"
                                : "grid-rows-[0fr]"
                            }
                          `}
                        >
                          <div className="overflow-hidden">
                            <div className="space-y-1 border-l border-[#e63946]/20 pl-3">
                              <Link
                                href={item.href}
                                onClick={closeMobileMenu}
                                className="
                                  block
                                  rounded-[9px]
                                  px-3 py-2.5
                                  text-[13.5px]
                                  font-medium
                                  text-[#e63946]

                                  transition-colors

                                  hover:bg-[#e63946]/[0.05]
                                "
                              >
                                View All {item.name}
                              </Link>

                              {item.submenu?.map(
                                (sub, subIndex) => (
                                  <Link
                                    key={`${sub.name}-${subIndex}`}
                                    href={sub.href}
                                    onClick={closeMobileMenu}
                                    className="
                                      block
                                      rounded-[9px]
                                      px-3 py-2.5

                                      text-[13.5px]
                                      font-normal
                                      text-[#667085]

                                      transition-all duration-200

                                      hover:bg-[#fafafa]
                                      hover:text-[#e63946]
                                    "
                                  >
                                    {sub.name}
                                  </Link>
                                )
                              )}
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={closeMobileMenu}
                        className="
                          flex min-h-[54px]
                          items-center

                          text-[14.5px]
                          font-medium
                          text-[#344054]

                          transition-colors
                          duration-300

                          hover:text-[#e63946]
                        "
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* ================= MOBILE CONTACT ================= */}

            <div className="mt-7 rounded-[16px] border border-[#eaecf0] bg-[#fafafa] p-4">
              <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#98a2b3]">
                Need Assistance?
              </p>

              <a
                href="tel:+971555328978"
                className="mt-3 flex items-center gap-2.5 text-[13.5px] font-medium text-[#344054] transition-colors hover:text-[#e63946]"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-[9px] bg-[#e63946]/[0.07] text-[#e63946]">
                  <Phone size={15} strokeWidth={1.8} />
                </span>

                +971 55 532 8978
              </a>

              <a
                href="mailto:sales@nexprint.ae"
                className="mt-2.5 flex items-center gap-2.5 text-[13.5px] font-normal text-[#667085] transition-colors hover:text-[#e63946]"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-[9px] bg-[#e63946]/[0.07] text-[#e63946]">
                  <Mail size={15} strokeWidth={1.8} />
                </span>

                sales@nexprint.ae
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}