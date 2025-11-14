import React, { useState, useEffect } from 'react';
import { SquarePen, Users, TrendingUp, Clock, BarChart2, Copy, Save, Share2, Download } from 'lucide-react';

interface Props {
  generatedPost?: string;
}

const YourPost = ({ generatedPost }: Props) => {
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    if (generatedPost) {
      setInputText(generatedPost);
    }
  }, [generatedPost]);

  const showStats = inputText.trim().length > 0;

  const post = [
    {
      icon: Users,
      color: "text-blue-400",
      title: "2.4K",
      desc: "Est. Reach",
    },
    {
      icon: TrendingUp,
      color: "text-green-400",
      title: "8.2%",
      desc: "Engagement",
    },
    {
      icon: Clock,
      color: "text-orange-400",
      title: "45s",
      desc: "Read Time",
    },
    {
      icon: BarChart2,
      color: "text-purple-400",
      title: "60%",
      desc: "Score",
    },
  ]

  const button = [
    {
      icon: Copy,
      title: "Copy",
      action: () => {
        navigator.clipboard.writeText(inputText);
        alert("Copied!");
      }
    },
    {
      icon: Save,
      title: "Save",
      action: () => {
        console.log("Saved!");
        alert("Saved!");
      }
    },
    {
      icon: Share2,
      title: "Share",
      action: () => {
        if (navigator.share) {
          navigator.share({
            title: "Shared Post",
            text: "Check this out!",
          });
        } else {
          alert("Share not supported");
        }
      }
    },
    {
      icon: Download,
      title: "Export",
      action: () => {
        const blob = new Blob([inputText], { type: "text/plain" });
        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = "export.txt";
        a.click();

        URL.revokeObjectURL(url);
      }
    },
  ];

  return (
    <div className="backdrop-blur-xl h-fit border border-white/5 shadow-[0_0px_5px_rgba(0,0,0,0.1)] rounded-2xl p-5">
      <span className="flex gap-2 items-center mb-3">
        <SquarePen className="w-5 h-5 text-blue-400" />
        <h2 className="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2">Your Post</h2>
      </span>

      {/* Textarea */}
      {/* <textarea
        className="w-full h-80 backdrop-blur-xl border border-white/8 shadow-[0_0px_5px_rgba(0,0,0,0.1)] rounded-lg p-3 mt-2 text-sm focus:border-[#6367E9] outline-none resize-none"
        placeholder="Your generated post will appear here... or start writing your own!"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      /> */}

      {/* Div tag */}
      <div
        contentEditable
        className={`w-full h-80 overflow-y-auto backdrop-blur-xl border border-white/8 shadow-[0_0px_5px_rgba(0,0,0,0.1)] rounded-lg p-3 mt-2 text-sm focus:border-[#6367E9] outline-none resize-none 
    ${inputText ? "text-white" : "text-gray-400"}`}
        suppressContentEditableWarning={true}
        onInput={(e) => setInputText(e.currentTarget.innerHTML)}
        dangerouslySetInnerHTML={{
          __html: inputText || "Your generated post will appear here... or start writing your own!",
        }}
      ></div>

      {/* Stats Section */}
      {showStats && (
        <div className="mt-4 backdrop-blur-xl bg-white/1 border 
        border-white/10 shadow-[0_0px_5px_rgba(0,0,0,0.1)] rounded-lg p-3 pt-4
         space-y-5">
          <div className="grid grid-cols-4 gap-3 text-sm">
            {post.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <item.icon className={`w-5 h-5 mb-1 ${item.color}`} />
                <span className="font-semibold">{item.title}</span>
                <span className="text-xs text-gray-400">{item.desc}</span>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="grid grid-cols-4 gap-3 mt-4">
            {button.map((item, index) => (
              <button key={index}
                onClick={item.action}

                className="flex items-center gap-2 px-3 py-1 border border-white/10 shadow-[0_0px_5px_rgba(0,0,0,0.1)] rounded-xl text-sm hover:bg-white/5">
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.title}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default YourPost;
