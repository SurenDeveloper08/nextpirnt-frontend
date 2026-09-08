"use client";

import Link from "next/link";
import {
  Facebook,
  Instagram,
  Youtube,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

import { FaXTwitter, FaPinterestP } from "react-icons/fa6";

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

export default function Footer({ navLinks }: FooterProps) {
  const productMenus = navLinks
    ?.filter((item) => item.href.startsWith("/products"))
    ?.slice(0, 4);

  const servicesMenu = navLinks?.find(
    (item) => item.name.toLowerCase() === "services"
  );

  return (
    <footer className="relative overflow-hidden border-t border-[#eaecf0] bg-white">
      {/* Very subtle background accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -right-40 h-[420px] w-[420px] rounded-full bg-[#e63946]/[0.02] blur-3xl"
      />

      {/* ================= MAIN FOOTER ================= */}
      <div className="relative mx-auto w-full max-w-[1600px] px-5 pb-8 pt-12 sm:px-7 sm:pb-9 sm:pt-14 md:px-10 md:pt-16 lg:px-12 lg:pb-10 lg:pt-20 xl:px-16 2xl:px-20">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-12 lg:grid-cols-[1.35fr_0.75fr_0.9fr_1.2fr] lg:gap-10 xl:gap-14">
          
          {/* ================= COMPANY ================= */}
          <div className="min-w-0 lg:max-w-[390px]">
            <Link href="/" className="inline-flex">
              <img
                src="/nexprint.PNG"
                alt="Nexprint Office Equipments LLC"
                className="h-12 w-auto object-contain sm:h-[52px]"
              />
            </Link>

            <p className="mt-5 max-w-[370px] text-[13.5px] font-normal leading-[1.75] text-[#667085] sm:text-[14px]">
              Professional printer sales, rental, AMC, repair and consumable
              solutions for businesses across Abu Dhabi and the UAE.
            </p>

            {/* Social */}
            <div className="mt-6 flex flex-wrap items-center gap-2.5">
              <a
                href="https://facebook.com/nexprintuae"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e4e7ec] bg-white text-[#667085] transition-all duration-300 hover:border-[#e63946] hover:bg-[#e63946] hover:text-white"
              >
                <Facebook size={16} strokeWidth={1.8} />
              </a>

              <a
                href="https://www.instagram.com/nexprintuae/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e4e7ec] bg-white text-[#667085] transition-all duration-300 hover:border-[#e63946] hover:bg-[#e63946] hover:text-white"
              >
                <Instagram size={16} strokeWidth={1.8} />
              </a>

              <a
                href="https://x.com/nexprintuae"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e4e7ec] bg-white text-[#667085] transition-all duration-300 hover:border-[#e63946] hover:bg-[#e63946] hover:text-white"
              >
                <FaXTwitter size={14} />
              </a>

              <a
                href="https://www.youtube.com/@nexprintuae"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e4e7ec] bg-white text-[#667085] transition-all duration-300 hover:border-[#e63946] hover:bg-[#e63946] hover:text-white"
              >
                <Youtube size={17} strokeWidth={1.8} />
              </a>

              <a
                href="https://www.pinterest.com/nexprintuae/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinterest"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e4e7ec] bg-white text-[#667085] transition-all duration-300 hover:border-[#e63946] hover:bg-[#e63946] hover:text-white"
              >
                <FaPinterestP size={14} />
              </a>
            </div>
          </div>

          {/* ================= PRODUCTS ================= */}
          <div className="min-w-0">
            <FooterHeading title="Products" />

            <ul className="mt-5 space-y-3">
              {productMenus?.map((item) => (
                <li key={item.href}>
                  <FooterLink href={item.href}>
                    {item.name}
                  </FooterLink>
                </li>
              ))}
            </ul>

            <Link
              href="/products"
              className="group mt-5 inline-flex items-center gap-1.5 text-[13px] font-medium text-[#e63946]"
            >
              View All
              <ArrowUpRight
                size={14}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>

          {/* ================= SERVICES ================= */}
          <div className="min-w-0">
            <FooterHeading title="Services" />

            <ul className="mt-5 space-y-3">
              {servicesMenu?.submenu?.slice(0, 6).map((item) => (
                <li key={item.href}>
                  <FooterLink href={item.href}>
                    {item.name}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= CONTACT ================= */}
          <div className="min-w-0">
            <FooterHeading title="Contact Us" />

            <div className="mt-5 space-y-5">
              {/* Phone */}
              <a
                href="tel:+971555328978"
                className="group flex items-start gap-3.5"
              >
                <ContactIcon>
                  <Phone size={17} strokeWidth={1.8} />
                </ContactIcon>

                <div className="min-w-0 pt-0.5">
                  <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#98a2b3]">
                    Call Us
                  </p>

                  <p className="mt-1 text-[13.5px] font-medium text-[#344054] transition-colors group-hover:text-[#e63946] sm:text-[14px]">
                    +971 55 532 8978
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:sales@nexprint.ae"
                className="group flex items-start gap-3.5"
              >
                <ContactIcon>
                  <Mail size={17} strokeWidth={1.8} />
                </ContactIcon>

                <div className="min-w-0 pt-0.5">
                  <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#98a2b3]">
                    Email
                  </p>

                  <p className="mt-1 break-all text-[13.5px] font-medium text-[#344054] transition-colors group-hover:text-[#e63946] sm:text-[14px]">
                    sales@nexprint.ae
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start gap-3.5">
                <ContactIcon>
                  <MapPin size={17} strokeWidth={1.8} />
                </ContactIcon>

                <div className="min-w-0 pt-0.5">
                  <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#98a2b3]">
                    Location
                  </p>

                  <p className="mt-1 max-w-[250px] text-[13.5px] font-medium leading-[1.6] text-[#344054] sm:text-[14px]">
                    Mussafah M13, Abu Dhabi, UAE
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM ================= */}
        <div className="mt-12 border-t border-[#eaecf0] pt-6 sm:mt-14 lg:mt-16">
          <div className="flex flex-col gap-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <p className="text-[12.5px] font-normal text-[#98a2b3] sm:text-[13px]">
              © 2026 Nexprint Office Equipments LLC. All rights reserved.
            </p>

            <div className="flex items-center justify-center gap-5 sm:justify-end">
              <Link
                href="/privacy-policy"
                className="text-[12.5px] font-normal text-[#667085] transition-colors duration-300 hover:text-[#e63946] sm:text-[13px]"
              >
                Privacy Policy
              </Link>

              <span className="h-3 w-px bg-[#d0d5dd]" />

              <Link
                href="/terms"
                className="text-[12.5px] font-normal text-[#667085] transition-colors duration-300 hover:text-[#e63946] sm:text-[13px]"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ================= REUSABLE FOOTER PARTS ================= */

function FooterHeading({ title }: { title: string }) {
  return (
    <div>
      <h3 className="text-[15px] font-semibold tracking-[-0.01em] text-[#27303f] sm:text-[16px]">
        {title}
      </h3>

      <span className="mt-2 block h-[2px] w-7 rounded-full bg-[#e63946]" />
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-1.5 text-[13.5px] font-normal text-[#667085] transition-colors duration-300 hover:text-[#e63946] sm:text-[14px]"
    >
      <ChevronRight
        size={13}
        strokeWidth={1.8}
        className="shrink-0 text-[#e63946]/70 transition-transform duration-300 group-hover:translate-x-0.5"
      />

      <span>{children}</span>
    </Link>
  );
}

function ContactIcon({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] border border-[#e63946]/10 bg-[#e63946]/[0.06] text-[#e63946]">
      {children}
    </div>
  );
}