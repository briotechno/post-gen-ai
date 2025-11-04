import { FileText, Search, Settings } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen w-full">
      <div className="max-w-7xl mx-auto space-y-10">

        {/* Header Section */}
        <div className="backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-6 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-linear-to-r from-pink-500 to-purple-500 mr-2">
              <Settings className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-display font-bold bg-linear-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Settings
              </h2>
              <p className="text-sm text-gray-400">
                Manage your account settings and customize your AI content generation experience
              </p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex">
            <div className="mt-4 mx-2 sm:mt-0 flex">
              <div className="flex items-center gap-2 px-2 py-1 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md shadow-inner focus-within:border-purple-400 transition">
                <h6 className="text-xs">Pro Plan</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page