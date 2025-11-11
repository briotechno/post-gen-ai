import React from "react";

interface DashboardCardProps {
    title: string;
    value: string;
    change: string;
    color: string;
    icon: React.ElementType;
}

const DashboardCard = ({
    title,
    value,
    change,
    color,
    icon: Icon,
}: DashboardCardProps) => {
    return (
        <div className="p-5 sm:p-6 rounded-2xl 
            backdrop-blur-xl border border-white/5 
            bg-lineaar-to-b from-white/3 to-white/1 
            shadow-[0_4px_20px_rgba(0,0,0,0.1)] 
            hover:shadow-[0_6px_25px_rgba(0,0,0,0.3)] 
            transition-all duration-300 ease-in-out">

            {/* Top section */}
            <div className="flex items-center justify-between">
                 <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center bg-linear-to-r ${color} shadow-lg`}
                >
                    <Icon className="w-5 h-5 text-white" />
                </div>
                <span
                    className={`text-xs px-2 py-1 rounded-full bg-green-500/10 text-green-400 font-medium`}
                >
                    {change}
                </span>
            </div>

            {/* Middle section */}
            <div className="mt-5">
                <h3 className="text-2xl font-semibold">
                    {value}
                </h3>
                <p className="text-sm text-gray-500">
                    {title}
                </p>
            </div>

            {/* Bottom caption */}
            <p className="text-xs mt-2 text-gray-500 dark:text-gray-500">
                {title === "Engagement Rate" ? "Average rate" : "This month"}
            </p>
        </div>
    );
}
export default DashboardCard;
