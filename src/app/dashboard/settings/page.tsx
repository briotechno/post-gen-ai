"use client";

import React, { useState } from 'react'
import { CircleAlert, Gem, LogOut, Save, Settings } from 'lucide-react'
import Informationpage from './components/Information/page'
import Appearancepage from './components/Appearance/page'
import Notificationspage from './components/Notifications/page'
import Privacypage from './components/Privacy/page'
import AccountManagementpage from './components/AccountManagement/page'
import ContentGenerationpage from './components/ContentGeneration/page'

const page = () => {
  const [tone, setTone] = useState("");

  return (
    <div className="min-h-screen w-full">
      <div className="max-w-7xl mx-auto space-y-5">

        {/* Header Section */}
        <div className="backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-6 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-linear-to-r from-pink-500 to-purple-500 mr-2">
              <Settings className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-display font-bold bg-linear-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Settings
                </h2>
                <span className="flex items-center text-[10px] bg-gray-500 text-white rounded-full p-1 ml-2">
                  <CircleAlert className="w-4 h-4 mr-2" />
                  Unsaved
                </span>
              </div>

              <p className="text-sm text-gray-400">
                Manage your account settings and customize your AI content generation experience
              </p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex">
            <div className="mt-4 mx-2 sm:mt-0 flex">
              <div className="flex items-center gap-2 px-2 py-1 rounded-xl border border-white/10 backdrop-blur-md shadow-inner focus-within:border-purple-400 transition">
                <h6 className="flex items-center text-[10px] text-white rounded-full ml-2">
                  <Gem className="w-4 h-4 mr-2 text-yellow-500" />
                  Pro Plan
                </h6>
              </div>
            </div>
          </div>
        </div>

        {/* Informationpage */}
        <Informationpage />

        {/* Appearancepage */}
        <Appearancepage />

        {/* ContentGenerationpage */}
        <ContentGenerationpage />

        {/* Notificationspage */}
        <Notificationspage />

        {/* Privacypage */}
        <Privacypage />

        {/* AccountManagementpage */}
        <AccountManagementpage />

        {/* Last Button */}
        <div className="border-t border-white/10" />
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="flex items-center justify-center gap-2 text-white bg-linear-to-r from-purple-500 to-pink-500 border border-white/10 
          shadow-xl hover:bg-white/10 font-medium px-5 rounded-lg transition-all duration-200">
            <Save className="w-5 h-5" />
            Save All Changes
          </button>
          <button className="flex items-center justify-center gap-2 border border-red-500/50 text-red-400 hover:bg-red-500/10 font-medium py-3 px-5 rounded-lg transition-all duration-200">
            <LogOut className="w-5 h-5" />
            Sign Out
          </button>
        </div>
      </div>
    </div>
  )
}

export default page