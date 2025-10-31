"use client";

import React from 'react'
import { motion } from 'framer-motion'
import { Star, Check, X, Crown, Rocket, Sparkles, Headphones } from 'lucide-react'
import Link from 'next/link'

const plans = [
    {
        name: "Starter",
        icon: <Sparkles className="w-8 h-8 text-white" />,
        gradient: "from-blue-500 to-cyan-500",
        price: "$0",
        subtitle: "Perfect for getting started with AI-powered content",
        period: "/forever",
        button: { label: "Start Free", href: "/register", primary: false },
        features: [
            "5 posts per month",
            "Basic tone options",
            "Standard templates",
            "Email support",
            "Content calendar",
        ],
        notIncluded: [
            "Advanced AI features",
            "Unlimited posts",
            "Priority support",
            "Custom branding",
        ],
    },
    {
        name: "Professional",
        icon: <Crown className="w-8 h-8 text-white" />,
        gradient: "from-purple-500 to-pink-500",
        highlight: "Most Popular",
        price: "$19",
        subtitle: "For professionals who want to scale their content",
        period: "/month",
        button: { label: "Start Pro Trial", href: "/register", primary: true },
        features: [
            "Unlimited posts",
            "Advanced AI tones",
            "Premium templates",
            "Priority support",
            "Analytics dashboard",
            "Content scheduling",
            "Team collaboration",
            "Custom branding",
        ],
    },
    {
        name: "Enterprise",
        icon: <Rocket className="w-8 h-8 text-white" />,
        gradient: "from-emerald-500 to-teal-500",
        price: "Custom",
        subtitle: "For teams and organizations with advanced needs",
        period: "/contact us",
        button: { label: "Contact Sales", href: "/register", primary: false },
        features: [
            "Everything in Pro",
            "Custom AI training",
            "White-label solution",
            "API access",
            "Dedicated support",
            "Custom integrations",
            "Advanced analytics",
            "SAML SSO",
        ],
    },
];

const testimonials = [
    {
        name: "Jack Atkinson",
        role: "Sales Professional at StellarPro",
        text: `"PostGen AI has transformed my LinkedIn strategy. I’ve seen a 300% increase in engagement!"`,
        stars: 5,
    },
    {
        name: "Michael Chen",
        role: "Entrepreneur at StartupHub",
        text: `"The content quality is incredible, and it saves me hours every week on social media planning."`,
        stars: 5,
    },
    {
        name: "Emily Rodriguez",
        role: "Growth Coach at GoalSphere",
        text: `"I’ve increased my leads from my personal brand. Best AI content tool I’ve tried!"`,
        stars: 5,
    },
];

const faqs = [
    {
        q: "How does the AI content generation work?",
        a: "Our AI model analyzes your brand tone, audience, and LinkedIn patterns to create personalized posts that sound authentic and drive engagement.",
    },
    {
        q: "Can I customize the generated content?",
        a: "Absolutely! You can personalize tone, structure, and call-to-actions for all AI-driven posts to match your brand perfectly.",
    },
    {
        q: "Is there a free trial for Pro features?",
        a: "Yes, there’s a 7-day free trial for all our Professional plans so you can test advanced templates and analytics.",
    },
    {
        q: "How does billing work?",
        a: "Billing is monthly or annual. You can upgrade, downgrade, or cancel anytime directly from your dashboard.",
    },
];

