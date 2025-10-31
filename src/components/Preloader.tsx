"use client";

import React, { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";
import Navbar from "./Navbar";

export default function Preloader({ onFinish }: { onFinish: () => void }) {
    const [progress, setProgress] = useState(0);
    const [shouldShow, setShouldShow] = useState(true);

    useEffect(() => {
        // 🔹 Show loader only if not shown before (this session)
        const hasShown = sessionStorage.getItem("preloaderShown");

        if (hasShown) {
            // skip loader
            onFinish();
            return;
        }

        // mark as shown
        sessionStorage.setItem("preloaderShown", "true");
        setShouldShow(true);

        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        setShouldShow(false);
                        onFinish();
                    }, 200);
                    return 100;
                }
                return prev + 7;
            });
        }, 80);

        return () => clearInterval(interval);
    }, [onFinish]);

    if (!shouldShow) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-linear-to-b from-[#050510] via-[#0B0B1E] to-[#120E25] text-white">
            <Navbar />
            <div className="flex flex-col items-center justify-center px-8 py-10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
                {/* App Icon */}
                <div className="w-20 h-20 flex items-center justify-center rounded-2xl mb-6 bg-linear-to-br from-fuchsia-600 via-pink-500 to-purple-500 shadow-[0_0_30px_-5px_rgba(236,72,153,0.7)]">
                    <Sparkles className="w-10 h-10 text-white drop-shadow-lg" />
                </div>

                {/* App Title */}
                <h1 className="text-3xl font-semibold bg-linear-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-4">
                    PostGen AI
                </h1>

                {/* Loader Circle */}
                <div className="relative w-16 h-16 flex items-center justify-center animate-spin-slow mb-4">
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

                {/* Loading text */}
                <p className="text-sm text-gray-400 flex items-center gap-1">
                    Loading your experience...
                    <Sparkles className="w-4 h-4 text-pink-400 animate-pulse" />
                </p>

                {/* Dots */}
                <div className="flex justify-center mt-4 gap-2">
                    <span className="w-2 h-2 rounded-full bg-pink-500 animate-bounce" />
                    <span
                        className="w-2 h-2 rounded-full bg-purple-500 animate-bounce"
                        style={{ animationDelay: "150ms" }}
                    />
                    <span
                        className="w-2 h-2 rounded-full bg-fuchsia-500 animate-bounce"
                        style={{ animationDelay: "300ms" }}
                    />
                </div>
            </div>
        </div>
    );
}
