import "../App.css";
import Languages from "./Skills/Languages";

var state = 0;

export default function skills() {
    return (
        <main style={{ position: 'relative', zIndex: 1 }}>
            {/* Skills */}
            <h1 className="font-mono text-white pb-4">Skills</h1>
            {function renderState() {
                if (state == 0) {
                    // Render languages
                }
                else if (state == 1) {
                    // Render frameworks
                }
                else if (state == 2) {
                    // Render other tools
                }
            }}
        </main>
    )
}