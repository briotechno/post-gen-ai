"use client";

import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
    const toggleMenu = () => setMenuOpen(!menuOpen);

    const navLinks = [
        { label: "Features", href: "#features" },
        { label: "How it Works", href: "#how-it-works" },
        { label: "Pricing", href: "#pricing" },
    ];

    return (
        <nav className="fixed top-2 sm:top-4 left-2 sm:left-4 right-2 sm:right-4 z-50 
        backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl shadow-2xl 
        ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-14 sm:h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-3">
                        <div className="relative">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-linear-to-r from-purple-500 to-pink-500 
                  rounded-xl flex items-center justify-center shadow-lg">
                                <div className="w-5 h-5 text-white">✨</div>
                            </div>
                            <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 
                  rounded-full border-2 border-white animate-pulse" />
                        </div>
                        <span className="text-lg text-md sm:text-[20px] font-bold bg-linear-to-r from-purple-600 to-pink-600 
                bg-clip-text text-transparent">
                            PostGen AI
                        </span>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="font-medium text-md md:text-[12px] lg:text-[16px] hover:text-purple-500 transition"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Right Actions */}
                    <div className="flex items-center gap-3">
                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-xl border border-white/10 shadow-xl hover:bg-white/70 
                  dark:hover:bg-gray-800/70 transition"
                        >
                            {theme === "light" ? (
                                <Sun className="w-5 h-5 text-gray-800" />
                            ) : (
                                <Moon className="w-5 h-5 text-gray-200" />
                            )}
                        </button>

                        {/* Desktop Buttons */}
                        <div className="hidden sm:flex gap-3">
                            <Link
                                href="/login"
                                className="px-4 py-2 text-sm rounded-xl border border-white/10 shadow-xl 
                    hover:text-purple-500 hover:bg-white/80 dark:hover:bg-gray-700/80 transition"
                            >
                                Sign In
                            </Link>
                            <Link
                                href="/register"
                                className="px-4 py-2 text-sm rounded-xl bg-linear-to-r from-purple-500 to-pink-500 
                    text-white shadow-lg hover:from-purple-600 hover:to-pink-600 transition"
                            >
                                Get Started ✨
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={toggleMenu}
                            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl 
                  bg-white/40 dark:bg-gray-800/40 border border-gray-300 dark:border-gray-700 
                  hover:bg-white/60 dark:hover:bg-gray-700/60 transition"
                        >
                            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="md:hidden mt-3 border-t border-white/10 pt-4 pb-6 bg-white/70 
              dark:bg-gray-900/60 rounded-xl shadow-lg backdrop-blur-md animate-slideDown">
                        <div className="flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="font-medium text-sm hover:text-purple-500 transition text-center"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <div className="flex flex-col gap-3 mt-4">
                                <Link
                                    href="/login"
                                    onClick={() => setMenuOpen(false)}
                                    className="px-4 py-2 text-sm rounded-xl border border-white/10 shadow-xl 
                      text-center hover:text-purple-500 hover:bg-white/80 dark:hover:bg-gray-700/80 transition"
                                >
                                    Sign In
                                </Link>
                                <Link
                                    href="/register"
                                    onClick={() => setMenuOpen(false)}
                                    className="px-4 py-2 text-sm rounded-xl bg-linear-to-r from-purple-500 to-pink-500 
                      text-white shadow-lg hover:from-purple-600 hover:to-pink-600 transition text-center"
                                >
                                    Get Started ✨
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
