"use client";

import React, { useState } from "react";
import {
    Eye,
    EyeOff,
    ArrowLeft,
    Sparkles,
    Sun,
    Moon,
} from "lucide-react";
import { ShieldCheck, Star, CheckCircle2, LucideIcon } from "lucide-react";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";

interface FeatureCardProps {
    icon: LucideIcon;
    title: string;
}

const RegisterPage = () => {
    const { theme, setTheme } = useTheme();
    const [showPassword, setShowPassword] = useState(false);
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [checked, setChecked] = useState(false);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const isDisabled = !fullName.trim() || !email.trim() || !password.trim() || !checked;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isDisabled) return;

        setLoading(true);
        console.log("Registering with:", { fullName, email, password });

        setTimeout(() => {
            router.push("/dashboard");
        }, 2000);
    };

    const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title }) => (
        <div
            className="flex flex-col items-center justify-center border border-white/10 rounded-xl mb-5 px-6 py-5  hover:border-purple-500/40 hover:scale-105 transition-all duration-300 ease-out"
        >
            <Icon className="w-6 h-6 text-purple-400 mb-2" />
            <span className="text-sm font-medium">{title}</span>
        </div>
    );

    return (

        <div className="min-h-screen relative bg-background">
            {/* ===== Navbar ===== */}
            <nav className="fixed top-2 sm:top-4 left-2 sm:left-4 right-2 sm:right-4 z-50 
        backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl shadow-2xl">
                <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-14 sm:h-16">
                        <Link href="/" className="flex items-center space-x-3">
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
                            className="px-3 sm:px-4 py-2 rounded-xl font-medium border border-white/10 shadow-xl hover:bg-white/80 dark:hover:bg-gray-700 transition"
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
            <main className="mt-12 px-4 sm:px-6 relative">
                <div className="min-h-screen flex items-center justify-center py-8 sm:py-12">
                    {/* Background Effects */}
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-400/20 rounded-full blur-xl"></div>
                        <div className="absolute bottom-20 right-10 w-32 h-32 bg-pink-400/20 rounded-full blur-xl"></div>
                        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-400/20 rounded-full blur-xl"></div>
                    </div>

                    {/* ===== Register Card ===== */}
                    <div className="relative z-10 w-full max-w-md">
                        <div className="mb-6">
                            <Link
                                href="/"
                                className="inline-flex items-center gap-2 hover:text-foreground transition-colors duration-200"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                Back to home
                            </Link>
                        </div>

                        <div className="backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl">
                            <div className="text-center mb-8">
                                <div className="w-16 h-16 bg-linear-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-500/25">
                                    <Sparkles className="w-8 h-8 text-white" />
                                </div>
                                <h1 className="text-2xl font-bold text-foreground mb-2">
                                    Create your account
                                </h1>
                                <p className="text-foreground/70">
                                    Join thousands of content creators
                                </p>
                            </div>

                            {/* Boxs */}
                            <div className="flex flex-wrap justify-between mt-8">
                                <FeatureCard icon={ShieldCheck} title="Secure" />
                                <FeatureCard icon={Star} title="Trusted" />
                                <FeatureCard icon={CheckCircle2} title="Free" />
                            </div>


                            {/* ===== Register Form ===== */}
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Full name */}
                                <div className="space-y-2">
                                    <label
                                        htmlFor="fullName"
                                        className="text-sm font-medium text-foreground"
                                    >
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                        placeholder="Enter your full name"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                                        required
                                    />
                                </div>

                                {/* Email */}
                                <div className="space-y-2">
                                    <label
                                        htmlFor="email"
                                        className="text-sm font-medium text-foreground"
                                    >
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="you@example.com"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700
                                        focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                                        required
                                    />
                                </div>

                                {/* Password */}
                                <div className="space-y-2">
                                    <label
                                        htmlFor="password"
                                        className="text-sm font-medium text-foreground"
                                    >
                                        Password
                                    </label>
                                    <div className="relative">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            id="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="Create a strong password"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
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

                                {/* Terms Checkbox */}
                                <div className="flex items-start gap-2 pt-1">
                                    <input
                                        type="checkbox"
                                        id="terms"
                                        checked={checked}
                                        onChange={(e) => setChecked(e.target.checked)}
                                        className="mt-1 accent-purple-500 cursor-pointer"
                                    />
                                    <label
                                        htmlFor="terms"
                                        className="text-sm text-foreground/70 leading-snug"
                                    >
                                        I agree to the{" "}
                                        <a
                                            href="#"
                                            className="text-purple-500 hover:text-purple-600 dark:text-purple-400 dark:hover:text-purple-300 underline"
                                        >
                                            Terms of Service
                                        </a>{" "}
                                        and{" "}
                                        <a
                                            href="#"
                                            className="text-purple-500 hover:text-purple-600 dark:text-purple-400 dark:hover:text-purple-300 underline"
                                        >
                                            Privacy Policy
                                        </a>
                                    </label>
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    disabled={isDisabled || loading}
                                    className={`inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium px-4 py-2 w-full h-12 rounded-xl shadow-lg transition-all duration-300 ${isDisabled || loading
                                        ? "bg-linear-to-r from-purple-500 to-pink-500 text-white/70 cursor-not-allowed"
                                        : "bg-linear-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-purple-500/25 hover:shadow-purple-500/40"
                                        }`}
                                >
                                    Create account
                                </button>
                            </form>

                            {/* ===== Loading Overlay ===== */}
                            {loading && (
                                <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#111828] transition-all duration-500">

                                    <div className="relative w-16 h-16 flex items-center justify-center animate-spin-slow">
                                        {/* Gradient Ring */}
                                        <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,var(--color-pink-500),var(--color-purple-500),var(--color-pink-500))] p-3 [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] mask-exclude animate-spin" />

                                        {/* Inner Circle */}
                                        <div className="relative w-14 h-14 rounded-full bg-[#0B1126] flex items-center justify-center shadow-[0_0_15px_rgba(236,72,153,0.25)] animate-spin">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-5 h-5 text-pink-400"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M13 10V3L4 14h7v7l9-11h-7z"
                                                />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Loading Text */}
                                    <div className="mt-4 flex items-center gap-2 text-white/90 font-medium">
                                        <span>Loading...</span>
                                        <Sparkles className="w-5 h-5 text-purple-500 animate-pulse" />
                                    </div>
                                </div>
                            )}

                            {/* Divider */}
                            <div className="flex items-center my-6">
                                <div className="flex-1 h-px bg-gray-300 dark:bg-gray-700" />
                                <span className="px-4 text-gray-500 dark:text-gray-400 text-sm">
                                    or
                                </span>
                                <div className="flex-1 h-px bg-gray-300 dark:bg-gray-700" />
                            </div>

                            {/* Google Sign-in */}
                            <button
                                type="button"
                                className="inline-flex items-center justify-center gap-2 border border-gray-200 dark:border-gray-700 rounded-xl text-sm font-medium px-4 py-2 w-full h-12 bg-background hover:bg-background/80 transition-all duration-200"
                            >
                                <svg
                                    className="w-5 h-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 48 48"
                                >
                                    <path
                                        fill="#EA4335"
                                        d="M24 9.5c3.94 0 7.04 1.63 9.16 3.02l6.85-6.85C35.91 2.35 30.35 0 24 0 14.6 0 6.49 5.44 2.54 13.36l7.94 6.17C12.54 13.09 17.83 9.5 24 9.5z"
                                    />
                                    <path
                                        fill="#34A853"
                                        d="M46.15 24.56c0-1.49-.13-2.9-.37-4.28H24v8.1h12.45c-.53 2.7-2.11 5-4.45 6.54l7.02 5.45c4.11-3.8 7.13-9.4 7.13-15.81z"
                                    />
                                    <path
                                        fill="#4A90E2"
                                        d="M9.83 28.19A14.46 14.46 0 0 1 8.9 24c0-1.45.25-2.85.69-4.19l-7.94-6.17A23.996 23.996 0 0 0 0 24c0 3.86.9 7.51 2.54 10.81l7.29-6.62z"
                                    />
                                    <path
                                        fill="#FBBC05"
                                        d="M24 48c6.35 0 11.7-2.09 15.6-5.69l-7.02-5.45c-2.02 1.36-4.6 2.14-8.58 2.14-6.17 0-11.46-3.59-13.52-8.88l-7.94 6.17C6.49 42.56 14.6 48 24 48z"
                                    />
                                </svg>
                                Continue with Google
                            </button>

                            {/* Login Link */}
                            <div className="text-center mt-6">
                                <p className="text-foreground/70">
                                    Already have an account?{" "}
                                    <Link
                                        href="/login"
                                        className="text-purple-500 hover:text-purple-600 dark:text-purple-400 dark:hover:text-purple-300 font-medium"
                                    >
                                        Sign in
                                    </Link>
                                </p>
                            </div>

                            {/* Demo Info */}
                            <div className="mt-6 p-4 bg-muted/50 rounded-xl border border-gray-200 dark:border-gray-700">
                                <p className="text-sm text-foreground/70 text-center">
                                    Demo: Use any valid email and password to register
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default RegisterPage;
