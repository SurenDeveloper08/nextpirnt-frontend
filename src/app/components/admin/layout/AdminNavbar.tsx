"use client";

import { useEffect, useState } from "react";
import { Bell, Menu, Search, LogOut, User } from "lucide-react";
import axios from "axios";
import { useRouter } from "next/navigation";

interface Props {
  setOpen: (open: boolean) => void;
  admin: any;
}

export default function AdminNavbar({ setOpen, admin }: Props) {
  const router = useRouter();

  const [showProfile, setShowProfile] = useState(false);


  const logoutHandler = async () => {
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/admin/logout`,
        {},
        {
          withCredentials: true,
        }
      );

      router.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

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

      <div className="flex items-center gap-5">

        <button className="relative">
          <Bell size={22} />

          <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-500" />
        </button>

        <div className="relative">

          <button
            onClick={() => setShowProfile(!showProfile)}
            className="flex items-center gap-3"
          >
            <div className="h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
              {admin?.name?.charAt(0)?.toUpperCase() || "A"}
            </div>

            <div className="hidden md:block text-left">
              <p className="font-semibold text-sm">
                {admin?.name || "Admin"}
              </p>

              <p className="text-xs text-gray-500">
                {admin?.email || "Administrator"}
              </p>
            </div>
          </button>

          {showProfile && (
            <div className="absolute right-0 mt-3 w-56 bg-white rounded-xl border shadow-xl overflow-hidden">

              <div className="p-4 border-b">
                <p className="font-semibold">
                  {admin?.name}
                </p>

                <p className="text-xs text-gray-500">
                  {admin?.email}
                </p>
              </div>

              {/* <button
                className="w-full px-4 py-3 flex items-center gap-3 hover:bg-gray-50 text-left"
              >
                <User size={18} />
                Profile
              </button> */}

              <button
                onClick={logoutHandler}
                className="w-full px-4 py-3 flex items-center gap-3 hover:bg-red-50 text-red-600 text-left"
              >
                <LogOut size={18} />
                Logout
              </button>

            </div>
          )}
        </div>
      </div>
    </header>
  );
}