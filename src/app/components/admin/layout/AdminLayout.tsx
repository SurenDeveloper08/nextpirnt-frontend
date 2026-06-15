"use client";

import { useState, useEffect } from "react";
import AdminNavbar from "./AdminNavbar";
import AdminSidebar from "./AdminSidebar";
import MobileSidebar from "./MobileSidebar";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [admin, setAdmin] = useState<any>(null);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    getAdmin();
  }, []);

  const getAdmin = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/admin/me`,
        {
          withCredentials: true,
        }
      );

      setAdmin(data.user);
    } catch (error) {
      router.push("/login");
    }
  };
  return (
    <div className="min-h-screen bg-gray-100">

      <AdminSidebar />

      <MobileSidebar
        open={open}
        setOpen={setOpen}
      />

      <div className="lg:ml-72">

        <AdminNavbar setOpen={setOpen} admin={admin} />

        <main className="p-4 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}