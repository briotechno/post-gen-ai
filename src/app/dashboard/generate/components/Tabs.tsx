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
    <div className="w-full overflow-x-auto scrollbar-hide">
      <div className="flex items-center justify-between sm:justify-around min-w-max sm:min-w-0 border-b border-white/5 backdrop-blur-xl bg-linear-to-br from-white/5 to-transparent shadow-[0_0px_5px_rgba(0,0,0,0.1)] rounded-xl p-2">
        {tabs.map(({ label, icon: Icon }) => (
          <button
            key={label}
            onClick={() => setActiveTab(label)}
            className={`flex items-center gap-2 shrink-0 sm:shrink w-auto sm:w-full justify-center text-sm font-medium transition-all px-3 py-2 rounded-lg
              ${
                activeTab === label
                  ? "bg-linear-to-r from-pink-500/20 to-purple-500/20 border border-white/10 text-white"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
          >
            <Icon className="w-4 h-4" />
            <span className="">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
