"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
  const pathname = usePathname();

  const pathnames = pathname
    .split("/")
    .filter((x) => x);

  return (
    <div className="flex items-center flex-wrap gap-2 text-sm text-slate-500">

      {/* HOME */}
      <Link
        href="/"
        className="hover:text-[#e63946] transition-colors"
      >
        Home
      </Link>

      {/* DYNAMIC PATHS */}
      {pathnames.map((value, index) => {
        const href = "/" + pathnames.slice(0, index + 1).join("/");

        const isLast = index === pathnames.length - 1;

        return (
          <div
            key={href}
            className="flex items-center gap-2"
          >
            <span>/</span>

            {isLast ? (
              <span className="text-slate-900 font-medium capitalize">
                {decodeURIComponent(value).replace(/-/g, " ")}
              </span>
            ) : (
              <Link
                href={href}
                className="hover:text-[#e63946] transition-colors capitalize"
              >
                {decodeURIComponent(value).replace(/-/g, " ")}
              </Link>
            )}
          </div>
        );
      })}
    </div>
  );
}