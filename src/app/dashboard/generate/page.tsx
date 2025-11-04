import React from 'react'
import { TrendingUp, Lightbulb, AtSign, Zap, User, Clock, BarChart3 } from 'lucide-react'

const tips = [
  {
    icon: AtSign,
    color: "text-purple-400",
    text: "Be specific about your industry or role",
  },
  {
    icon: Zap,
    color: "text-blue-400",
    text: "Include relevant keywords naturally",
  },
  {
    icon: User,
    color: "text-green-400",
    text: "Add a personal touch to generated content",
  },
  {
    icon: TrendingUp,
    color: "text-orange-400",
    text: "Use engaging questions to boost interaction",
  }
];

const insights = [
  {
    label: (
      <span className="flex items-center gap-2">
        <Clock className="w-4 h-4" /> Best posting time:
      </span>
    ),
    value: "9–11 AM",
    // color: "text-white",
  },
  {
    label: "Optimal length:",
    value: "150–300 chars",
    // color: "text-white",
  },
  {
    label: "Engagement boost:",
    value: "+23% with AI",
    color: "text-green-400",
  },
  {
    label: "Weekly reach:",
    value: "2.4M views",
    color: "text-blue-400",
  },
];
const generatepage = () => {
  return (
    <div className="min-h-screen w-full">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="backdrop-blur-xl border border-border/50 rounded-2xl p-4 sm:p-6 shadow-xl border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between">
          <div className="flex">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-linear-to-r from-pink-500 to-purple-500 mr-2">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <div className="">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-display font-bold bg-linear-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                AI Post Generator
              </h2>
              <p className="text-sm sm:text-base text-gray-500">
                Create viral LinkedIn content with AI assistance
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="mt-4 mx-2 sm:mt-0 flex">
              <div className="flex flex-col">
                <span className="text-xl font-medium text-center">1,247</span>
                <h6 className="text-[10px] text-gray-500">Posts Created</h6>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-medium text-center">8.4%</span>
              <h6 className="text-[10px] text-gray-500">Avg Engagement</h6>
            </div>
          </div>
        </div>

        {/* Quick,Trending,Performance */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 rounded-2xl max-w-7xl mx-auto">

          {/* Quick Tips */}
          <div className="backdrop-blur-xl border border-white/5 bg-linear-to-br from-white/2 to-transparent shadow-[0_0px_5px_rgba(0,0,0,0.1)] rounded-2xl p-5"
          >
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-purple-400" />
              Quick Tips
            </h3>

            <ul className="text-sm mt-4 space-y-2 sm:text-base text-gray-500">
              {tips.map(({ icon: Icon, color, text }, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Icon className={`w-4 h-4 ${color} mt-0.5`} />
                  {text}
                </li>
              ))}
            </ul>
          </div>

          {/* Trending Topics */}
          <div className="backdrop-blur-xl border border-white/5 bg-linear-to-br from-white/2 to-transparent shadow-[0_0px_5px_rgba(0,0,0,0.1)] rounded-2xl p-5">

            <h3 className="text-lg font-semibold flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-400" />
              Trending Topics
            </h3>
            <div className="text-sm mt-4 space-y-2 sm:text-base text-gray-500">
              {[
                { tag: "#AI", growth: "+45%" },
                { tag: "#Leadership", growth: "+32%" },
                { tag: "#RemoteWork", growth: "+28%" },
                { tag: "#Innovation", growth: "+24%" },
              ].map(({ tag, growth }) => (
                <div
                  key={tag}
                  className="flex items-center justify-between bg-white/1 rounded-full px-3 py-1.5 text-sm"
                >
                  <span className="bg-[#341B5D] text-[#D8B4FE] font-normal p-2 rounded-full">{tag}</span>
                  <span className="text-green-400">{growth}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Performance Insights */}
          <div className="backdrop-blur-xl border border-white/5 bg-linear-to-br from-white/2 to-transparent shadow-[0_0px_5px_rgba(0,0,0,0.1)] rounded-2xl p-5"
          >
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-green-400" />
              Performance Insights
            </h3>

            <div className="mt-4 text-sm space-y-3">
              {insights.map(({ label, value, color }, index) => (
                <div key={index} className="flex justify-between text-gray-500">
                  <span>{label}</span>
                  <span className={`font-medium ${color}`}>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default generatepage