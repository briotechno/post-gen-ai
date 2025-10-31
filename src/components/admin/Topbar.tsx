"use client";
import { Bell, Search } from "lucide-react";

export default function Topbar() {
  return (
    <header className="flex justify-between items-center p-4 border-b border-white/10 bg-[#0B0E19]/50 backdrop-blur">
      <div className="flex items-center gap-2">
        <Search className="text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none text-sm text-gray-300 placeholder-gray-500"
        />
      </div>
      <Bell className="text-gray-400 w-5 h-5 cursor-pointer" />
    </header>
  );
}
