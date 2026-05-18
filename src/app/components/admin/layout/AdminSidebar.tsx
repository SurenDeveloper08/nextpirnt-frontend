"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { sidebarMenu } from "@/data/sidebarMenu";
import clsx from "clsx";

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex h-screen w-72 flex-col bg-gray-900 text-white fixed left-0 top-0">
      
      <div className="h-20 flex items-center px-6 border-b border-gray-800">
        <h1 className="text-2xl font-bold">
          Print Admin
        </h1>
      </div>

      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {sidebarMenu.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              href={item.href}
              className={clsx(
                "flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200",
                pathname === item.href
                  ? "bg-blue-600 text-white"
                  : "text-gray-300 hover:bg-gray-800 hover:text-white"
              )}
            >
              <Icon size={20} />
              <span className="font-medium">
                {item.title}
              </span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}