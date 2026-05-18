"use client";

import { useState } from "react";
import AdminNavbar from "./AdminNavbar";
import AdminSidebar from "./AdminSidebar";
import MobileSidebar from "./MobileSidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      
      <AdminSidebar />

      <MobileSidebar
        open={open}
        setOpen={setOpen}
      />

      <div className="lg:ml-72">
        
        <AdminNavbar setOpen={setOpen} />

        <main className="p-4 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}