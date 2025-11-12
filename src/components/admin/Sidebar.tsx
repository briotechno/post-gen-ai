"use client";
import {
    FileText,
    BarChart3,
    Settings,
    LogOut,
    LayoutDashboard,
    Sparkles,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import ThemeToggle from "../ThemeToggle";
import { useCallback } from "react";

const navItems = [
    { name: "Home", label: "Overview", icon: LayoutDashboard, href: "/dashboard" },
    { name: "Generate Post", label: "AI Generator", icon: Sparkles, href: "/dashboard/generate", },
    { name: "Drafts", label: "Saved Posts", icon: FileText, href: "/dashboard/drafts", },
    { name: "Analytics", label: "Performance", icon: BarChart3, href: "/dashboard/analytics", },
    { name: "Settings", label: "Preferences", icon: Settings, href: "/dashboard/settings", },
];

const Sidebar = () => {
    const pathname = usePathname();
    const router = useRouter();

    const handleLogout = useCallback(() => {
        localStorage.removeItem("authToken");
        sessionStorage.clear();
        router.push("/");
    }, [router]);

    return (
        <aside
            className="
        m-2 sm:m-4 
        left-2 md:left-4 top-2 md:top-4 bottom-2 md:bottom-4 
        z-40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl 
        overflow-hidden flex flex-col justify-between
        transition-all duration-300 
        w-20 md:w-70
      "
        >
            {/* Top Section */}
            <div className="flex items-center justify-center md:justify-between p-4 border-b border-white/10">
                <Link href="/dashboard" className="flex items-center gap-3">
                    <div className="relative flex items-center justify-center">
                        <div className="w-10 h-10 bg-linear-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg shadow-pink-500/20">
                            <span className="text-lg text-white">✨</span>
                        </div>
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-pulse" />
                    </div>
                    {/* Hidden on small screens */}
                    <div className="hidden md:block">
                        <h1 className="text-lg font-bold bg-linear-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                            PostGen AI
                        </h1>
                        <p className="text-xs text-gray-500">Pro Dashboard</p>
                    </div>
                </Link>
            </div>

            {/* Scrollable Middle Section */}
            <div className="flex-1 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                <nav className="flex flex-col gap-1 md:gap-2 p-2 md:p-4">
                    {navItems.map(({ name, label, icon: Icon, href }) => {
                        const isActive = pathname === href;
                        return (
                            <Link
                                key={name}
                                href={href}
                                className={`flex items-center justify-center md:justify-start gap-0 md:gap-3 py-3 px-3 rounded-xl transition-all duration-300
                ${isActive
                                        ? "bg-linear-to-r from-purple-500/20 to-pink-500/30"
                                        : "hover:bg-white/5 hover:text-purple-500"
                                    }`}
                            >
                                <div
                                    className={`p-2 rounded-lg transition-all duration-300
                    ${isActive
                                            ? "bg-linear-to-br from-pink-500 to-purple-500 text-white"
                                            : "text-gray-500"
                                        }`}
                                >
                                    <Icon className="w-5 h-5" />
                                </div>
                                {/* Text hidden on small screens */}
                                <div className="hidden md:block">
                                    <p className="font-medium text-md">{name}</p>
                                    <p className="text-xs text-gray-500">{label}</p>
                                </div>
                            </Link>
                        );
                    })}
                </nav>

                {/* Bottom Section */}
                <div className="p-2 sm:p-3 md:p-4 border-t border-white/10 space-y-2">
                    {/* Profile Card */}
                    <div className="backdrop-blur-xl border border-white/10 bg-linear-to-b from-white/5 to-white/0 shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_6px_25px_rgba(0,0,0,0.3)] transition-all duration-300 ease-in-out rounded-2xl p-2 md:p-3 flex items-center justify-center md:justify-start gap-0 md:gap-3 hover:bg-white/10">
                        {/* Avatar (Always visible) */}
                        <div className="w-10 h-10 bg-[#6366F1] rounded-xl flex items-center justify-center font-bold text-sm text-white">
                            AB
                        </div>

                        {/* Name + Plan (Hidden on mobile) */}
                        <div className="hidden md:block">
                            <h2 className="font-medium">abc</h2>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                <p className="text-xs font-medium text-purple-400">Pro Plan</p>
                            </div>
                        </div>
                    </div>

                    {/* Theme Toggle */}
                    <div className="backdrop-blur-xl border border-white/10 bg-linear-to-b from-white/5 to-white/0 shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_6px_25px_rgba(0,0,0,0.3)] transition-all duration-300 ease-in-out flex items-center justify-center md:justify-between rounded-2xl px-2 md:px-4 py-2 hover:bg-white/10">
                        {/* Icon only on mobile */}
                        <div className="md:hidden">
                            <ThemeToggle />
                        </div>

                        {/* Label + Toggle (Desktop only) */}
                        <div className="hidden md:flex items-center justify-between w-full">
                            <span className="font-medium text-md">Theme</span>
                            <ThemeToggle />
                        </div>
                    </div>

                    {/* Logout Button */}
                    <button
                        type="button"
                        onClick={handleLogout}
                        className="backdrop-blur-xl border border-white/10 bg-linear-to-b from-white/5 to-white/0 shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_6px_25px_rgba(0,0,0,0.3)] transition-all w-full py-2 mt-1 font-medium text-md rounded-xl hover:bg-white/10 flex items-center justify-center md:justify-center gap-0 md:gap-2"
                    >
                        {/* Icon (always visible) */}
                        <LogOut className="w-5 h-5" />
                        {/* Text (desktop only) */}
                        <span className="hidden md:inline">Logout</span>
                    </button>
                </div>

            </div>
        </aside>
    );
};

export default Sidebar;
