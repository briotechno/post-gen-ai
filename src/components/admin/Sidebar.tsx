"use client";

import {
    Home,
    FileText,
    BarChart3,
    Settings,
    PenTool,
    Sun,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "../ThemeToggle";

const navItems = [
    { name: "Home", label: "Overview", icon: Home, href: "/dashboard" },
    {
        name: "Generate Post",
        label: "AI Generator",
        icon: PenTool,
        href: "/dashboard/generate",
    },
    {
        name: "Drafts",
        label: "Saved Posts",
        icon: FileText,
        href: "/dashboard/drafts",
    },
    {
        name: "Analytics",
        label: "Performance",
        icon: BarChart3,
        href: "/dashboard/analytics",
    },
    {
        name: "Settings",
        label: "Preferences",
        icon: Settings,
        href: "/dashboard/settings",
    },
];

const Sidebar = () => {
    const pathname = usePathname();

    return (
        <aside className="mt-6 left-2 md:left-4 top-2 md:top-4 bottom-2 md:bottom-4 
      z-40 backdrop-blur-xl bg-white/20 dark:bg-gray-900/20 
      border border-white/30 dark:border-gray-700/30 
      rounded-2xl shadow-2xl overflow-hidden 
      flex flex-col justify-between w-240px md:w-[260px]">
            {/* Top Section */}
            <div className="flex h-full flex-col p-4">
                {/* Logo */}
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                        <div className="relative flex">
                            <div className="flex items-center justify-center">
                                <Link href="/dashboard" className="flex flex-col items-center space-x-3">
                                    <div className="flex">
                                        <div className="relative flex items-center">
                                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-linear-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                                                <div className="w-5 h-5 text-white">✨</div>
                                            </div>
                                            <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full border-2 border-white animate-pulse" />
                                        </div>
                                        <div className="">
                                            <span className="text-lg text-md sm:text-[20px] font-bold bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                                PostGen AI
                                            </span>
                                            <p className="text-xs text-center">Pro Dashboard</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="relative group">
                            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:text-accent-foreground w-8 h-8 rounded-lg bg-background/60 hover:bg-background/80 border border-white/10 transition-all duration-200 shrink-0"></button>
                        </div>

                    </div>
                </div>

                {/* Navigation */}
                <nav className="flex flex-col gap-2">
                    {navItems.map(({ name, label, icon: Icon, href }) => {
                        const isActive = pathname === href;
                        return (
                            <Link
                                key={name}
                                href={href}
                                className={`flex items-center gap-3 py-3 rounded-xl transition-all relative group
                ${isActive
                                        ? "bg-linear-to-r from-pink-500/30 to-purple-500/20 text-pink-400 mx-3"
                                        : "text-gray-400 hover:bg-white/5 hover:text-white"
                                    }`}
                            >
                                <div
                                    className={`p-2 rounded-lg ${isActive
                                        ? "bg-linear-to-br from-pink-500 to-purple-500 text-white"
                                        : "bg-white/5 text-gray-400 group-hover:text-white"
                                        }`}
                                >
                                    <Icon className="w-4 h-4" />
                                </div>
                                <div>
                                    <p className="font-medium">{name}</p>
                                    <p className="text-xs text-gray-500">{label}</p>
                                </div>
                            </Link>
                        );
                    })}
                </nav>
            </div>

            {/* Bottom Section */}
            <div className="space-y-4 p-3">
                {/* Profile */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex items-center gap-3">
                    <div className="w-10 h-10 bg-linear-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center font-bold text-sm">
                        AB
                    </div>
                    <div>
                        <p className="font-medium text-white">abc</p>
                        <p className="text-xs text-green-400">● Pro Plan</p>
                    </div>
                </div>

                {/* Light Mode Toggle */}
                <button className="w-full flex items-center justify-between bg-white/5 border border-white/10 rounded-xl px-4 py-2 hover:bg-white/10 transition">
                    <header className="flex items-center justify-center">
                        {/* Your toggle button */}
                        <span className="text-sm mx-3">Light Mode</span>
                        <ThemeToggle />
                    </header>
                </button>
            </div>
        </aside>
    );
}
export default Sidebar;

