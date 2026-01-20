import "../App.css";

export default function Projects () {
    return (
        <main style={{ position: 'relative', zIndex: 1 }}>
            <h1 className="font-mono text-white pb-4">Projects</h1>
            <div className="grid grid-cols-4 gap-4">
                <div className="flex flex-col justify-center items-center px-6 py-3 bg-yellow-200 rounded-xl">
                    <h2 className="font-mono text-black text-4xl pb-2">Tripmates</h2>
                    <p className="font-mono text-black text-xl pb-2">
                        An itinerary planner app developed with Android studio on the 
                        frontend and Spring boot on the backend.
                    </p>
                    <a
                        href="https://www.youtube.com/watch?v=Q8cpGkN5yD8&list=PL6BdlkdKLEB-RhBjBTGRFWf87xXYjf9tq&index=18"
                        target="_blank"
                        className="flex block mb-4 items-center px-3 py-2 bg-black text-black rounded-xl hover:scale-110 transition-transform">
                            <span className="text-yellow-200 text-2xl">Demo</span>
                    </a>
                    <a
                        href="https://github.com/MadHyyper/Tripmates"
                        target="_blank"
                        className="flex items-center px-3 py-2 bg-black text-black rounded-xl hover:scale-110 transition-transform">
                            <span className="text-yellow-200 text-2xl">Github</span>
                    </a>
                </div>
            </div>
        </main>
    )
}