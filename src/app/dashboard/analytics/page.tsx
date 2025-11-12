import React from 'react'
import { BarChart3, Filter, Heart, History, MessageCircle, Repeat2, Search } from 'lucide-react'

const stats = [
  { title: "Total Posts", value: 5, icon: History, color: "text-[#6367E9]" },
  { title: "Total Likes", value: 365, icon: Heart, color: "text-[#EF4444]" },
  { title: "Comments", value: 87, icon: MessageCircle, color: "text-[#3B82F6]" },
  { title: "Shares", value: 62, icon: Repeat2, color: "text-[#22C55E]" },
];

const Analytics = [
  {
    title: "Leadership in Remote Teams",
    category: "Published",
    categoryTwo: "professional",
    content: "🚀 Leading remote teams requires a different approach than traditional in-person management...",
    hashtags: ["#leadership", "#remotework", "#management"],
    created: "15/01/2024",
    updated: "16/01/2024",
    heart: "47",
    MessageCircle: "12",
    History: "8"
  },
  {
    title: "Innovation in Tech Industry",
    category: "Published",
    categoryTwo: "inspirational",
    content: "💡 The tech industry is evolving at breakneck speed, and staying ahead requires constant innovation...",
    hashtags: ["#innovation", "#technology", "#startup"],
    created: "15/01/2024",
    updated: "15/01/2024",
    heart: "89",
    MessageCircle: "23",
    History: "15"
  },
  {
    title: "Personal Branding Tips",
    category: "Draft",
    categoryTwo: "educational",
    content: "✨ Building your personal brand isn't just about self-promotion—it's about creating genuine value...",
    hashtags: ["#personalbranding", "#networking", "#career"],
    created: "14/01/2024",
    updated: "16/01/2024",
    heart: "89",
    MessageCircle: "12",
    History: "8"
  },
  {
    title: "AI in Modern Workplace",
    category: "Published",
    categoryTwo: "professional",
    content: "🤖 Artificial Intelligence is transforming how we work, collaborate, and innovate...",
    hashtags: ["#AI", "#workplace", "#future", "#technology"],
    created: "13/01/2024",
    updated: "13/01/2024",
    heart: "156",
    MessageCircle: "34",
    History: "28"
  },
  {
    title: "Startup Growth Strategies",
    category: "Published",
    categoryTwo: "inspirational",
    content: "📈 Growing a startup from idea to scale requires strategic thinking and execution...",
    hashtags: ["#startup", "#growth", "#entrepreneurship"],
    created: "12/01/2024",
    updated: "12/01/2024",
    heart: "73",
    MessageCircle: "18",
    History: "11"
  }
]

const analyticspage = () => {
  return (
    <div className="min-h-screen w-full">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="backdrop-blur-xl border border-border/50 rounded-2xl p-4 sm:p-6 shadow-xl border-white/10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          {/* Left Section */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-linear-to-r from-pink-500 to-purple-500 shrink-0">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-display font-bold bg-linear-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Analytics & History
              </h2>
              <p className="text-sm sm:text-base text-gray-500">
                View all your generated posts and their performance
              </p>
            </div>
          </div>

          {/* Searchbar + Filter */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
            {/* Search Bar */}
            <div className="flex items-center gap-2 w-full sm:w-72 lg:w-64 px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md shadow-inner focus-within:border-purple-400 transition">
              <Search className="w-4 h-4 text-gray-400 shrink-0" />
              <input
                type="text"
                placeholder="Search drafts..."
                className="bg-transparent outline-none text-sm text-gray-200 placeholder-gray-500 w-full"
              />
            </div>

            {/* Filter Button */}
            <button className="flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md shadow-inner hover:border-purple-400 transition">
              <Filter className="w-4 h-4 text-gray-400" />
            </button>
          </div>
        </div>

        {/* stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map(({ title, value, icon: Icon, color }, index) => (
            <div key={index} className="backdrop-blur-xl border border-white/5 bg-linear-to-br from-white/2 to-transparent shadow-[0_0px_5px_rgba(0,0,0,0.1)] rounded-2xl p-5 flex items-center justify-between" >
              <div>
                <h3 className="text-sm text-gray-400">{title}</h3>
                <p className="text-2xl font-semibold">{value}</p>
              </div>
              <Icon className={`w-6 h-6 ${color}`} />
            </div>
          ))}
        </div>

        {/* Analytics */}
        <div className="grid grid-cols-1 gap-4">
          {Analytics.map((draft, index) => (
            <div
              key={index}
              className="backdrop-blur-xl border border-white/5 bg-linear-to-br from-white/5 to-transparent shadow-[0_0px_5px_rgba(0,0,0,0.1)] rounded-2xl p-5 space-y-3 transition hover:shadow-lg hover:border-white/10"
            >
              {/* Header */}
              <div className="flex flex-wrap justify-between items-start gap-2">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-base font-semibold text-white">{draft.title}</h2>

                  <span className="bg-[#5257C1] text-white px-2 py-1 text-xs font-medium rounded-full capitalize">
                    {draft.category}
                  </span>

                  <span className="px-2 py-1 text-xs rounded-full bg-white/10 capitalize text-gray-300">
                    {draft.categoryTwo}
                  </span>
                </div>
                <button className="hover:text-white text-gray-400 transition text-lg">⋮</button>
              </div>

              {/* Dates */}
              <div className="flex flex-wrap text-xs text-gray-500 gap-2 mt-1">
                <p>Created: {draft.created}</p>
                <p>Published: {draft.updated}</p>
              </div>

              {/* Content */}
              <p className="text-sm text-gray-400 leading-snug">{draft.content}</p>

              {/* Hashtags & Actions */}
              <div className="flex flex-wrap items-center justify-between gap-3 mt-3">
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {draft.hashtags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-white/5 border border-white/10 px-2 py-1 rounded-full text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Reactions */}
                <div className="flex text-gray-500 text-sm gap-4">
                  <div className="flex items-center gap-1 hover:text-pink-500 transition">
                    <Heart className="w-4 h-4" />
                    <span>{draft.heart}</span>
                  </div>

                  <div className="flex items-center gap-1 hover:text-blue-400 transition">
                    <MessageCircle className="w-4 h-4" />
                    <span>{draft.MessageCircle}</span>
                  </div>

                  <div className="flex items-center gap-1 hover:text-green-400 transition">
                    <History className="w-4 h-4" />
                    <span>{draft.History}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default analyticspage
