"use client";

import React, { useState } from 'react'
import { Bell, Globe, Mail, MessageSquare, Smartphone } from 'lucide-react'

const Notificationspage = () => {

  const settings = [
    {
      icon: Mail,
      title: "Email notifications",
      desc: "Receive important updates and alerts via email",
    },
    {
      icon: Smartphone,
      title: "Push notifications",
      desc: "Get browser notifications for real-time updates",
    },
    {
      icon: MessageSquare,
      title: "Weekly digest",
      desc: "Receive a weekly summary of your content performance",
    },
    {
      icon: Globe,
      title: "Marketing emails",
      desc: "Receive tips, tutorials, and product updates",
    },
  ];

  return (
    <div>
      <div className="backdrop-blur-xl border border-border/50 rounded-2xl p-4 shadow-xl border-white/10 ">
        {/* Header */}
        <div className="flex items-center">
          <Bell className="w-5 h-5 mr-2 text-orange-400" />
          <h1 className="text-lg sm:text-2xl font-semibold">
            Notifications & Communication</h1>
        </div>
        <p className="text-gray-500 mb-5 text-sm sm:text-base">
          Choose how and when you want to receive notifications</p>

        {/* Section */}
        <div className="space-y-3">
          {settings.map((item, index) => (
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
    </div >
  )
}

export default Notificationspage