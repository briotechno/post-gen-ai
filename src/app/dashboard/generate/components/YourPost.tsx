import { Settings, SquarePen } from 'lucide-react';
import React from 'react'

interface Props {
  generatedPost: string;
}

const YourPost = ({ generatedPost }: Props) => {
  return (
    <div className="backdrop-blur-xl border border-white/5 shadow-[0_0px_5px_rgba(0,0,0,0.1)] rounded-2xl p-5">

      <span className="flex gap-2">
        <SquarePen className="w-4 h-4 text-purple-400" />
        <h2 className="text-lg font-semibold mb-3">Your Post</h2>
      </span>

      <div className="text-gray-300 text-sm whitespace-pre-wrap">
        {generatedPost
          ? generatedPost
          : "Your generated post will appear here... or start writing your own!"}
      </div>
    </div>
  )
}

export default YourPost
