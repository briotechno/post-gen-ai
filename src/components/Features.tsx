"use client";
import React from 'react'
import { motion } from "framer-motion";
import { Sparkles, Play, Layers, Monitor, ChevronRight, Check, Rocket, Brain, ChartColumn, PenTool, Target, Clock, RefreshCw, Save, Briefcase, MessageSquare, Zap } from "lucide-react";

const features = [
    {
        title: "Advanced AI Generation",
        subtitle: "GPT-4 Powered Content Engine",
        description:
            "Our cutting-edge AI understands algorithms, trending topics, and best practices to create content that resonates with your audience.",
        bg: "from-purple-500 to-pink-500",
        icon: Brain,
        stats: [
            { value: "97%", label: "accuracy" },
            { value: "2.3s", label: "speed" },
            { value: "4.9/5", label: "satisfaction" },
        ],
        points: [
            "Context-aware content generation",
            "Industry-specific optimization",
            "Real-time trend integration",
        ],
    },
    {
        title: "Smart Tone Adaptation",
        subtitle: "Your Voice, Amplified",
        description:
            "Choose from professional tones or train AI to match your unique voice. Every post sounds authentically you.",
        bg: "from-blue-500 to-cyan-500",
        icon: PenTool,
        stats: [
            { value: "8+", label: "tones" },
            { value: "94%", label: "accuracy" },
            { value: "Custom", label: "voice" },
        ],
        points: [
            "Professional, casual, witty, inspirational",
            "Custom voice training",
            "Tone consistency analysis",
        ],
    },
    {
        title: "Viral Hook Generator",
        subtitle: "Capture Attention Instantly",
        description:
            "Stay ahead with AI-powered hooks that leverage current trends and psychological triggers.",
        bg: "from-green-500 to-emerald-500",
        icon: Target,
        stats: [
            { value: "+87%", label: "engagement" },
            { value: "500+", label: "hooks" },
            { value: "Real-time", label: "trending" },
        ],
        points: [
            "Psychology-based hook formulas",
            "Trending topic integration",
            "A/B tested templates",
        ],
    },
    {
        title: "Performance Analytics",
        subtitle: "Data-Driven Growth",
        description:
            "Get deep insights into what performs best, optimal posting times, and engagement patterns.",
        bg: "from-orange-500 to-red-500",
        icon: ChartColumn,
        stats: [
            { value: "20+", label: "insights" },
            { value: "96%", label: "accuracy" },
            { value: "+156%", label: "growth" },
        ],
        points: [
            "Real-time performance tracking",
            "Audience behavior analysis",
            "Optimal timing suggestions",
        ],
    },
];

const extraFeatures = [
    {
        icon: RefreshCw,
        tag: "Premium",
        title: "Infinite Variations",
        desc: "Generate unlimited versions until you find the perfect post.",
    },
    {
        icon: Save,
        tag: "New",
        title: "Smart Library",
        desc: "Organize, tag, and reuse your best-performing content.",
    },
    {
        icon: Clock,
        tag: "Pro",
        title: "Scheduling Tools",
        desc: "Plan your posts with smart automation and optimal timing.",
    },
    {
        icon: Layers,
        tag: "AI",
        title: "Multi-Platform Sync",
        desc: "Post across LinkedIn, Twitter, and Instagram instantly.",
    },
    {
        icon: RefreshCw,
        tag: "Soon",
        title: "Multi-Platform",
        desc: "Adapt content for LinkedIn, Twitter, and other platforms",
    },
    {
        icon: Save,
        tag: "Enterprise",
        title: "Brand Safety",
        desc: "AI content moderation ensures brand-appropriate messaging",
    },
    {
        icon: Clock,
        tag: "iOS/Android",
        title: "Mobile App",
        desc: "Create and schedule posts on-the-go with our mobile app",
    },
    {
        icon: Layers,
        tag: "Coming Soon",
        title: "Auto-Posting",
        desc: "Schedule and automatically publish at optimal times",
    },
];

const integrations = [
    { name: "LinkedIn", icon: Briefcase, badge: "Live" },
    { name: "Twitter", icon: Briefcase, badge: "Live" },
    { name: "Hootsuite", icon: Briefcase, badge: "Beta" },
    { name: "Buffer", icon: Briefcase, badge: "Beta" },
    { name: "Zapier", icon: Zap, badge: "Soon" },
    { name: "Slack", icon: MessageSquare, badge: "Soon" },
];

