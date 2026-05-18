"use client";

import { X } from "lucide-react";
import Link from "next/link";
import { sidebarMenu } from "@/data/sidebarMenu";
import { usePathname } from "next/navigation";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function MobileSidebar({
  open,
  setOpen,
}: Props) {
  const pathname = usePathname();

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={`fixed top-0 left-0 z-50 h-screen w-72 bg-gray-900 text-white transform transition-transform duration-300 lg:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-20 flex items-center justify-between px-6 border-b border-gray-800">
          <h1 className="text-2xl font-bold">
            Print Admin
          </h1>

          <button onClick={() => setOpen(false)}>
            <X />
          </button>
        </div>

        <nav className="p-4 space-y-2">
          {sidebarMenu.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.title}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 ${
                  pathname === item.href
                    ? "bg-blue-600"
                    : "hover:bg-gray-800"
                }`}
              >
                <Icon size={20} />
                {item.title}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}