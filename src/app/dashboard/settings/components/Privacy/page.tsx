"use client";

import React, { useState } from 'react'
import { Eye, Globe, Mail, Shield } from 'lucide-react'

const Privacypage = () => {

  const Privacy = [
    {
      icon: Eye,
      title: "Public profile",
      desc: "Make your profile visible to other users in the community",
    },
    {
      icon: Globe,
      title: "Share analytics",
      desc: "Help improve our AI by sharing anonymous usage data",
    },
    {
      icon: Mail,
      title: "Show email in profile",
      desc: "Display your email address on your public profile",
    },
  ];

  return (
    <div>
      <div className="backdrop-blur-xl border border-border/50 rounded-2xl p-4 shadow-xl border-white/10 ">
        {/* Header */}
        <div className="flex items-center">
          <Shield className="w-5 h-5 mr-2 text-green-400" />
          <h1 className="text-lg sm:text-2xl font-semibold">
            Privacy & Security</h1>
        </div>
        <p className="text-gray-500 mb-5 text-sm sm:text-base">
          Choose how and when you want to receive notifications</p>

        {/* Section */}
        <div className="space-y-3">
          {/* Public profile */}
          {Privacy.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between"
            >
              <div>
                <div className="flex items-center gap-2">
                  <item.icon className="w-4 h-4" />
                  <span className="font-medium">{item.title}</span>
                </div>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>

              {/* Toggle */}
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:bg-indigo-600 transition-all duration-300" />
                <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full peer-checked:translate-x-5 transition-all duration-300" />
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Privacypage
