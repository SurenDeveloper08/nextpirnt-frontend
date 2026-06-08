"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
  const pathname = usePathname();

  const hiddenSegments = [
    "category",
    "product",
    "service",
  ];

  const pathnames = pathname
    .split("/")
    .filter(
      (segment) =>
        segment &&
        !hiddenSegments.includes(segment)
    );

  return (
    <nav
      aria-label="Breadcrumb"
      className="mt-3"
    >
      <ol className="flex flex-wrap items-center gap-2 text-sm">

        <li>
          <Link
            href="/"
            className="text-slate-500 hover:text-[#e63946]"
          >
            Home
          </Link>
        </li>

        {pathnames.map(
          (segment, index) => {
            const href =
              "/" +
              pathname
                .split("/")
                .filter(Boolean)
                .slice(0, index + 1)
                .join("/");

            const isLast =
              index ===
              pathnames.length - 1;

            const label =
              decodeURIComponent(
                segment
              )
                .replace(/-/g, " ")
                .replace(
                  /\b\w/g,
                  (char) =>
                    char.toUpperCase()
                );

            return (
              <li
                key={segment}
                className="flex items-center gap-2"
              >
                <span className="text-slate-400">
                  /
                </span>

                {isLast ? (
                  <span className="font-medium text-slate-900">
                    {label}
                  </span>
                ) : (
                  <Link
                    href={href}
                    className="text-slate-500 hover:text-[#e63946]"
                  >
                    {label}
                  </Link>
                )}
              </li>
            );
          }
        )}
      </ol>
    </nav>
  );
}