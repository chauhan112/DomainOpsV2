import { useState } from "react";
import { Search, Eye, Edit, Trash, Plus } from "lucide-react";
import { MainComponent } from "./MainComponent";
import { Sidebar } from "../rlib/timeline/t2025/mar/domainOps/Sidebar";
const activities = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    name: "Activity_name - " + i,
    status: "x",
    date: "Created_on",
}));

export function ActivityLogger() {
    const [search, setSearch] = useState("");

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <main className="flex-1 p-6">
                <div className="bg-white shadow-md rounded-lg p-4">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-bold">Activity_name</h2>
                        <div className="flex items-center bg-yellow-100 px-3 py-2 rounded">
                            <Search size={18} className="mr-2" />
                            <input
                                type="text"
                                placeholder="Search"
                                className="bg-transparent focus:outline-none"
                            />
                        </div>
                    </div>
                    <div className="mt-4">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-yellow-500 text-left">
                                    <th className="p-2">Column_name</th>
                                    <th className="p-2">Activity_name</th>
                                    <th className="p-2">Status</th>
                                    <th className="p-2">Date</th>
                                    <th className="p-2">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {activities.map((activity) => (
                                    <tr
                                        key={activity.id}
                                        className="border-t bg-gray-50"
                                    >
                                        <td className="p-2">{activity.id}.</td>
                                        <td className="p-2">{activity.name}</td>
                                        <td className="p-2">•</td>
                                        <td className="p-2">{activity.date}</td>
                                        <td className="p-2 flex space-x-2">
                                            <Eye
                                                size={18}
                                                className="cursor-pointer"
                                            />
                                            <Edit
                                                size={18}
                                                className="cursor-pointer"
                                            />
                                            <Trash
                                                size={18}
                                                className="cursor-pointer"
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>

            {/* Right Sidebar */}
            <aside className="w-64 bg-gray-200 p-4">
                <div className="flex justify-between">
                    <h3 className="font-bold">Attributes</h3>
                    <div className="flex items-center bg-white p-2 rounded">
                        <Search size={18} />
                    </div>
                </div>
            </aside>

            {/* Floating Add Button */}
            <button className="fixed bottom-6 right-6 bg-gray-700 text-white p-4 rounded-full shadow-lg">
                <Plus size={24} />
            </button>
        </div>
    );
}
