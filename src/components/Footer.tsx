import { Sparkles, ArrowRight, Download, Play, Calendar, MessageSquare, Link, ExternalLink, Users, TrendingUp, Star, Zap, Award, Target, MapPin, Mail, Clock } from 'lucide-react';
import React from 'react'

const Footer = () => {
    return (
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
    )
}

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
//         className={`w-10 h-10 backdrop-blur-sm bg-background/40 border border-border/50 rounded-xl flex items-center justify-center transition-all duration-300 group hover:text-${color}`}
//     >
//         <span className="text-foreground/60 group-hover:text-current transition-colors">
//             {icon}
//         </span>
//     </a>
// );

export default Footer