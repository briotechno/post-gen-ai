"use client";
import React from "react";
import { Trash2, Download, CreditCard } from "lucide-react";

const AccountManagementPage = () => {
  return (
    <div className="backdrop-blur-xl border border-border/50 rounded-2xl p-4 shadow-xl border-white/10 ">
      {/* Header */}
      <div className="flex items-center">
        <CreditCard className="w-5 h-5 mr-2 text-red-400" />
        <h1 className="text-lg sm:text-2xl font-semibold">
          Data & Account Management
        </h1>
      </div>
      <p className="text-gray-500 mb-5 text-sm sm:text-base">
        Manage your data and account settings
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button className="flex items-center justify-center w-full gap-2 bg-transparent border border-white/10 shadow-xl hover:bg-white/10 font-medium py-3 px-5 rounded-lg transition-all duration-200">
          <Download className="w-5 h-5" />
          Export My Data
        </button>
        <button className="flex items-center justify-center  w-full  gap-2 border border-red-500/50 text-red-400 hover:bg-red-500/10 font-medium py-3 px-5 rounded-lg transition-all duration-200">
          <Trash2 className="w-5 h-5" />
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default AccountManagementPage;
