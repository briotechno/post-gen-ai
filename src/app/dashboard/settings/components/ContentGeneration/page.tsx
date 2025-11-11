"use client";

import React, { useState } from "react";
import { ChevronDown, MessageSquare, RefreshCcw, Save, Star, Zap } from "lucide-react";

const ContentGenerationpage = () => {
  const [tone, setTone] = useState("");
  const [type, setType] = useState("");

  const tones = ["Casual", "Witty", "Inspirational", "Educational", "Storytelling"];

  const types = ["Industry Insight", "Personal Story", "Pro Tip", "Discussion", "Announcement"];

  const Generation = [
    {
      icon: Save,
      title: "Auto-save drafts",
      desc: "Automatically save your posts as drafts while you work",
    },
    {
      icon: Star,
      title: "Show engagement statistics",
      desc: "Display predicted engagement metrics for your posts",
    },
    {
      icon: RefreshCcw,
      title: "Save generation history",
      desc: "Automatically save your posts as drafts while you work",
    },
    {
      icon: MessageSquare,
      title: "Sound effects",
      desc: "Play notification sounds for completed generations",
    },
  ];

  return (
    <div className="backdrop-blur-xl border border-border/50 rounded-2xl p-4 shadow-xl border-white/10">
      {/* Header */}
      <div className="flex items-center">
        <Zap className="w-5 h-5 mr-2 text-yellow-400" />
        <h1 className="text-lg sm:text-2xl font-semibold">
          Content Generation Preferences
        </h1>
      </div>
      <p className="text-gray-500 mb-5 text-sm sm:text-base">
        Set your default preferences for AI-generated content
      </p>

      {/* Tone Selector */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Tone Selector */}
        <div className="space-y-2">
          <label className="text-sm font-medium">
            Default Tone
          </label>
          <div className="relative mt-1">
            <select
              value={tone}
              onChange={(e) => setTone(e.target.value)}
              className="flex h-10 w-full items-center justify-between backdrop-blur-xl border border-white/8 shadow-[0_0px_5px_rgba(0,0,0,0.1)] rounded-md px-3 py-2 text-sm text-gray-200 ring-offset-background focus:outline-none focus:ring-1  focus:ring-offset-1 transition-all appearance-none"
            >
              <option value="bg-gray-800">Professional</option>
              {tones.map((t) => (
                <option key={t} value={t} className="bg-gray-800 hover:bg-white/20 ">
                  {t}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-3 h-4 w-4 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Content Type Selector */}
        <div className="space-y-2">
          <label className="text-sm font-medium">
            Default Content Type
          </label>
          <div className="relative mt-1">
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="flex h-10 w-full items-center justify-between backdrop-blur-xl border border-white/8 shadow-[0_0px_5px_rgba(0,0,0,0.1)] rounded-md px-3 py-2 text-sm text-gray-200 ring-offset-background focus:outline-none focus:ring-1  focus:ring-offset-1 transition-all appearance-none"
            >
              <option value="">Achievement</option>
              {types.map((t) => (
                <option key={t} value={t} className="bg-gray-800 text-white">
                  {t}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-3 h-4 w-4 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Toggles */}
      <div className="space-y-3 mt-5 border-t border-white/10 pt-3">
        {Generation.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <item.icon className="w-4 h-4" />
                <span className="font-medium">{item.title}</span>
              </div>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>

            {/* Toggle */}
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:bg-indigo-600 transition-all duration-300" />
              <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full peer-checked:translate-x-5 transition-all duration-300" />
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentGenerationpage;