const Features = () => {
    return (
        <div>
            <section
                id="features"
                className="relative overflow-hidden py-16 sm:py-20 lg:py-30 px-3 sm:px-6 transition-colors duration-500"
            >

                {/* Background Gradient Overlay */}
                {/* bg-linear-to-r from-[#ffffff] via-background to-[#ffffff]
                dark:from-[#0C0C1E] dark:via-background dark:to-[#0B0E19] */}
                <div className="absolute inset-0" />

                {/* Decorative Glow */}
                <div className="absolute top-20 right-20 w-32 h-32 bg-linear-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-2xl rotate-45" />

                <div className="relative z-10 max-w-7xl mx-auto">
                    {/* Heading Section */}
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full mb-6">
                            <Sparkles className="w-5 h-5 text-purple-500" />
                            <span className="text-sm text-purple-600 dark:text-purple-400">
                                Powerful Features
                            </span>
                        </div>

                        <h2 className="max-w-5xl mx-auto text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                            Everything You Need for{" "}
                            <span className="bg-linear-to-r from-[#A630CD] via-[#CE2C80] to-[#3A5DDE] bg-clip-text text-transparent">
                                Content Success ✨
                            </span>
                        </h2>

                        <p className="text-lg sm:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
                            From AI-powered generation to advanced analytics, we’ve built the
                            complete toolkit for modern content creators.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-wrap justify-center gap-3 mt-8">
                            <button className="inline-flex items-center justify-center gap-2 text-sm font-medium bg-linear-to-b from-purple-500 to-pink-500 text-white h-10 rounded-lg px-4 hover:opacity-90 transition">
                                <Layers className="w-4 h-4" /> Grid View
                            </button>
                            <button className="inline-flex items-center justify-center gap-2 text-sm font-medium border border-border bg-background hover:bg-accent hover:text-accent-foreground h-10 rounded-lg px-4 transition">
                                <Monitor className="w-4 h-4" /> Showcase
                            </button>
                        </div>
                    </motion.div>

                    {/* Feature Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-20">
                        {features.map((feature, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                transition={{ duration: 0.3 }}
                                className="group cursor-pointer"
                            >
                                <div className="relative backdrop-blur-xl bg-background/40 border border-white/10 rounded-3xl p-6 sm:p-8 hover:bg-background/60 transition-all duration-500 shadow-lg overflow-hidden">
                                    <div
                                        className={`absolute inset-0 bg-linear-to-br ${feature.bg} opacity-0 group-hover:opacity-10 transition-opacity`}
                                    />
                                    <div className="relative z-10">
                                        <div className="flex items-start justify-between mb-6">
                                            <div className="flex items-center gap-4">
                                                <div
                                                    className={`w-14 h-14 sm:w-16 sm:h-16 bg-linear-to-br ${feature.bg} rounded-2xl flex items-center justify-center shadow-lg`}
                                                >
                                                    <feature.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                                                </div>
                                                <div>
                                                    <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-purple-500 transition-colors">
                                                        {feature.title}
                                                    </h3>
                                                    <p className="text-sm text-foreground/60">
                                                        {feature.subtitle}
                                                    </p>
                                                </div>
                                            </div>
                                            <ChevronRight className="w-5 h-5 text-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        </div>

                                        <p className="text-foreground/80 mb-6 leading-relaxed">
                                            {feature.description}
                                        </p>

                                        {/* Stats */}
                                        <div className="grid grid-cols-3 gap-4 mb-6">
                                            {feature.stats.map((s, idx) => (
                                                <div key={idx} className="text-center">
                                                    <div className="text-lg font-bold text-foreground">
                                                        {s.value}
                                                    </div>
                                                    <div className="text-xs text-foreground/60 capitalize">
                                                        {s.label}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Points */}
                                        <div className="space-y-2">
                                            {feature.points.map((p, idx) => (
                                                <div
                                                    key={idx}
                                                    className="flex items-center gap-2 text-sm text-foreground/70"
                                                >
                                                    <Check className="w-3 h-3 text-green-500" />
                                                    {p}
                                                </div>
                                            ))}
                                            <div className="text-xs text-foreground/50">
                                                +1 more feature
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Extra Features */}
                    <div className="text-center mb-20">
                        <h3 className="text-2xl sm:text-3xl font-display font-bold mb-4 text-foreground">
                            Plus Many More Powerful Features
                        </h3>
                        <p className="text-foreground/70 max-w-2xl mx-auto mb-10">
                            Everything you need to manage and optimize your content strategy.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-start">
                            {extraFeatures.map((f, i) => (
                                <div
                                    key={i}
                                    className="backdrop-blur-sm bg-background/30 border border-white/10 rounded-xl p-4 hover:bg-background/50 transition-all group"
                                >
                                    <div className="flex items-start justify-between mb-3">
                                        <f.icon className="w-6 h-6 text-purple-500 group-hover:scale-110 transition-transform" />
                                        <div className="inline-flex items-center rounded-full bg-secondary text-secondary-foreground text-xs px-2 py-0.5 font-semibold">
                                            {f.tag}
                                        </div>
                                    </div>
                                    <h4 className="font-semibold text-foreground mb-2 group-hover:text-purple-500 transition-colors">
                                        {f.title}
                                    </h4>
                                    <p className="text-sm text-foreground/70">{f.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Seamless Integrations */}
                    <div className="max-w-7xl mx-auto text-center">

                        {/* Section Heading */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-lg font-semibold text-foreground mb-2">
                                Seamless Integrations
                            </h3>
                            <p className="text-foreground/70 mb-10">
                                Connect with your favorite tools and platforms
                            </p>
                        </motion.div>

                        {/* Integration Icons */}
                        <div className="flex flex-wrap justify-center gap-3 sm:gap-5 mb-16">
                            {integrations.map((item, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.05 }}
                                    className="flex items-center gap-2 px-4 py-2 bg-background/40 border border-white/10 rounded-lg shadow-sm backdrop-blur-sm"
                                >
                                    <item.icon className="w-5 h-5 text-purple-400" />
                                    <span className="text-sm text-foreground font-medium">
                                        {item.name}
                                    </span>
                                    {item.badge && (
                                        <span
                                            className={`text-xs px-2 py-1 rounded-full ${item.badge === "Live"
                                                ? "bg-green-500/20 text-green-400"
                                                : item.badge === "Beta"
                                                    ? "bg-blue-500/20 text-blue-400"
                                                    : "bg-yellow-500/20 text-yellow-400"
                                                }`}
                                        >
                                            {item.badge}
                                        </span>
                                    )}
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                            className="relative bg-linear-to-r from-purple-700/30 via-pink-700/30 to-indigo-700/30 border border-purple-500/10 backdrop-blur-xl p-8 sm:p-10 md:p-12 rounded-3xl shadow-2xl"
                        >
                            <div className="relative z-10 text-center">
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-linear-to-br from-purple-500 to-pink-500 mx-auto mb-5">
                                    <Rocket className="w-6 h-6 text-white" />
                                </div>

                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-linear-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-4">
                                    Ready to Transform Your Content Strategy? 🚀
                                </h2>

                                <p className="text-base sm:text-lg text-foreground/80 mb-8 max-w-xl mx-auto">
                                    Join 25,000+ creators using{" "}
                                    <span className="text-purple-400 font-semibold">PostGen AI</span>{" "}
                                    to grow their personal brands.
                                </p>

                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                    <button className="bg-linear-to-r from-purple-500 to-pink-500 hover:opacity-90 text-white font-medium px-6 py-3 rounded-lg text-sm flex items-center gap-2 transition">
                                        Start Creating for Free →
                                    </button>
                                    <button className="border border-border hover:border-purple-400 text-foreground font-medium px-6 py-3 rounded-lg text-sm flex items-center gap-2 transition">
                                        <Play className="w-4 h-4" /> Watch Demo
                                    </button>
                                </div>

                                <div className="flex flex-wrap justify-center gap-4 text-sm text-foreground/60 mt-8">
                                    <div>✅ No credit card required</div>
                                    <div>✅ Free forever plan</div>
                                    <div>✅ Setup in 2 minutes</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Features
