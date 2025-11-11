"use client";

import { User } from 'lucide-react'
import React from 'react'

const Informationpage = () => {
  return (
    <div>
      <div className="backdrop-blur-xl border border-border/50 rounded-2xl p-4 shadow-xl border-white/10 ">
        {/* Header */}
        <div className="flex items-center">
          <User className="w-5 h-5 mr-2 text-blue-400" />
          <h1 className="text-lg sm:text-2xl font-semibold">
            Profile Information</h1>
        </div>
        <p className="text-gray-500 mb-5 text-sm sm:text-base">
          Update your personal information and professional details
        </p>

       {/* Form */}
      <form className="space-y-5">
        {/* Row 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1 font-medium">Full Name *</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full rounded-lg bg-transparent border border-white/10 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm mb-1 font-medium">Email Address *</label>
            <input
              type="email"
              placeholder="john@example.com"
              className="w-full rounded-lg bg-transparent border border-white/10 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1 font-medium">Company</label>
            <input
              type="text"
              placeholder="Tech Innovations Inc."
              className="w-full rounded-lg bg-transparent border border-white/10 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm mb-1 font-medium">Location</label>
            <input
              type="text"
              placeholder="San Francisco, CA"
              className="w-full rounded-lg bg-transparent border border-white/10 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Bio */}
        <div>
          <label className="block text-sm mb-1 font-medium">Professional Bio</label>
          <textarea
            placeholder="Digital Marketing Professional passionate about AI-powered content creation"
            className="w-full rounded-lg bg-transparent border border-white/10 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 min-h-20"
          />
        </div>

        {/* Website */}
        <div>
          <label className="block text-sm mb-1 font-medium">Website URL</label>
          <input
            type="url"
            placeholder="https://johndoe.com"
            className="w-full rounded-lg bg-transparent border border-white/10 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </form>
      </div>
    </div>
  )
}

export default Informationpage