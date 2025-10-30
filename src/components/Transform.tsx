"use client";
import React from 'react'
import { motion } from "framer-motion";
import { Sparkles, Play, ChevronRight, Clock, Zap, BarChart3, PenLine, Share2, TrendingUp, Users, CheckCircle } from "lucide-react";

const steps = [
    {
        id: "01",
        time: "5 seconds",
        title: "Describe Your Vision",
        subtitle: "Tell us your story",
        description:
            "Whether you want to share industry insights, celebrate achievements, or engage your network, simply describe what you want to communicate. Our intelligent system captures your intent and style preferences.",
        example: `"Type: ‘Share insights about AI in marketing’ + Professional tone"`,
        color: "from-purple-500 to-pink-500",
        icon: <PenLine className="w-8 h-8 text-white" />,
        features: [
            "Natural language input",
            "Tone & personality selection",
            "Industry-specific keywords",
            "Content type optimization"
        ],
    },
    {
        id: "02",
        time: "15 seconds",
        title: "AI Works Its Magic",
        subtitle: "Advanced intelligence at work",
        description:
            "Our GPT-4 powered engine analyzes millions of successful posts, current trends, and your industry to craft engaging, personalized content that resonates.",
        example: `"AI generates 3 unique variations with hashtags & CTAs"`,
        color: "from-blue-500 to-cyan-500",
        icon: <Zap className="w-8 h-8 text-white" />,
        features: [
            "GPT-4 powered generation",
            "Real-time trend analysis",
            "Engagement optimization",
            "Audience targeting",
        ],
    },
    {
        id: "03",
        time: "10 seconds",
        title: "Polish & Go Viral",
        subtitle: "Perfect and publish",
        description:
            "Review your AI-generated content, make any tweaks, and publish directly or save for later. Track performance and iterate for maximum impact.",
        example: `"Copy, schedule, or publish with engagement tracking"`,
        color: "from-green-500 to-emerald-500",
        icon: <Share2 className="w-8 h-8 text-white" />,
        features: [
            "One-click copy to clipboard",
            "Smart scheduling",
            "Performance analytics",
            "Version management",
        ],
    },
];

const step = [
    { id: 1, text: "Input your idea" },
    { id: 2, text: "AI processes & analyzes" },
    { id: 3, text: "Review & customize" },
];

const stats = [
    {
        icon: <Clock className="w-6 h-6 text-white" />,
        value: "30s",
        label: "Average time to create",
    },
    {
        icon: <TrendingUp className="w-6 h-6 text-white" />,
        value: "87%",
        label: "Engagement increase",
    },
    {
        icon: <Users className="w-6 h-6 text-white" />,
        value: "25K+",
        label: "Happy creators",
    },
    {
        icon: <BarChart3 className="w-6 h-6 text-white" />,
        value: "1M+",
        label: "Posts generated",
    },
];

const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
};

