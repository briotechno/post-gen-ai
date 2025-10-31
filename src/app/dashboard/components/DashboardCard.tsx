import React from "react";

interface DashboardCardProps {
    title: string;
    value: string;
    change: string;
    color: string;
}

const DashboardCard = ({
    title,
    value,
    change,
    color,
}: DashboardCardProps) => {
    return (
        <div className="mt-12 p-4 bg-white/5 border border-white/10 rounded-2xl">
            <p className="text-sm">{title}</p>
            <div className="flex items-end justify-between mt-2">
                <h3 className="text-2xl font-semibold text-white">{value}</h3>
                <span
                    className={`text-xs bg-linear-to-r ${color} bg-clip-text text-transparent font-semibold`}
                >
                    {change}
                </span>            </div>
        </div>
    );
}
export default DashboardCard;
