import React from "react";

const templates = [
  {
    tag: "Insight",
    action: "Use",
    text: "Share insights about AI in marketing",
  },
  {
    tag: "achievement",
    action: "Use",
    text: "Celebrate a team achievement",
  },
  {
    tag: "tip",
    action: "Use",
    text: "Discuss remote work best practices",
  },
  {
    tag: "lesson",
    action: "Use",
    text: "Share a career lesson learned",
  },
  {
    tag: "question",
    action: "Use",
    text: "Ask about industry trends",
  },
  {
    tag: "announcement",
    action: "Use",
    text: "Announce a new project launch",
  },
];

const TemplatesPage = () => {
  return (
    <div className="backdrop-blur-xl  shadow-[0_0px_5px_rgba(0,0,0,0.1)] rounded-xl">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {templates.map(({ tag, action, text }) => (
          <div
            key={text}
            className="border border-white/10 rounded-xl p-4 flex flex-col justify-between transition-all hover:bg-white/5"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium bg-white/10 text-white px-2 py-0.5 rounded-full">
                {tag}
              </span>
              <button className="text-xs text-gray-300 hover:text-white font-medium transition-all">
                {action}
              </button>
            </div>
            <p className="text-gray-400 text-sm">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplatesPage;
