"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp, Settings } from "lucide-react";

const AdvancedOptions = () => {
  const [show, setShow] = useState(false);
  const [length, setLength] = useState(300);
  const [includeEmojis, setIncludeEmojis] = useState(true);
  const [includeCTA, setIncludeCTA] = useState(true);

  return (
    <div className="mt-5  rounded-xl overflow-hidden">
      {/* Header */}
      <button
        onClick={() => setShow(!show)}
        className="w-full flex items-center justify-between py-3 text-sm font-medium  hover:bg-white/10 transition"
      >
        <span className="flex items-center gap-2">
          <Settings className="w-4 h-4 text-purple-400" />
          Advanced Options
        </span>
        {show ? (
          <ChevronUp className="w-4 h-4 text-gray-400" />
        ) : (
          <ChevronDown className="w-4 h-4 text-gray-400" />
        )}
      </button>

      {/* Collapsible Body */}
      {show && (
        <div className="py-4 space-y-4 border-t border-white/10 text-sm">
          {/* Industry */}
          <div className="space-y-1">
            <label className="text-sm font-medium">Industry/Field</label>
            <select className="w-full bg-gray-800 border border-white/10 rounded-md mt-1 px-3 py-2 focus:border-pink-400 focus:outline-none text-sm">
              <option value="">Select your industry</option>
              <option>Technology</option>
              <option>Marketing</option>
              <option>Finance</option>
              <option>Education</option>
            </select>
          </div>

          {/* Target Audience */}
          <div className="space-y-2 mt-1">
            <label className="text-sm font-medium">Target Audience</label>
            <input
              type="text"
              placeholder="e.g., Marketing professionals, Entrepreneurs"
              className="w-full backdrop-blur-xl border border-white/8 shadow-[0_0px_5px_rgba(0,0,0,0.1)] rounded-md mt-1 px-3 py-2 focus:border-purple-400 focus:outline-none text-gray-200 text-sm"
            />
          </div>

          {/* Post Length */}
          <div className="space-y-2">
            <label className="text-sm font-medium flex justify-between mt-1">
              <span>Post Length</span>
              <span>{length} characters</span>
            </label>
            <input
              type="range"
              min={100}
              max={1000}
              step={50}
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-full accent-purple-500 cursor-pointer"
            />
          </div>

          {/* Keywords and Hashtags */}
          <div className="grid sm:grid-cols-2 gap-3">
            <div>
              <label className="text-sm font-medium">Key words</label>
              <input
                type="text"
                placeholder="marketing, AI, growth"
                className="w-full backdrop-blur-xl border border-white/8 shadow-[0_0px_5px_rgba(0,0,0,0.1)] rounded-md mt-1 px-3 py-2 focus:border-purple-400 focus:outline-none text-gray-200 text-sm"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Custom Hashtags</label>
              <input
                type="text"
                placeholder="#Marketing #AI #Growth"
                className="w-full backdrop-blur-xl border border-white/8 shadow-[0_0px_5px_rgba(0,0,0,0.1)] rounded-md mt-1 px-3 py-2 focus:border-purple-400 focus:outline-none text-gray-200 text-sm"
              />
            </div>
          </div>

          {/* Checkboxes */}
          <div className="grid sm:grid-cols-2 gap-3 pt-1">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-purple-500" /> Engaging
              question
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-purple-500" /> Include stats
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={includeEmojis}
                onChange={(e) => setIncludeEmojis(e.target.checked)}
                className="accent-purple-500"
              />{" "}
              Include emojis
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={includeCTA}
                onChange={(e) => setIncludeCTA(e.target.checked)}
                className="accent-purple-500"
              />{" "}
              Call-to-action
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvancedOptions;
