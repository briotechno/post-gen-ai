"use client"
import React, { useState } from "react";
import { Sparkles, UserPlus, TrendingUp, Hash } from "lucide-react";

const buttons = [
  { label: "Make it viral", icon: Sparkles },
  { label: "Add question", icon: UserPlus },
  { label: "Improve tone", icon: TrendingUp },
  { label: "Add hashtags", icon: Hash },
];

const EditPage = () => {
  const [story, setStory] = useState("");

  return (
    <>
      <div className="backdrop-blur-xl border border-white/8 shadow-[0_0px_5px_rgba(0,0,0,0.1)] rounded-2xl p-5 h-fit">

        <h1 className="text-lg font-semibold mb-3">AI Writing Assistant
        </h1>

        {/* Tabs */}
        <div className="flex justify-between flex-wrap">
          {buttons.map(({ label, icon: Icon }) => (
            <button
              key={label}
              className={`flex items-center gap-2 w-50 justify-center text-sm font-medium transition-all py-2 rounded-lg
            ${label
              ? " border border-white/10"
              : "text-gray-400 hover:text-white hover:bg-white/5"
            }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </div>

        <textarea
          value={story}
          onChange={(e) => setStory(e.target.value)}
          placeholder="Edit your post here..."
          className="w-full h-100 backdrop-blur-xl border border-white/8 shadow-[0_0px_5px_rgba(0,0,0,0.1)] rounded-lg p-3 mt-2 text-sm focus:border-pink-500 outline-none resize-none"
        />

      </div>
    </>
  );
};

export default EditPage;
