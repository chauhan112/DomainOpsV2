import { useState } from "react";

export function App() {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [events, setEvents] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [newEvent, setNewEvent] = useState({ title: "", date: "" });

    const getDaysInMonth = (date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        const days = [];
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);

        const startDay = firstDay.getDay();
        for (let i = 0; i < startDay; i++) {
            days.push(null);
        }

        for (let i = 1; i <= lastDay.getDate(); i++) {
            days.push(new Date(year, month, i));
        }

        return days;
    };

    const days = getDaysInMonth(currentDate);

    const prevMonth = () => {
        setCurrentDate(
            new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
        );
    };
    const nextMonth = () => {
        setCurrentDate(
            new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
        );
    };

    const handleAddEvent = () => {
        setEvents([...events, { ...newEvent, date: new Date(newEvent.date) }]);
        setNewEvent({ title: "", date: "" });
        setShowModal(false);
    };

    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-4">
                    <button
                        onClick={prevMonth}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Previous
                    </button>
                    <h1 className="text-2xl font-bold">
                        {currentDate.toLocaleString("default", {
                            month: "long",
                            year: "numeric",
                        })}
                    </h1>
                    <button
                        onClick={nextMonth}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Next
                    </button>
                </div>

                <button
                    onClick={() => setShowModal(true)}
                    className="mb-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                >
                    Add Event
                </button>

                <div className="grid grid-cols-7 gap-1">
                    {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                        (day) => (
                            <div
                                key={day}
                                className="text-center font-semibold p-2 bg-gray-200"
                            >
                                {day}
                            </div>
                        )
                    )}

                    {days.map((day, index) => (
                        <div
                            key={index}
                            className={`p-4 h-24 border ${
                                day ? "bg-white" : "bg-gray-100"
                            } hover:bg-gray-50`}
                        >
                            {day && (
                                <>
                                    <div>{day.getDate()}</div>
                                    {events
                                        .filter(
                                            (event) =>
                                                event.date.toDateString() ===
                                                day.toDateString()
                                        )
                                        .map((event, i) => (
                                            <div
                                                key={i}
                                                className="text-sm bg-blue-100 p-1 mt-1 rounded"
                                            >
                                                {event.title}
                                            </div>
                                        ))}
                                </>
                            )}
                        </div>
                    ))}
                </div>

                {/* Modal */}
                {showModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <div className="bg-white p-6 rounded shadow-lg">
                            <h2 className="text-xl mb-4">Add New Event</h2>
                            <input
                                type="text"
                                placeholder="Event Title"
                                value={newEvent.title}
                                onChange={(e) =>
                                    setNewEvent({
                                        ...newEvent,
                                        title: e.target.value,
                                    })
                                }
                                className="w-full p-2 mb-4 border rounded"
                            />
                            <input
                                type="datetime-local"
                                value={newEvent.date}
                                onChange={(e) =>
                                    setNewEvent({
                                        ...newEvent,
                                        date: e.target.value,
                                    })
                                }
                                className="w-full p-2 mb-4 border rounded"
                            />
                            <div className="flex justify-end">
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="px-4 py-2 mr-2 bg-gray-300 rounded hover:bg-gray-400"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleAddEvent}
                                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export function WeekCalendarView() {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [events, setEvents] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [newEvent, setNewEvent] = useState({
        title: "",
        start: "",
        end: "",
    });

    // Get the days of the current week (Monday to Sunday)
    const getWeekDays = (date) => {
        const days = [];
        const startOfWeek = new Date(date);
        const dayOfWeek = startOfWeek.getDay();
        const diffToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek; // Adjust to Monday as start
        startOfWeek.setDate(startOfWeek.getDate() + diffToMonday);

        for (let i = 0; i < 7; i++) {
            const day = new Date(startOfWeek);
            day.setDate(startOfWeek.getDate() + i);
            days.push(day);
        }
        return days;
    };

    const weekDays = getWeekDays(currentDate);

    // Generate time slots (12:00 AM to 11:00 PM)
    const timeSlots = Array.from({ length: 24 }, (_, i) => {
        const hour = i % 12 === 0 ? 12 : i % 12;
        const period = i < 12 ? "AM" : "PM";
        return `${hour}:00 ${period}`;
    });

    // Navigation
    const prevWeek = () => {
        setCurrentDate(
            new Date(
                currentDate.getFullYear(),
                currentDate.getMonth(),
                currentDate.getDate() - 7
            )
        );
    };
    const nextWeek = () => {
        setCurrentDate(
            new Date(
                currentDate.getFullYear(),
                currentDate.getMonth(),
                currentDate.getDate() + 7
            )
        );
    };
    const goToToday = () => {
        setCurrentDate(new Date());
    };

    // Add event
    const handleAddEvent = () => {
        setEvents([
            ...events,
            {
                ...newEvent,
                start: new Date(newEvent.start),
                end: new Date(newEvent.end),
            },
        ]);
        setNewEvent({ title: "", start: "", end: "" });
        setShowModal(false);
    };

    // Helper to check if an event falls within a time slot
    const isEventInTimeSlot = (event, day, hour) => {
        const eventStart = event.start;
        const eventEnd = event.end;
        const slotTime = new Date(day);
        slotTime.setHours(hour, 0, 0, 0);

        return (
            eventStart.toDateString() === day.toDateString() &&
            eventStart.getHours() <= hour &&
            (eventEnd.getHours() > hour ||
                (eventEnd.getHours() === hour && eventEnd.getMinutes() > 0))
        );
    };

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar */}
            <div className="w-16 bg-white border-r border-gray-200 p-4 flex flex-col items-center">
                <button
                    onClick={() => setShowModal(true)}
                    className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl hover:bg-blue-600"
                >
                    +
                </button>
            </div>

            {/* Main Content */}
            <div className="flex-1">
                {/* Header */}
                <div className="bg-white border-b border-gray-200 p-4 flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={goToToday}
                            className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-100"
                        >
                            Today
                        </button>
                        <button
                            onClick={prevWeek}
                            className="text-gray-600 hover:text-gray-800"
                        >
                            &lt;
                        </button>
                        <button
                            onClick={nextWeek}
                            className="text-gray-600 hover:text-gray-800"
                        >
                            &gt;
                        </button>
                        <h1 className="text-xl font-semibold">
                            {currentDate.toLocaleString("default", {
                                month: "long",
                                year: "numeric",
                            })}
                        </h1>
                    </div>
                    <div>
                        <select className="border border-gray-300 rounded p-2">
                            <option>Week</option>
                            <option>Month</option>
                            <option>Day</option>
                        </select>
                    </div>
                </div>

                {/* Week View */}
                <div className="flex">
                    {/* Time Labels */}
                    <div className="w-20 border-r border-gray-200">
                        {timeSlots.map((time, index) => (
                            <div
                                key={time}
                                className="h-16 text-right pr-2 text-sm text-gray-500"
                                style={{
                                    marginTop: index === 0 ? "40px" : "0",
                                }}
                            >
                                {time}
                            </div>
                        ))}
                    </div>

                    {/* Days Grid */}
                    <div className="flex-1 grid grid-cols-7">
                        {/* Day Headers */}
                        {weekDays.map((day, index) => (
                            <div
                                key={index}
                                className="text-center p-2 border-b border-gray-200 text-sm font-semibold text-gray-700"
                            >
                                {day
                                    .toLocaleString("default", {
                                        weekday: "short",
                                    })
                                    .toUpperCase()}{" "}
                                {day.getDate()}
                            </div>
                        ))}

                        {/* Time Slots */}
                        {timeSlots.map((_, hour) => (
                            <div key={hour} className="grid grid-cols-7">
                                {weekDays.map((day, dayIndex) => (
                                    <div
                                        key={dayIndex}
                                        className="h-16 border border-gray-200 relative"
                                    >
                                        {events
                                            .filter((event) =>
                                                isEventInTimeSlot(
                                                    event,
                                                    day,
                                                    hour
                                                )
                                            )
                                            .map((event, eventIndex) => (
                                                <div
                                                    key={eventIndex}
                                                    className="absolute top-0 left-0 right-0 bg-blue-100 p-1 text-sm rounded m-1"
                                                    style={{
                                                        height: `${
                                                            (event.end.getHours() -
                                                                event.start.getHours()) *
                                                                64 +
                                                            (event.end.getMinutes() -
                                                                event.start.getMinutes()) *
                                                                (64 / 60)
                                                        }px`,
                                                        top: `${
                                                            event.start.getMinutes() *
                                                            (64 / 60)
                                                        }px`,
                                                    }}
                                                >
                                                    {event.title}
                                                </div>
                                            ))}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Modal for Adding Events */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded shadow-lg w-96">
                        <h2 className="text-xl mb-4">Add New Event</h2>
                        <input
                            type="text"
                            placeholder="Event Title"
                            value={newEvent.title}
                            onChange={(e) =>
                                setNewEvent({
                                    ...newEvent,
                                    title: e.target.value,
                                })
                            }
                            className="w-full p-2 mb-4 border rounded"
                        />
                        <input
                            type="datetime-local"
                            value={newEvent.start}
                            onChange={(e) =>
                                setNewEvent({
                                    ...newEvent,
                                    start: e.target.value,
                                })
                            }
                            className="w-full p-2 mb-4 border rounded"
                        />
                        <input
                            type="datetime-local"
                            value={newEvent.end}
                            onChange={(e) =>
                                setNewEvent({
                                    ...newEvent,
                                    end: e.target.value,
                                })
                            }
                            className="w-full p-2 mb-4 border rounded"
                        />
                        <div className="flex justify-end">
                            <button
                                onClick={() => setShowModal(false)}
                                className="px-4 py-2 mr-2 bg-gray-300 rounded hover:bg-gray-400"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleAddEvent}
                                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
