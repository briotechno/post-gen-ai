"use client";

import React, { useState } from "react";
import { Eye, EyeOff, ArrowLeft, Sparkles, Sun, Moon, Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";

const LoginPage = () => {
    const { theme, setTheme } = useTheme();
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const isDisabled = !email.trim() || !password.trim();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isDisabled) return;

        setLoading(true);
        console.log("Logging in with:", { email, password });

        setTimeout(() => {
            router.push("/");
        }, 2000); // simulate login delay
    };

    return (
        <div className="min-h-screen relative">
            {/* ===== Navbar ===== */}
            <nav className="fixed top-2 sm:top-4 left-2 sm:left-4 right-2 sm:right-4 z-50 backdrop-blur-xl bg-white/20 dark:bg-gray-900/20 border border-white/30 dark:border-gray-700/30 rounded-xl sm:rounded-2xl shadow-2xl">
                <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-14 sm:h-16">
                        <Link href="/login" className="flex items-center space-x-3">
                            <div className="relative">
                                <div className="w-10 h-10 bg-linear-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                                    <Sparkles className="w-5 h-5 text-white" />
                                </div>
                                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-900 animate-pulse" />
                            </div>
                            <span className="text-xl font-bold bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                PostGen AI
                            </span>
                        </Link>

                        {/* Theme Toggle */}
                        <button
                            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                            className="px-4 mx-4 py-2 rounded-xl font-medium hover:text-purple-500 border border-white/10 shadow-xl hover:bg-white/80 dark:hover:bg-gray-700 transition"
                        >
                            {theme === "light" ? (
                                <Sun className="w-5 h-5 text-gray-800" />
                            ) : (
                                <Moon className="w-5 h-5 text-gray-200" />
                            )}
                        </button>
                    </div>
                </div>
            </nav>

            {/* ===== Main Section ===== */}
            <main className="pt-24 px-4 sm:px-6">
                <div className="min-h-screen flex items-center justify-center px-3 sm:px-4 py-8 sm:py-12">
                    {/* Background Effects */}
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-400/20 rounded-full blur-xl"></div>
                        <div className="absolute bottom-20 right-10 w-32 h-32 bg-pink-400/20 rounded-full blur-xl"></div>
                        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-400/20 rounded-full blur-xl"></div>
                    </div>

                    {/* ===== Login Card ===== */}
                    <div className="relative z-10 w-full max-w-md">
                        <div className="mb-6">
                            <a href="/" className="inline-flex items-center gap-2 hover:text-foreground transition-colors duration-200">
                                <ArrowLeft className="w-4 h-4" />
                                Back to home
                            </a>
                        </div>

                        <div className="backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl">
                            <div className="text-center mb-8">
                                <div className="w-16 h-16 bg-linear-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-500/25">
                                    <Sparkles className="w-8 h-8 text-white" />
                                </div>
                                <h1 className="text-2xl font-bold text-foreground mb-2">Welcome Back</h1>
                                <p className="text-foreground/70">Sign in to your account</p>
                            </div>

                            {/* ===== Login Form ===== */}
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Email */}
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="you@example.com"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                                        required
                                    />
                                </div>

                                {/* Password */}
                                <div className="space-y-2">
                                    <label htmlFor="password" className="text-sm font-medium text-foreground">
                                        Password
                                    </label>
                                    <div className="relative">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            id="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="••••••••"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                                            required
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute inset-y-0 right-3 flex items-center text-gray-500 dark:text-gray-400"
                                        >
                                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                        </button>
                                    </div>
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    disabled={isDisabled || loading}
                                    className={`inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm px-4 py-2 w-full h-12 font-medium rounded-xl shadow-lg transition-all duration-300 ${isDisabled || loading
                                        ? "bg-linear-to-r from-purple-500 to-pink-500 text-white/70 cursor-not-allowed"
                                        : "bg-linear-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-purple-500/25 hover:shadow-purple-500/40"
                                        }`}
                                >
                                    {loading ? (
                                        <>
                                            <Loader2 className="w-4 h-4 animate-spin" />
                                            Logging in...
                                        </>
                                    ) : (
                                        "Sign In"
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>

            {/* ===== Loading Overlay (appears during redirect) ===== */}
            {loading && (
                <div className="fixed inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center z-9999 transition-opacity">
                    <div className="w-14 h-14 border-4 border-t-transparent border-purple-500 rounded-full animate-spin mb-4"></div>
                    <p className="text-white text-lg font-medium">Logging...</p>
                </div>
            )}
        </div>
    );
};

export default LoginPage;
