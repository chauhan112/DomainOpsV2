import { Transition } from "@headlessui/react";
import { useState } from "react";

export function BasicAccordion() {
    const [open, setOpen] = useState(null);

    const toggle = (index) => {
        setOpen(open === index ? null : index);
    };

    return (
        <div className="max-w-2xl mx-auto">
            {[
                {
                    title: "Section 1",
                    content: "This is the content for section 1",
                },
                {
                    title: "Section 2",
                    content: "This is the content for section 2",
                },
                {
                    title: "Section 3",
                    content: "This is the content for section 3",
                },
            ].map((item, index) => (
                <div key={index} className="mb-2">
                    <button
                        onClick={() => toggle(index)}
                        className="w-full text-left p-4 bg-gray-200 hover:bg-gray-300 transition-colors"
                    >
                        {item.title}
                    </button>
                    {open === index && (
                        <div className="p-4 bg-gray-100">{item.content}</div>
                    )}
                </div>
            ))}
        </div>
    );
}

export function AnimatedAccordion() {
    const [open, setOpen] = useState(null);

    return (
        <div className="max-w-2xl mx-auto">
            {[
                { title: "FAQ 1", content: "Answer to FAQ 1 goes here" },
                { title: "FAQ 2", content: "Answer to FAQ 2 goes here" },
                { title: "FAQ 3", content: "Answer to FAQ 3 goes here" },
            ].map((item, index) => (
                <div key={index} className="mb-2">
                    <button
                        onClick={() => setOpen(open === index ? null : index)}
                        className="w-full text-left p-4 bg-blue-500 text-white hover:bg-blue-600 transition-colors"
                    >
                        {item.title}
                    </button>
                    <Transition
                        show={open === index}
                        enter="transition duration-200 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-150 ease-in"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                    >
                        <div className="p-4 bg-blue-100">{item.content}</div>
                    </Transition>
                </div>
            ))}
        </div>
    );
}

