"use client";

import React from "react";
import { Calendar, FileText, Hash, Search } from "lucide-react";

const stats = [
  { title: "Total Drafts", value: 3, icon: FileText, color: "text-[#6367E9]" },
  { title: "This Week", value: 0, icon: Calendar, color: "text-[#3B82F6]" },
  { title: "Hashtags Used", value: 9, icon: Hash, color: "text-[#22C55E]" },
];

const drafts = [
  {
    title: "Leadership in Remote Teams",
    category: "professional",
    content: "🚀 Leading remote teams requires a different approach...",
    hashtags: ["#leadership", "#remotework", "#management"],
    created: "15/01/2024",
    updated: "16/01/2024",
  },
  {
    title: "Innovation in Tech Industry",
    category: "inspirational",
    content: "💡 The tech industry is evolving at breakneck speed...",
    hashtags: ["#innovation", "#technology", "#startup"],
    created: "14/01/2024",
    updated: "14/01/2024",
  },
  {
    title: "Personal Branding Tips",
    category: "educational",
    content: "✨ Building your personal brand isn't just about...",
    hashtags: ["#personalbranding", "#networking", "#career"],
    created: "13/01/2024",
    updated: "15/01/2024",
  },
];

const DraftsPage = () => {
  return (
    <div className="min-h-screen w-full">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Header Section */}
        <div className="backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-6 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-linear-to-r from-pink-500 to-purple-500 mr-2">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-display font-bold bg-linear-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Draft Manager
              </h2>
              <p className="text-sm text-gray-400">
                Manage your saved post drafts
              </p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex items-center gap-2 w-full sm:w-64 px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md shadow-inner focus-within:border-purple-400 transition">
            <Search className="w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search drafts..."
              className="bg-transparent outline-none text-sm text-gray-200 placeholder-gray-500 w-full"
            />
          </div>
        </div>

        {/* Stats & Drafts Section */}
        <div className="space-y-6">
          {/* Stats Cards */}
          <div className="grid sm:grid-cols-3 gap-4">
            {stats.map(({ title, value, icon: Icon, color }, index) => (
              <div key={index} className="backdrop-blur-xl border border-white/5 bg-linear-to-br from-white/2 to-transparent shadow-[0_0px_5px_rgba(0,0,0,0.1)] rounded-2xl p-5 flex items-center justify-between" >
                <div>
                  <h3 className="text-sm text-gray-400">{title}</h3>
                  <p className="text-2xl font-semibold">{value}</p>
                </div>
                <Icon className={`w-6 h-6 ${color}`} />
              </div>
            ))}
          </div>

          {/* Draft Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {drafts.map((draft, index) => (
              <div key={index} className="backdrop-blur-xl border border-white/5 bg-linear-to-br from-white/2 to-transparent shadow-[0_0px_5px_rgba(0,0,0,0.1)] rounded-2xl p-5 space-y-3" >

                <div className="flex justify-between items-start">
                  <h2 className="text-base font-semibold">{draft.title}</h2>
                  <button className="hover:text-white transition">⋮</button>
                </div>

                <span className="inline-block px-2 py-1 text-xs rounded-full bg-white/10 capitalize"> {draft.category} </span>
                <p className="text-sm text-gray-400">{draft.content}</p>
                <div className="flex flex-wrap gap-2">
                  {draft.hashtags.map((tag, i) => (
                    <span key={i} className="text-xs bg-white/5 border border-white/10 px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="text-xs text-gray-400 mt-2">
                  <p>Created: {draft.created}</p>
                  <p>Updated: {draft.updated}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DraftsPage;
