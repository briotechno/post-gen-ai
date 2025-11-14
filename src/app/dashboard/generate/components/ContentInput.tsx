"use client";
import React, { useState } from "react";
import QuickStartButtons from "./QuickStartButtons";
import ToneTypeSelector from "./ToneTypeSelector";
import AdvancedOptions from "./AdvancedOptions";
import { Brain, Loader2 } from "lucide-react";

interface Props {
  setGeneratedPost: (text: string) => void;
}

const ContentInput = ({ setGeneratedPost }: Props) => {
  const [story, setStory] = useState("");
  const [tone, setTone] = useState("");
  const [type, setType] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!story.trim()) return;

    try {
      setLoading(true);
      setGeneratedPost("");
      console.log("Response send>>>");

      const response = await fetch("https://ai-linkdin-production.up.railway.app/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          post: story,
          tone: tone || "default",
          type: type || "general",
        }),
      });

      console.log("Response send 1>>>", response);
      const text = await response.json();
      console.log("Response send 2>>>", text);
      
      let data;
      // try {
        //   data = JSON.parse(text);
      // } catch {
      //   console.warn(" using raw HTML instead");
      //   data = { text }; 
      // }

      if (response.ok) {
        setGeneratedPost(text.post);
      } else {
        setGeneratedPost("Something went wrong. Please try again.");
      }
      console.log("Response send 3>>>",3)
    } catch (error) {
      console.error("Error:", error);
      setGeneratedPost("Failed to connect to AI API. Please try again later.");
    } finally {
      setLoading(false);
    }
      console.log("Response send 4>>>",4)
  };

  return (
    <div className="backdrop-blur-xl border border-white/8 shadow-[0_0px_5px_rgba(0,0,0,0.1)] rounded-2xl p-5 h-fit">

      <h3 className="text-lg font-semibold flex items-center gap-2 mb-3">
        <Brain className="w-5 h-5 text-purple-400" />
        <h2 className="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2">Content Input</h2>
      </h3>

      <label className="text-sm">What's your story? *</label>

      <textarea
        value={story}
        onChange={(e) => setStory(e.target.value)}
        placeholder="Describe your idea, achievement, insight, or what you want to share..."
        className="w-full h-28 backdrop-blur-xl border border-white/8 shadow-[0_0px_5px_rgba(0,0,0,0.1)] rounded-lg p-3 mt-2 text-sm focus:border-pink-500 outline-none resize-none"
      />

      <QuickStartButtons setStory={setStory} />

      <div className="mt-4">
        <ToneTypeSelector
          tone={tone}
          setTone={setTone}
          type={type}
          setType={setType}
        />
      </div>

      <AdvancedOptions />

      <button
        onClick={handleGenerate}
        disabled={loading}
        className="flex items-center justify-center mt-5 w-full bg-linear-to-r from-pink-500 to-purple-500 text-white py-2.5 rounded-xl font-medium hover:opacity-90 transition"
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Generating...
          </>
        ) : (
          "✨ Generate AI Posts"
        )}
      </button>
    </div>
  );
};

export default ContentInput;