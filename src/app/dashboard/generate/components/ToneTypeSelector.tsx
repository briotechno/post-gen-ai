import React from "react";
import { ChevronDown } from "lucide-react";

interface Props {
    tone: string;
    setTone: (tone: string) => void;
    type: string;
    setType: (type: string) => void;
}

const tones = ["Professional", "Casual", "Witty", "Inspirational", "Educational", "Storytelling", "Authoritative", "Conversational",];
const types = ["Achievement", "Industry Insight", "Personal Story", "Pro Tip", "Discussion", "Announcement", "Lesson Learned", "Behind Scenes"];

const ToneTypeSelector = ({ tone, setTone, type, setType }: Props) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Tone Selector */}
            <div className="space-y-2">
                <label className="text-sm font-medium">
                    Tone & Style
                </label>
                <div className="relative mt-1">
                    <select
                        value={tone}
                        onChange={(e) => setTone(e.target.value)}
                        className="flex h-10 w-full items-center justify-between backdrop-blur-xl border border-white/8 shadow-[0_0px_5px_rgba(0,0,0,0.1)] rounded-md px-3 py-2 text-sm text-gray-200 ring-offset-background focus:outline-none focus:ring-1  focus:ring-offset-1 transition-all appearance-none"
                    >
                        <option value="bg-gray-800">Choose tone</option>
                        {tones.map((t) => (
                            <option key={t} value={t} className="bg-gray-800 hover:bg-white/20 ">
                                {t}
                            </option>
                        ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-3 h-4 w-4 text-gray-400 pointer-events-none" />
                </div>
            </div>

            {/* Content Type Selector */}
            <div className="space-y-2">
                <label className="text-sm font-medium">
                    Content Type
                </label>
                <div className="relative mt-1">
                    <select
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        className="flex h-10 w-full items-center justify-between backdrop-blur-xl border border-white/8 shadow-[0_0px_5px_rgba(0,0,0,0.1)] rounded-md px-3 py-2 text-sm text-gray-200 ring-offset-background focus:outline-none focus:ring-1  focus:ring-offset-1 transition-all appearance-none"
                    >
                        <option value="">Select type</option>
                        {types.map((t) => (
                            <option key={t} value={t} className="bg-gray-800 text-white">
                                {t}
                            </option>
                        ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-3 h-4 w-4 text-gray-400 pointer-events-none" />
                </div>
            </div>
        </div>
    );
};

export default ToneTypeSelector;
