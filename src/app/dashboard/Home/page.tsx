import React from 'react'
import { Eye, FileText, Timer, TrendingUp } from 'lucide-react';
import DashboardCard from './components/DashboardCard';
import QuickActions from './components/QuickActions';

const activities: ActivityItem[] = [
    {
        title: "Generated LinkedIn post",
        description: "About AI in marketing trends",
        meta: "24 likes, 5 comments",
        time: "2 minutes ago",
    },
    {
        title: "Saved draft",
        description: "Company culture insights",
        meta: "Ready to publish",
        time: "1 hour ago",
    },
    {
        title: "Published post",
        description: "Weekly industry update",
        meta: "18 likes, 3 shares",
        time: "3 hours ago",
    },
];
interface ActivityItem {
    title: string;
    description: string;
    meta: string;
    time: string;
}
const Homepage = () => {
  return (
    <div className="min-h-screen w-full">
            <div className="max-w-7xl mx-auto space-y-10">
                {/* Welcome Section */}
                <div className="backdrop-blur-xl border border-border/50 rounded-2xl p-4 sm:p-6 shadow-xl border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between">
                    <div>
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-display font-bold bg-linear-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                            Welcome back, <span className="">abc!</span> 👋
                        </h2>
                        <p className="text-sm sm:text-base text-gray-500">
                            Ready to create viral LinkedIn content?
                        </p>
                    </div>
                    <div className="flex">
                        <div className="mt-4 mx-2 sm:mt-0 flex">
                            <div className="flex flex-col">
                                <span className="text-xl font-medium text-end">2.4M</span>
                                <span className="text-sm text-gray-500">Total Reach</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 bg-linear-to-r from-pink-500 to-purple-500 px-2 py-2 rounded-xl">
                            <TrendingUp className="w-6 h-6 text-white m-1" />
                        </div>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <DashboardCard
                        title="AI Posts Generated"
                        value="1,247"
                        change="+23%"
                        icon={TrendingUp}
                        color="from-pink-500 to-purple-500"
                    />
                    <DashboardCard
                        title="Engagement Rate"
                        value="8.4%"
                        change="+0.8%"
                        icon={TrendingUp}
                        color="from-blue-500 to-cyan-500"
                    />
                    <DashboardCard
                        title="Saved Drafts"
                        value="89"
                        change="+12"
                        icon={FileText}
                        color="from-green-500 to-emerald-500"
                    />
                    <DashboardCard
                        title="Time Saved"
                        value="156h"
                        change="+28h"
                        icon={Timer}
                        color="from-orange-500 to-yellow-500"
                    />
                </div>

                {/* Quick Actions */}
                <QuickActions />

                {/*  */}
                <div className="backdrop-blur-xl border border-border/50 rounded-2xl p-4 sm:p-6 shadow-xl border-white/10 mt-10">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold">Recent Activity</h2>
                        <button className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition">
                            <Eye className="w-4 h-4" />
                            View All
                        </button>
                    </div>

                    {/* Activity List */}
                    <div className="space-y-3">
                        {activities.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-start justify-between bg-white/1 hover:bg-white/10 border border-white/10 rounded-xl p-4 transition"
                            >
                                <div>
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                                        <p className="text-sm font-medium">{item.title}</p>
                                    </div>
                                    <p className="text-sm text-gray-400 mt-1">{item.description}</p>
                                    <p className="text-xs text-green-400 mt-1">{item.meta}</p>
                                </div>
                                <p className="text-xs text-gray-500">{item.time}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Homepage
