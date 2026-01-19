import "../App.css";
import Languages from "./Skills/Languages.jsx";
import Frameworks from "./Skills/Frameworks.jsx";
import Tools from "./Skills/Tools.jsx";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Skills() {
    const [index, setIndex] = useState(0);
    const views = [
        { label: "Languages", component: <Languages />},
        { label: "Frameworks", component: <Frameworks />},
        { label: "Tools", component: <Tools />}
    ];

    const next = () => {
        setIndex((i) => (i + 1) % views.length);
    }

    const prev = () => {
        setIndex((i) => (i === 0 ? views.length - 1 : i - 1));
    }

    return (
        <main style={{ position: 'relative', zIndex: 1 }}>
            <h1 className="font-mono text-white pb-4">Skills</h1>
            <div className="grid grid-cols-[1fr_auto_1fr] items-center w-[400px] mx-auto">
                {/* Header */}
                <button className="!bg-yellow-200 hover:scale-120 transition-transform justify-self-start" onClick={prev}><FaChevronLeft className="text-black text-xl" /></button>
                <h2 className="font-mono text-center text-yellow-200 pb-1 text-4xl">{views[index].label}</h2>
                <button className="!bg-yellow-200 hover:scale-120 transition-transform justify-self-end" onClick={next}><FaChevronRight className="text-black text-xl" /></button>
            </div>
            <div className="mt-6 flex justify-center gap-6">
                {/* Content */}
                {views[index].component}
            </div>
        </main>
    )
}