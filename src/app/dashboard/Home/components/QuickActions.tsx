"use client";

import { BarChart3, FileText, Calendar, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

const actions = [
    {
        title: "Generate Post",
        desc: "Create engaging content with AI",
        icon: Sparkles,
        color: "from-pink-500 to-purple-500",
        href: "/dashboard/generate",
    },
    {
        title: "View Analytics",
        desc: "Check your performance",
        icon: BarChart3,
        color: "from-blue-500 to-cyan-500",
        href: "/dashboard/analytics",
    },
    {
        title: "Manage Drafts",
        desc: "Review saved content",
        icon: FileText,
        color: "from-green-500 to-emerald-500",
        href: "/dashboard/drafts",
    },
    {
        title: "Schedule Posts",
        desc: "Plan your content calendar",
        icon: Calendar,
        color: "from-orange-500 to-yellow-500",
        href: "/dashboard",
    },
];

export default function QuickActions() {
    return (
        <section className="mt-10">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg sm:text-2xl font-semibold flex items-center gap-2">
                    Quick Actions <span className="text-yellow-400">⚡</span>
                </h2>
                <button className="text-sm text-gray-500 hover:text-white transition">
                    + Customize
                </button>
            </div>

            {/* Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {actions.map(({ title, desc, icon: Icon, color, href }) => (
                    <Link
                        href={href}
                        key={title}
                        className="group p-5 sm:p-6 rounded-2xl backdrop-blur-xl 
                            bg-lineaar-to-b from-white/3 to-white/1 
                            border border-white/10 
                            shadow-[0_0px_5px_rgba(0,0,0,0.1)] 
                            hover:shadow-[0_6px_25px_rgba(0,0,0,0.3)] 
                            transition-all duration-300 ease-in-out
                            hover:-translate-y-1"
                    >
                        {/* Top Row */}
                        <div className="flex items-center justify-between mb-6">
                            <div
                                className={`w-10 h-10 rounded-xl flex items-center justify-center bg-linear-to-r ${color} shadow-lg`}
                            >
                                <Icon className="w-5 h-5 text-white" />
                            </div>
                            <div className="group-hover:text-white transition">
                                <ArrowRight className="w-5 h-5 text-gray-500" />
                            </div>
                        </div>

                        {/* Text */}
                        <h3 className="text-base font-semibold">
                            {title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-500 mt-1">
                            {desc}
                        </p>
                    </Link>
                ))}
            </div>
        </section>
    );
}
