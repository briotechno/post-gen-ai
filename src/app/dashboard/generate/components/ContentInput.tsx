"use client";
import React, { useState } from "react";
import QuickStartButtons from "./QuickStartButtons";
import ToneTypeSelector from "./ToneTypeSelector";
import AdvancedOptions from "./AdvancedOptions";
import { Brain } from "lucide-react";

interface Props {
  setGeneratedPost: (text: string) => void;
}

const ContentInput = ({ setGeneratedPost }: Props) => {
  const [story, setStory] = useState("");
  const [tone, setTone] = useState("");
  const [type, setType] = useState("");

  const handleGenerate = () => {
    if (!story) return;
    // Mock AI generation — replace with your API call
    setGeneratedPost(
      `✨ Here's your AI-generated post based on: "${story}"\nTone: ${tone || "Default"
      }\nType: ${type || "General"}`
    );
  };

  return (
    <div className="backdrop-blur-xl border border-white/8 shadow-[0_0px_5px_rgba(0,0,0,0.1)] rounded-2xl p-5 h-fit">

      <h3 className="text-lg font-semibold flex items-center gap-2">
        <Brain className="w-5 h-5 text-purple-400" />
        <h2 className="text-lg font-semibold mb-3 text-center">Content Input</h2>
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
        className="mt-5 w-full bg-linear-to-r from-pink-500 to-purple-500 text-white py-2.5 rounded-xl font-medium hover:opacity-90 transition"
      >
        ✨ Generate AI Posts
      </button>
    </div>
  );
};

export default ContentInput;