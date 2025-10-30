"use client";

import { motion } from "framer-motion";
import { Sparkles, Zap, TrendingUp, Target, Clock, Users, Play, MessageSquare, Star, Award, MapPin, Mail, ExternalLink, ArrowRight, Calendar, Download } from "lucide-react";
import Link from "next/link";
import Features from "./Features";
import Transform from "./Transform";
import Pricing from "./Pricing";

const HeroSection = () => {
    return (
        <>
            <div className="from-[#ffffff] via-[#ffffff] to-[#ffffff] dark:from-[#0B0F1F] dark:via-[#0A0E1C] dark:to-[#111828] transition-colors duration-500">

                {/* Hero section Powered by Advanced AI Technology */}
                <section className="relative min-h-screen flex flex-col items-center justify-center px-3 sm:px-4 lg:px-8 pt-16 sm:pt-20 pb-12 sm:pb-16">

                    {/* Background Blur Circles */}
                    <div className="absolute inset-0 overflow-hidden">
                        <motion.div
                            animate={{ y: [10, -10, 10], rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 6, repeat: Infinity }}
                            className="absolute top-20 left-10 w-20 h-20 bg-purple-400/20 rounded-full blur-xl"
                        />
                        <motion.div
                            animate={{ y: [-15, 15, -15], rotate: [0, -10, 10, 0] }}
                            transition={{ duration: 8, repeat: Infinity }}
                            className="absolute bottom-20 right-10 w-32 h-32 bg-pink-400/20 rounded-full blur-xl"
                        />
                        <motion.div
                            animate={{ y: [20, -20, 20], rotate: [0, 8, -8, 0] }}
                            transition={{ duration: 7, repeat: Infinity }}
                            className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-400/20 rounded-full blur-xl"
                        />
                    </div>

                    {/* Content */}
                    <div className="relative max-w-7xl mx-auto text-center">
                        {/* Tagline */}
                        <div className="inline-flex items-center px-6 py-3 rounded-full backdrop-blur-xl bg-white-900/20 border border-white/10 shadow-xl mb-8">

                            <Sparkles className="w-5 h-5 mr-2 text-yellow-500" />
                            <span className="text-sm font-medium bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                ✨ Powered by Advanced AI Technology
                            </span>

                        </div>

                        {/* Title */}
                        <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold leading-tight mb-4 sm:mb-6">
                            Generate{" "}
                            <span className="relative inline-block">
                                <span className="bg-linear-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                                    Viral LinkedIn
                                </span>
                                <span className="hidden md:block absolute bottom-4 left-0 w-full h-3 bg-linear-to-r from-purple-500 to-pink-500 rounded-full"></span>
                            </span>
                            <br />
                            Posts in Seconds 🚀
                        </h1>

                        {/* Subtext */}
                        <p className="text-xl sm:text-2xl lg:text-3xl mb-8 max-w-4xl mx-auto leading-relaxed">

                            AI-powered content that drives{" "}
                            <span className="bg-linear-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent font-semibold">
                                engagement
                            </span>
                            , builds your{" "}
                            <span className="bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent font-semibold">
                                personal brand
                            </span>
                            , and grows your professional network.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                            <a
                                href="/register"
                                className="inline-flex items-center justify-center gap-2 bg-linear-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 sm:px-8 py-4 sm:py-6 rounded-xl sm:rounded-2xl text-base sm:text-lg font-semibold shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300"
                            >
                                <Zap className="w-5 h-5 sm:w-6 sm:h-6" />
                                Start Creating Now
                            </a>
                            <a
                                href="#how-it-works"
                                className="inline-flex items-center justify-center gap-2 border border-white/10 backdrop-blur-xl bg-background/60 hover:bg-background/80 hover:border-border px-6 sm:px-8 py-4 sm:py-6 rounded-xl sm:rounded-2xl text-base sm:text-lg font-medium transition-all duration-300"
                            >
                                <Sparkles className="w-5 h-5" />
                                See Demo
                            </a>
                        </div>

                        {/* Features */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto p-6">

                            <FeatureCard
                                icon={<Zap className="w-6 h-6" />}
                                title="Instant Generation"
                                desc="Posts ready in seconds"
                                color="from-yellow-500 to-orange-500"
                            />
                            <FeatureCard
                                icon={<TrendingUp className="w-6 h-6 text-white" />}
                                title="High Engagement"
                                desc="Proven viral patterns"
                                color="from-green-500 to-emerald-500"
                            />
                            <FeatureCard
                                icon={<Sparkles className="w-6 h-6 text-white" />}
                                title="Your Voice"
                                desc="Customizable tone"
                                color="from-purple-500 to-pink-500"
                            />
                        </div>
                    </div>
                </section >

                {/* Demo Card */}
                <div className="my-12 relative">
                    <div className="backdrop-blur-xl bg-white/10 dark:bg-gray-900/10 border border-[#101623] dark:border-gray-700/20 rounded-3xl p-8 shadow-2xl mx-auto max-w-4xl">
                        <div className="h-64 bg-linear-to-r from-purple-100 to-pink-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl flex items-center justify-center">
                            <div className="text-center">
                                <Sparkles className="w-16 h-16 text-purple-500 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2"> AI Dashboard Preview </h3>
                                <p className="text-gray-600 dark:text-gray-400">See your content creation workspace </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Powerful Features */}
                <Features />

                {/* How it works */}
                <Transform />

                {/* pricing */}
                <Pricing />

                {/* Footer page */}
                <footer className="relative overflow-hidden">
                    {/* Background effects */}
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-linear-to-br from-purple-900/10 via-background to-pink-900/10" />
                        <div className="absolute top-20 left-20 w-32 h-32 bg-linear-to-br from-purple-500/5 to-pink-500/5 rounded-full blur-xl animate-float" />
                        <div className="absolute bottom-20 right-20 w-40 h-40 bg-linear-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-xl animate-float-delayed" />
                    </div>

                    <div className="relative z-10">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            {/* Newsletter */}
                            <div className="py-16 border-b border-white/10">
                                <div className="text-center mb-12">
                                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full mb-6">
                                        <Sparkles className="w-4 h-4 text-purple-400" />
                                        <span className="text-sm font-medium text-foreground">
                                            Join 25,000+ content creators
                                        </span>
                                    </div>
                                    <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4 bg-linear-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                                        Ready to Transform Your LinkedIn Presence?
                                    </h2>
                                    <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-8">
                                        Get exclusive content strategies, AI tips, and early access to
                                        new features. No spam, just valuable insights delivered weekly.
                                    </p>
                                </div>

                                <div className="max-w-xl mx-auto">
                                    <div className="flex flex-col sm:flex-row gap-4 p-2 backdrop-blur-xl bg-background/50 border border-white/10 rounded-2xl">
                                        <input
                                            type="email"
                                            placeholder="Enter your email address"
                                            className="flex-1 px-4 py-3 bg-transparent border-0 focus:outline-none focus:ring-0 text-foreground placeholder-foreground/50 rounded-xl"
                                        />
                                        <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-semibold px-6 py-3 rounded-xl bg-linear-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                                            Get Started Free
                                            <ArrowRight className="w-4 h-4 ml-2" />
                                        </button>
                                    </div>
                                    <p className="text-xs text-foreground/50 text-center mt-3">
                                        By subscribing, you agree to our privacy policy. Unsubscribe
                                        anytime.
                                    </p>
                                </div>

                                <div className="flex flex-wrap justify-center gap-4 mt-8">
                                    {[
                                        {
                                            href: "#app",
                                            label: "Download Mobile App",
                                            icon: <Download className="w-4 h-4" />,
                                        },
                                        {
                                            href: "#demo",
                                            label: "Book Demo",
                                            icon: <Play className="w-4 h-4" />,
                                        },
                                        {
                                            href: "#webinar",
                                            label: "Join Webinar",
                                            icon: <Calendar className="w-4 h-4" />,
                                        },
                                        {
                                            href: "#support",
                                            label: "Get Support",
                                            icon: <MessageSquare className="w-4 h-4" />,
                                        },
                                    ].map((item, i) => (
                                        <Link
                                            key={i}
                                            href={item.href}
                                            className="flex items-center gap-2 px-4 py-2 backdrop-blur-sm bg-background/30 border border-white/10 rounded-lg hover:bg-background/50 transition-all duration-200 text-sm text-foreground/80 hover:text-foreground"
                                        >
                                            {item.icon}
                                            {item.label}
                                            <ExternalLink className="w-3 h-3" />
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Stats */}
                            <div className="py-12 border-b border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-8">
                                {[
                                    {
                                        icon: <Users className="w-6 h-6 text-purple-400" />,
                                        title: "25,000+",
                                        desc: "Active Users",
                                    },
                                    {
                                        icon: <MessageSquare className="w-6 h-6 text-purple-400" />,
                                        title: "1.2M+",
                                        desc: "Posts Generated",
                                    },
                                    {
                                        icon: <TrendingUp className="w-6 h-6 text-purple-400" />,
                                        title: "87%",
                                        desc: "Avg. Engagement Boost",
                                    },
                                    {
                                        icon: <Star className="w-6 h-6 text-purple-400" />,
                                        title: "4.9/5",
                                        desc: "Customer Satisfaction",
                                    },
                                ].map((stat, i) => (
                                    <div
                                        key={i}
                                        className="text-center backdrop-blur-sm bg-background/20 border border-white/10 rounded-xl p-6 hover:bg-background/30 transition-all duration-300"
                                    >
                                        <div className="inline-flex items-center justify-center w-12 h-12 bg-linear-to-br from-purple-500/20 to-pink-500/20 rounded-xl mb-4">
                                            {stat.icon}
                                        </div>
                                        <div className="text-2xl font-bold text-foreground mb-1">
                                            {stat.title}
                                        </div>
                                        <div className="text-sm text-foreground/60">{stat.desc}</div>
                                    </div>
                                ))}
                            </div>

                            {/* Company Info */}
                            <div className="py-16 grid grid-cols-1 lg:grid-cols-5 gap-12">
                                <div className="lg:col-span-2">
                                    <Link href="/" className="flex items-center space-x-3 mb-6">
                                        <div className="relative">
                                            <div className="w-12 h-12 bg-linear-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                                                <Zap className="w-7 h-7 text-white" />
                                            </div>
                                            <div className="absolute inset-0 bg-linear-to-br from-purple-500 to-pink-500 rounded-xl blur opacity-50 -z-10 scale-110 animate-pulse" />
                                        </div>
                                        <div>
                                            <span className="text-2xl font-display font-bold bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                                PostGen AI
                                            </span>
                                            <div className="flex items-center gap-2 mt-1">
                                                <span className="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs px-2 py-0.5">
                                                    AI-Powered
                                                </span>
                                                <span className="text-xs px-2 py-0.5 rounded-full border text-foreground">
                                                    Beta
                                                </span>
                                            </div>
                                        </div>
                                    </Link>

                                    <p className="text-foreground/70 mb-6 leading-relaxed">
                                        Empower your LinkedIn presence with AI-generated content that
                                        resonates with your audience. Create engaging posts, build your
                                        personal brand, and grow your professional network effortlessly.
                                    </p>

                                    <div className="flex text-center gap-1 mb-6">
                                        <Badge icon={<Award className="w-4 h-4 mr-2 text-yellow-500" />}
                                            label="Product Hunt #1" />
                                        <Badge icon={<Star className="w-4 h-4 mr-2 text-yellow-500" />} label="Best AI Tool 2024" />
                                        <Badge icon={<Target className="w-4 h-4 mr-2 text-yellow-500" />} label="Editor's Choice" />
                                    </div>

                                    <div className="space-y-3 mb-6 text-sm text-foreground/70">
                                        <Contact icon={<MapPin className="w-4 h-4 mr-2 text-[#C084FC]" />} text="San Francisco, CA & Remote" />
                                        <Contact icon={<Mail className="w-4 h-4 mr-2 text-[#C084FC]" />} text="hello@postgenai.com" />
                                        <Contact icon={<Clock className="w-4 h-4 mr-2 text-[#C084FC]" />} text="24/7 AI Support Available" />
                                    </div>

                                    {/* <div className="flex gap-3">
                                    <Social href="https://twitter.com/postgenai" icon={<Twitter />} color="blue-400" />
                                    <Social href="https://linkedin.com/company/postgenai" icon={<Linkedin />} color="blue-600" />
                                    <Social href="https://github.com/postgenai" icon={<Github />} color="gray-400" />
                                </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </ >
    );
};

// Reusable feature card
const FeatureCard = ({
    icon,
    title,
    desc,
    color,
}: {
    icon: React.ReactNode;
    title: string;
    desc: string;
    color: string;
}) => (
    <motion.div
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="group"
    >
        <div className="backdrop-blur-xl bg-background/40 border border-border rounded-2xl p-6 hover:bg-background/60 transition-all duration-300 shadow-xl">
            <div className="flex items-center justify-center space-x-4">
                <div
                    className={`w-12 h-12 bg-linear-to-r ${color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                    {icon}
                </div>
                <div className="text-left">
                    <h3 className="font-semibold text-foreground group-hover:text-purple-500 transition-colors">
                        {title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{desc}</p>
                </div>
            </div>
        </div>
    </motion.div>
);

const Badge = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
    <div className="flex items-center gap-1 px-3 py-1 bg-linear-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-full text-xs font-medium text-foreground/80">
        {icon}
        {label}
    </div>
);

const Contact = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
    <div className="flex items-center gap-1">
        {icon}
        {text}
    </div>
);

// const Social = ({
//     href,
//     icon,
//     color,
// }: {
//     href: string;
//     icon: React.ReactNode;
//     color: string;
// }) => (
//     <a
//         href={href}
//         target="_blank"
//         rel="noopener noreferrer"
//         className={`w-10 h-10 backdrop-blur-sm bg-background/40 border border-white/10 rounded-xl flex items-center justify-center transition-all duration-300 group hover:text-${color}`}
//     >
//         <span className="text-foreground/60 group-hover:text-current transition-colors">
//             {icon}
//         </span>
//     </a>
// );

export default HeroSection;
