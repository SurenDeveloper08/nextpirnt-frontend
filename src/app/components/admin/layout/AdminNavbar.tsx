"use client";

import { Bell, Menu, Search } from "lucide-react";

interface Props {
  setOpen: (open: boolean) => void;
}

export default function AdminNavbar({
  setOpen,
}: Props) {
  return (
    <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-4 lg:px-8 sticky top-0 z-30">
      
      <div className="flex items-center gap-4">
        <button
          className="lg:hidden"
          onClick={() => setOpen(true)}
        >
          <Menu />
        </button>

        <div className="hidden md:flex items-center bg-gray-100 rounded-xl px-4 py-2 w-80">
          <Search size={18} className="text-gray-500" />

          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none px-3 w-full"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        
        <button className="relative">
          <Bell size={22} />

          <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-500" />
        </button>

        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
            A
          </div>

          <div className="hidden md:block">
            <p className="font-semibold text-sm">
              Admin
            </p>

            <p className="text-xs text-gray-500">
              Administrator
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}