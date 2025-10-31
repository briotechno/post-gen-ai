"use client";
import Sidebar from "@/src/components/admin/Sidebar";
import Topbar from "@/src/components/admin/Topbar";
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden bg-[#0B0E19] text-white">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* <Topbar /> */}
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}