const Pricing = () => {
    return (
        <div>
            <section id="pricing" className="py-16 sm:py-20 lg:py-30 px-3 sm:px-6 relative transition-colors duration-500"
            >
                <div className="max-w-7xl mx-auto relative">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-4 ">
                            Simple, Transparent{" "}
                            <span className="bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                Pricing 💎
                            </span>
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-8 px-2">
                            Choose the perfect plan for your content creation needs. Start free and scale as you grow.
                        </p>

                        <div className="flex items-center justify-center gap-4 mb-8 sm:mb-12">
                            <span className='text-sm font-medium transition-colors text-foreground'>Monthly</span>
                            <button className='relative w-12 h-6 rounded-full transition-all duration-300 bg-gray-300 dark:bg-gray-600'>
                                <div className="absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-300 translate-x-0.5"></div>
                            </button>
                            <span className='text-sm font-medium transition-colors text-foreground/60'>Annual</span>
                        </div>
                    </motion.div>

                    {/* Pricing Cards */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                        {plans.map((plan, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className={`relative backdrop-blur-xl border rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 ${plan.highlight
                                    ? "bg-linear-to-br from-purple-500/10 to-pink-500/10 border-purple-500/30 scale-105"
                                    : "bg-white/60 dark:bg-white/5 border-gray-200/30 dark:border-white/10"
                                    }`}
                            >
                                {plan.highlight && (
                                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                        <div className="bg-linear-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                                            <Star className="w-3 h-3" /> {plan.highlight}
                                        </div>
                                    </div>
                                )}

                                <div className="text-center mb-6">
                                    <div
                                        className={`w-16 h-16 bg-linear-to-br ${plan.gradient} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                                    >
                                        {plan.icon}
                                    </div>
                                    <h3 className="text-2xl font-display font-bold mb-2">
                                        {plan.name}
                                    </h3>
                                    <p className="text-sm mb-4">{plan.subtitle}</p>
                                    <div className="flex items-baseline justify-center gap-1">
                                        <span className="text-4xl font-bold">{plan.price}</span>
                                        <span className="">{plan.period}</span>
                                    </div>
                                </div>

                                <ul className="space-y-3 mb-6">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <Check className="w-4 h-4 text-green-500 shrink-0" />
                                            <span className="text-sm ">{feature}</span>
                                        </li>
                                    ))}
                                    {plan.notIncluded &&
                                        plan.notIncluded.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-3">
                                                <X className="w-4 h-4 text-red-500 shrink-0" />
                                                <span className="text-sm text-gray-500 dark:text-gray-500">{feature}</span>
                                            </li>
                                        ))}
                                </ul>

                                <Link
                                    href={plan.button.href}
                                    className={`inline-flex items-center justify-center w-full h-11 text-base font-medium rounded-xl transition-all duration-300 ${plan.button.primary
                                        ? "bg-linear-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg"
                                        : "bg-gray-100 dark:bg-white/10 border border-gray-300 dark:border-white/20 hover:bg-gray-200 dark:hover:bg-white/20 text-gray-900 dark:text-white"
                                        }`}
                                >
                                    {plan.button.label}
                                    {plan.button.primary && <Crown className="w-4 h-4 ml-2" />}
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* Testimonials */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl sm:text-4xl font-display font-bold mb-2">
                            Loved by{" "}
                            <span className="bg-linear-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                                25,000+ Creators
                            </span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                        {testimonials.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white/60 dark:bg-white/5 p-6 shadow-xl hover:shadow-2xl transition-all duration-300"
                            >
                                <div className="flex gap-1 mb-4">
                                    {Array.from({ length: item.stars }).map((_, idx) => (
                                        <Star key={idx} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                    ))}
                                </div>
                                <p className="text-sm leading-relaxed mb-4">{item.text}</p>
                                <div>
                                    <h4 className="font-semibold">{item.name}</h4>
                                    <p className="text-xs text-gray-600 dark:text-gray-400">{item.role}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* FAQ */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-10"
                    >
                        <h2 className="text-3xl sm:text-4xl font-display font-bold mb-2">
                            Frequently Asked{" "}
                            <span className="bg-linear-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                                Questions
                            </span>
                        </h2>
                    </motion.div>

                    <div className="space-y-4 max-w-3xl mx-auto mb-20">
                        {faqs.map((faq, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white/60 dark:bg-white/5 p-6 shadow-xl hover:shadow-2xl transition-all duration-300"
                            >
                                <h4 className="font-semibold mb-2 flex items-center">
                                    {faq.q}
                                </h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">{faq.a}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Final CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-center rounded-3xl border border-purple-500/20 bg-linear-to-r from-purple-500/10 to-pink-500/10 p-10 backdrop-blur-xl"
                    >
                        <h3 className="text-3xl font-display font-bold mb-3">
                            Still have questions?
                        </h3>
                        <p className="mb-6 max-w-xl mx-auto">
                            Our team is here to help you succeed with your LinkedIn content strategy.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/faq"
                                className="px-6 py-3 rounded-xl hover:bg-gray-100
                                 bg-white/5 transition font-medium"
                            >
                                View FAQ
                            </Link>
                            <Link
                                href="/contact"
                                className="px-6 py-3 rounded-xl bg-linear-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white flex items-center justify-center gap-2 shadow-lg"
                            >
                                <Headphones className="w-4 h-4" /> Contact Support
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default Pricing
