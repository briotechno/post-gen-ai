import React from 'react'

interface Props {
    setStory: (text: string) => void;
}

const quickPrompts = [
    "Share insights about AI in marketing",
    "Celebrate a team achievement",
    "Discuss remote work best practices",
];

const QuickStartButtons = ({ setStory }: Props) => {
    return (
        <>
            <div className="">
                <label className="text-xs text-gray-500 font-medium">Quick starts:</label>
                <div className="flex flex-wrap gap-2 mt-1">
                    {quickPrompts.map((q) => (
                        <button
                            key={q}
                            onClick={() => setStory(q)}
                            className="text-xs bg-white/5 hover:bg-white/20 px-3 py-1.5 rounded-full transition"
                        >
                            {q}
                        </button>
                    ))}
                </div>
            </div>
        </>
    )
}

export default QuickStartButtons