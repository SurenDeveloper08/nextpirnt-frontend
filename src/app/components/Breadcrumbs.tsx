"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbsProps {
  currentLabel?: string;
}

export default function Breadcrumbs({
  currentLabel,
}: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mt-4"
    >
      <ol className="flex flex-wrap items-center gap-1.5 text-[12.5px] sm:text-[13px]">

        {/* Home */}
        <li>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-[#98a2b3] transition-colors duration-200 hover:text-[#e63946]"
          >
            <Home
              size={13}
              strokeWidth={1.8}
            />

            <span>Home</span>
          </Link>
        </li>

        <BreadcrumbSeparator />

        {/* Products */}
        <li>
          <Link
            href="/products"
            className="text-[#667085] transition-colors duration-200 hover:text-[#e63946]"
          >
            Products
          </Link>
        </li>

        {/* Current Category */}
        {currentLabel && (
          <>
            <BreadcrumbSeparator />

            <li
              className="max-w-[220px] truncate font-medium text-[#344054] sm:max-w-[350px]"
              aria-current="page"
              title={currentLabel}
            >
              {currentLabel}
            </li>
          </>
        )}
      </ol>
    </nav>
  );
}

/* =========================================================
   SEPARATOR
========================================================= */

function BreadcrumbSeparator() {
  return (
    <li
      aria-hidden="true"
      className="flex items-center text-[#c5c9d0]"
    >
      <ChevronRight
        size={13}
        strokeWidth={1.7}
      />
    </li>
  );
}