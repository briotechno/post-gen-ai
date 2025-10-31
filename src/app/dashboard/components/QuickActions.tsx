import { PenTool, BarChart3, FileText, Calendar } from "lucide-react";

const actions = [
    { title: "Generate Post", desc: "Create engaging content", icon: PenTool },
    { title: "View Analytics", desc: "Check your performance", icon: BarChart3 },
    { title: "Manage Drafts", desc: "Review saved content", icon: FileText },
    { title: "Schedule Posts", desc: "Plan your calendar", icon: Calendar },
];

const QuickActions = () => {
    return (
        <div>
            <h3 className="mt-12 text-lg font-semibold mb-4">Quick Actions ⚡</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {actions.map(({ title, desc, icon: Icon }) => (
                    <div
                        key={title}
                        className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition"
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <h4 className="text-white font-medium">{title}</h4>
                                <p className="text-gray-400 text-sm">{desc}</p>
                            </div>
                            <Icon className="text-gray-400 w-5 h-5" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default QuickActions;