const Transform = () => {
    return (
        <div>
            <section id="how-it-works" className=" 
            py-16 sm:py-20 lg:py-30 px-3 sm:px-6 relative overflow-hidden
            ">
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-20 left-10 w-32 h-32 bg-linear-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl" />
                    <div className="absolute bottom-20 right-10 w-40 h-40 bg-linear-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-linear-to-br from-green-400/10 to-emerald-400/10 rounded-full blur-3xl" />
                </div>
                <div className="max-w-7xl mx-auto relative">
                    {/* Heading */}
                    <motion.div
                        className="text-center mb-16 sm:mb-20"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full mb-6">
                            <Sparkles className="w-5 h-5 text-purple-500" />
                            <span className="text-sm text-purple-600 dark:text-purple-400">
                                Transform Your LinkedIn Presence
                            </span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold mb-6">
                            From Idea to{" "}
                            <span className='relative inline-block'>

                                <span className="bg-linear-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                                    Viral Content
                                </span>
                                <div className="absolute bottom-2 left-0 h-3 bg-linear-to-r from-purple-500/30 to-pink-500/30 rounded-full"></div>
                            </span>
                            <br />
                            <span className="text-foreground/80">in 3 Simple Steps</span>
                        </h2>
                    </motion.div>

                    <p className="text-lg sm:text-xl md:text-2xl text-foreground/70 max-w-4xl mx-auto leading-relaxed mb-8">Our AI-powered platform transforms your ideas into engaging LinkedIn posts that drive real results in under 30 seconds.</p>

                    <div className="max-w-5xl mx-auto px-6 flex flex-wrap justify-center items-center gap-6 sm:gap-10 mb-16">
                        {step.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="flex items-center gap-4"
                            >
                                {/* Step Bubble */}
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-12 h-12 bg-linear-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold mb-2 mx-auto">
                                        {step.id}
                                    </div>

                                    <p className="text-[10px] sm:text-base text-gray-400 mt-3 max-w-[140px]">
                                        {step.text}
                                    </p>
                                </div>

                                {/* Arrow (hide after last step) */}
                                {index < steps.length - 1 && (
                                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
                                )}

                                {/* {index < steps.length - 1 && (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-right w-5 h-5 text-foreground/40"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                                )} */}
                            </motion.div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                variants={fadeInUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="relative  blur-4xl hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] backdrop-blur-xl border rounded-3xl p-8 h-full transition-all duration-500 bg-linear-to-br from-purple-500/5 to-pink-500/5 border-purple-500/30 shadow-2xl shadow-purple-500/10"
                            >
                                {/* Number + Time badge */}
                                <div className="absolute -top-5 left-0 right-0 flex items-center justify-between px-6">
                                    {/* Step Number */}
                                    <div
                                        className={`w-10 h-10 bg-linear-to-br ${step.color} rounded-full flex items-center justify-center text-white font-bold text-sm border-4 border-[#0b0d1a]`}
                                    >
                                        {step.id}
                                    </div>

                                    {/* Time Badge */}
                                    <div className="flex items-center gap-1 text-xs text-purple-600  bg-linear-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full px-3 py-1 backdrop-blur-sm dark:text-purple-400">
                                        <Clock className="w-3 h-3" />
                                        {step.time}
                                    </div>
                                </div>

                                {/* Icon */}
                                <div
                                    className={`w-16 h-16 bg-linear-to-br ${step.color} rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                                >
                                    {step.icon}
                                </div>

                                {/* Content */}
                                <div className="text-center">
                                    <h3 className="text-2xl font-semibold  mb-1">
                                        {step.title}
                                    </h3>
                                    <h4 className="text-sm font-medium text-indigo-400 mb-4">
                                        {step.subtitle}
                                    </h4>
                                    <p className="text-sm leading-relaxed mb-6">
                                        {step.description}
                                    </p>

                                    {/* Example box */}
                                    <div className="text-start bg-muted/30 rounded-xl p-4 mb-6 border border-white/30 text-xs text-gray-400  italic">
                                        <div className="text-xs font-medium text-foreground/60 mb-2 uppercase tracking-wide">
                                            EXAMPLE<br />
                                        </div>
                                        {step.example}
                                    </div>

                                    {/* Features */}
                                    <ul className="text-sm space-y-2 text-left">
                                        {step.features.map((f: any, i) => (
                                            <li key={i} className="flex items-center gap-2">
                                                <div
                                                    className={`w-2.5 h-2.5 rounded-full bg-linear-to-br ${step.color}`}
                                                ></div>
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Trusted by contant */}
                <section className="relative py-20 text-center">
                    <div className="max-w-7xl mx-auto">
                        {/* Stats Box */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative py-5 rounded-3xl border border-white/10 bg-linear-to-r from-[#1B162E] via-[#25162A] to-[#1C203E] blur-4xl shadow-[0_0_30px_rgba(0,0,0,0.3)] overflow-hidden"
                        >
                            <h3 className="text-white text-xl md:text-2xl font-semibold mb-10">
                                Trusted by Content Creators Worldwide
                            </h3>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                                {stats.map((stat, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ scale: 1.05 }}
                                        className="flex flex-col items-center"
                                    >
                                        <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4 shadow-lg">
                                            {stat.icon}
                                        </div>
                                        <h4 className="text-white text-2xl font-semibold">{stat.value}</h4>
                                        <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* CTA Buttons */}
                        <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-4">
                            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary hover:bg-primary/90 h-11 bg-linear-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 hover:shadow-xl transition-all duration-300 font-semibold px-8 py-4 rounded-2xl shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 text-lg">
                                🚀 Start Creating Now
                            </button>

                            <button className="backdrop-blur-xl bg-background/60 border border-white/10 hover:bg-background/80 hover:border-border transition-all duration-300 text-foreground font-semibold px-8 py-4 rounded-2xl text-lg flex items-center gap-2">
                                <Play className="w-4 h-4" />
                                Watch Demo
                            </button>
                        </div>

                        {/* Footer note */}
                        <p className="text-gray-500 text-xs mt-4">
                            No credit card required • 5 free posts to get started
                        </p>
                    </div>
                </section>
            </section>
        </div>
    )
}

export default Transform