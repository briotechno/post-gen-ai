import ThemeToggle from '@/src/components/ThemeToggle'
import { Monitor, Moon, Palette, Sun } from 'lucide-react'
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react'

const Appearancepage = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      <div className="backdrop-blur-xl border border-border/50 rounded-2xl p-4 shadow-xl border-white/10 ">
        {/* Header */}
        <div className="flex items-center">
          <Palette className="w-5 h-5 mr-2 text-pink-400" />
          <h1 className="text-lg sm:text-2xl font-semibold">
            Appearance & Theme</h1>
        </div>
        <p className="text-gray-500 mb-5 text-sm sm:text-base">
          Customize the look and feel of your dashboard</p>

        {/* Theme Buttons */}
        <h5 className='my-2'>Color Theme</h5>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <button
            onClick={() => setTheme("light")}
            className={`flex flex-col items-center justify-center rounded-xl
               border transition-all duration-200 ${theme === "light"
                ? "bg-linear-to-r from-purple-500 to-pink-500 border border-white/10 shadow-xl hover:bg-white/10 text-white"
                : "bg-transparent border border-white/10 shadow-xl"
              }`}
          >
            <div className="flex items-center">
              <Sun className="w-5 h-5 mx-3" />
              <span className="font-medium">Light</span>
            </div>
          </button>

          <button
            onClick={() => setTheme("dark")}
            className={`flex flex-col items-center justify-center p-4 rounded-xl 
              border transition-all duration-200 ${theme === "dark"
                ? "bg-linear-to-r from-purple-500 to-pink-500 border border-white/10 shadow-xl hover:bg-white/10 text-white"
                : "bg-transparent border border-white/10 shadow-xl"
              }`}
          >
            <div className="flex items-center">
              <Moon className="w-5 h-5 mx-3" />
              <span className="font-medium">Dark</span>
            </div>
          </button>

          <button
            onClick={() => setTheme("system")}
            className={`flex flex-col items-center justify-center p-4 rounded-xl
               border transition-all duration-200 ${theme === "system"
                ? "bg-linear-to-r from-purple-500 to-pink-500 border border-white/10 shadow-xl hover:bg-white/10 text-white"
                : "bg-transparent border border-white/10 shadow-xl"
              }`}
          >
            <div className="flex items-center">
              <Monitor className="w-5 h-5 mx-3" />
              <span className="font-medium">System</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Appearancepage
