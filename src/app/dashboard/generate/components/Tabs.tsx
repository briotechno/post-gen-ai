"use client";

import React from "react";
import { WandSparkles, SquarePen, BookOpen, Clock } from "lucide-react";

interface TabItem {
  label: string;
  icon: React.ElementType;
}

const tabs: TabItem[] = [
  { label: "Generate", icon: WandSparkles },
  { label: "Edit", icon: SquarePen },
  { label: "Templates", icon: BookOpen },
  { label: "History", icon: Clock },
];

interface Props {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Tabs = ({ activeTab, setActiveTab }: Props) => {
  return (
    <div className="flex items-center justify-around border-b border-white/5 backdrop-blur-xl bg-linear-to-br from-white/5 to-transparent shadow-[0_0px_5px_rgba(0,0,0,0.1)] rounded-xl p-2">
      {tabs.map(({ label, icon: Icon }) => (
        <button
          key={label}
          onClick={() => setActiveTab(label)}
          className={`flex items-center gap-2 w-full justify-center text-sm font-medium transition-all px-3 py-2 rounded-lg
            ${activeTab === label
              ? "bg-linear-to-r from-pink-500/20 to-purple-500/20 mx-2 border border-white/10"
              : "text-gray-400 hover:text-white hover:bg-white/5"
            }`}
        >
          <Icon className="w-4 h-4" />
          {label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
