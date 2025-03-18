export const MainComponent = () => {
    const activities = [
        { id: 1, name: "Activity_name", status: "", date: "Created_on" },
        { id: 2, name: "Activity_name", status: "", date: "Created_on" },
        { id: 3, name: "Activity_name", status: "", date: "Created_on" },
        { id: 4, name: "Activity_name", status: "", date: "Created_on" },
        { id: 5, name: "Activity_name", status: "", date: "Created_on" },
        { id: 6, name: "Activity_name", status: "", date: "Created_on" },
        { id: 7, name: "Activity_name", status: "", date: "Created_on" },
        { id: 8, name: "Activity_name", status: "", date: "Created_on" },
    ];

    return (
        <div className="flex-1 p-6 overflow-auto">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Root/logger</h2>
                <div className="flex items-center space-x-2">
                    <input
                        type="text"
                        placeholder="Search"
                        className="p-2 rounded-lg bg-yellow-100"
                    />
                    <button className="p-2 bg-gray-200 rounded">
                        <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13h2v6h-2zm0 8h2v2h-2z" />
                        </svg>
                    </button>
                    <button className="p-2 bg-gray-200 rounded">
                        <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="bg-white rounded-lg shadow overflow-hidden">
                <table className="w-full">
                    <thead>
                        <tr className="bg-yellow-300 text-black">
                            <th className="p-2 text-left">Coloum_name</th>
                            <th className="p-2 text-left">Activity_name</th>
                            <th className="p-2 text-left">Status</th>
                            <th className="p-2 text-left">Date</th>
                            <th className="p-2 text-left">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {activities.map((activity, index) => (
                            <tr
                                key={activity.id}
                                className={
                                    index % 2 === 0
                                        ? "bg-gray-50"
                                        : "bg-gray-100"
                                }
                            >
                                <td className="p-2">{activity.id}.</td>
                                <td className="p-2">{activity.name}</td>
                                <td className="p-2">
                                    <input
                                        type="checkbox"
                                        className="form-checkbox"
                                    />
                                </td>
                                <td className="p-2">{activity.date}</td>
                                <td className="p-2 flex space-x-2">
                                    <button className="p-1">
                                        <svg
                                            className="w-4 h-4"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                                        </svg>
                                    </button>
                                    <button className="p-1">
                                        <svg
                                            className="w-4 h-4"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                                        </svg>
                                    </button>
                                    <button className="p-1">
                                        <svg
                                            className="w-4 h-4"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <button className="fixed bottom-6 right-6 bg-yellow-400 text-white p-3 rounded-full shadow-lg">
                <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                </svg>
            </button>
        </div>
    );
};
