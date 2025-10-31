
import React from 'react'
import DashboardCard from './components/DashboardCard';
import QuickActions from './components/QuickActions';

const dashboardpage = () => {
    return (
        <div className="min-h-screen w-full bg-[#0e0e12] text-white px-6">
            <div className="max-w-7xl mx-auto space-y-10">
                {/* Welcome Section */}
                <div className="bg-linear-to-r from-purple-800/30 via-pink-800/20 to-purple-900/10 border border-white/10 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between">
                    <div>
                        <h2 className="text-2xl font-semibold mb-2">
                            Welcome back, <span className="text-pink-400">abc!</span> 👋
                        </h2>
                        <p className="text-gray-400">
                            Ready to create viral LinkedIn content?
                        </p>
                    </div>
                    <div className="mt-4 sm:mt-0">
                        <div className="flex items-center gap-2 bg-linear-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-xl">
                            <span className="text-2xl font-bold">2.4M</span>
                            <span className="text-sm text-white/80">Total Reach</span>
                        </div>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <DashboardCard
                        title="AI Posts Generated"
                        value="1,247"
                        change="+23%"
                        color="from-pink-500 to-purple-500"
                    />
                    <DashboardCard
                        title="Engagement Rate"
                        value="8.4%"
                        change="+0.8%"
                        color="from-blue-500 to-cyan-500"
                    />
                    <DashboardCard
                        title="Saved Drafts"
                        value="89"
                        change="+12"
                        color="from-green-500 to-emerald-500"
                    />
                    <DashboardCard
                        title="Time Saved"
                        value="156h"
                        change="+28h"
                        color="from-orange-500 to-yellow-500"
                    />
                </div>

                {/* Quick Actions */}
                <QuickActions />
            </div>
        </div>
    )
}
export default dashboardpage;
