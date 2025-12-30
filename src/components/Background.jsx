import { useState, useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadTrianglesPreset } from "@tsparticles/preset-triangles";
import { isMobile } from "react-device-detect";

export default function Home() {
    const [init, setInit] = useState(false);
    const particleCount = isMobile ? 60 : 220;

    // Initialize particle engine
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadTrianglesPreset(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    if (!init) return null;

    return (
        <Particles
            id="tsparticles"
            options={{
                preset: "triangles",

                fullScreen: {
                    enable: true,
                    zIndex: -1 // Puts particles behind other page elements
                },

                background: {
                    color: {
                        value: "#08141dff" // Dark blue background
                    }
                },

                fpsLimit: 120,

                particles: {
                    color: {
                        value: "#fef08a" // White particles
                    },
                    links: {
                        color: "rgba(36, 97, 122, 1)", // Grey links
                    },
                    move: {
                        speed: 1 // Moderate speed
                    },
                    size: {
                        value: 4 // Medium size
                    },
                    number: {
                        value: particleCount, // 40 for mobile, 220 for desktop.
                    }
                },
            }}
    />
  );
}