export function MultiAccordion() {
    const [openSections, setOpenSections] = useState([]);

    const toggle = (index) => {
        setOpenSections((prev) =>
            prev.includes(index)
                ? prev.filter((i) => i !== index)
                : [...prev, index]
        );
    };

    return (
        <div className="max-w-2xl mx-auto">
            {[
                { title: "Item 1", content: "Content 1" },
                { title: "Item 2", content: "Content 2" },
                { title: "Item 3", content: "Content 3" },
            ].map((item, index) => (
                <div key={index} className="mb-2">
                    <button
                        onClick={() => toggle(index)}
                        className="w-full flex justify-between items-center p-4 bg-green-500 text-white hover:bg-green-600"
                    >
                        {item.title}
                        <span>{openSections.includes(index) ? "-" : "+"}</span>
                    </button>
                    {openSections.includes(index) && (
                        <div className="p-4 bg-green-100 text-gray-800">
                            {item.content}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export function IconAccordion() {
    const [open, setOpen] = useState(null);

    return (
        <div className="max-w-2xl mx-auto">
            {[
                { title: "Profile", content: "User profile details" },
                { title: "Settings", content: "Configuration options" },
                { title: "Help", content: "Support information" },
            ].map((item, index) => (
                <div key={index} className="mb-2 border rounded-lg">
                    <button
                        onClick={() => setOpen(open === index ? null : index)}
                        className="w-full flex items-center p-4 text-purple-700 hover:bg-purple-50"
                    >
                        <svg
                            className="w-5 h-5 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={
                                    open === index
                                        ? "M19 14l-7-7-7 7"
                                        : "M5 10l7 7 7-7"
                                }
                            />
                        </svg>
                        {item.title}
                    </button>
                    {open === index && (
                        <div className="p-4 bg-purple-50">{item.content}</div>
                    )}
                </div>
            ))}
        </div>
    );
}

export function CardAccordion() {
    const [open, setOpen] = useState(null);

    return (
        <div className="max-w-2xl mx-auto space-y-4">
            {[
                { title: "Card 1", content: "Detailed content for card 1" },
                { title: "Card 2", content: "Detailed content for card 2" },
                { title: "Card 3", content: "Detailed content for card 3" },
            ].map((item, index) => (
                <div
                    key={index}
                    className="bg-white shadow-lg rounded-lg overflow-hidden"
                >
                    <button
                        onClick={() => setOpen(open === index ? null : index)}
                        className="w-full text-left p-4 hover:bg-gray-50 font-semibold"
                    >
                        {item.title}
                    </button>
                    {open === index && (
                        <div className="p-4 border-t">{item.content}</div>
                    )}
                </div>
            ))}
        </div>
    );
}

export function ArtisticAccordion() {
    const [open, setOpen] = useState(null);
    const [style, setStyle] = useState("cosmic"); // Default style

    const items = [
        { title: "Panel 1", content: "Content for panel 1" },
        { title: "Panel 2", content: "Content for panel 2" },
        { title: "Panel 3", content: "Content for panel 3" },
    ];

    const toggle = (index) => {
        setOpen(open === index ? null : index);
    };

    // Style definitions
    const styles = {
        cosmic: {
            container:
                "bg-gradient-to-b from-purple-900 to-indigo-900 p-6 rounded-xl shadow-2xl",
            button: "w-full text-left p-4 bg-opacity-20 bg-white text-white hover:bg-opacity-30 transition-all duration-300 border border-purple-500/50",
            content: "p-4 bg-black/20 text-purple-200 backdrop-blur-sm",
            icon: "text-purple-300",
        },
        nature: {
            container:
                "bg-green-100 p-6 rounded-xl shadow-md border-2 border-green-200",
            button: "w-full text-left p-2 bg-green-500 text-white hover:bg-green-600 transition-all duration-300 rounded-t-lg flex justify-between items-center",
            content: "p-4 bg-green-50 text-green-800 border-t border-green-200",
            icon: "text-white",
        },
        retro: {
            container:
                "bg-orange-100 p-6 rounded-xl shadow-md border-4 border-orange-300",
            button: "w-full text-left p-4 bg-orange-600 text-white hover:bg-orange-700 transition-all duration-300 font-mono flex justify-between items-center",
            content:
                "p-4 bg-orange-50 text-orange-900 border-t-4 border-orange-400",
            icon: "text-white",
        },
    };

    const currentStyle = styles[style];

    return (
        <div className="max-w-2xl mx-auto my-8">
            {/* Style Selection Buttons */}
            <div className="flex justify-center gap-4 mb-6">
                <button
                    onClick={() => setStyle("cosmic")}
                    className={`px-4 py-2 rounded-full ${
                        style === "cosmic"
                            ? "bg-purple-600 text-white"
                            : "bg-gray-200"
                    }`}
                >
                    Cosmic
                </button>
                <button
                    onClick={() => setStyle("nature")}
                    className={`px-4 py-2 rounded-full ${
                        style === "nature"
                            ? "bg-green-600 text-white"
                            : "bg-gray-200"
                    }`}
                >
                    Nature
                </button>
                <button
                    onClick={() => setStyle("retro")}
                    className={`px-4 py-2 rounded-full ${
                        style === "retro"
                            ? "bg-orange-600 text-white"
                            : "bg-gray-200"
                    }`}
                >
                    Retro
                </button>
            </div>

            {/* Accordion */}
            <div className={currentStyle.container}>
                {items.map((item, index) => (
                    <div key={index} className="mb-2">
                        <button
                            onClick={() => toggle(index)}
                            className={currentStyle.button}
                        >
                            <span>{item.title}</span>
                            <svg
                                className={`w-5 h-5 ${
                                    currentStyle.icon
                                } transition-transform duration-300 ${
                                    open === index ? "rotate-180" : ""
                                }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>
                        {open === index && (
                            <div className={currentStyle.content}>
                                {item.content}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
