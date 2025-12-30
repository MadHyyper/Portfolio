import { useState, useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadTrianglesPreset } from "@tsparticles/preset-triangles";

export default function Home() {
    const [init, setInit] = useState(false);

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

                particles: {
                    color: {
                        value: "#f6f889ff" // White particles
                    },
                    links: {
                        color: "rgba(36, 97, 122, 1)", // Grey links
                    },
                    move: {
                        speed: 2 // Moderate speed
                    },
                    size: {
                        value: 3 // Medium size
                    },
                    number: {
                        value: 80
                    }
                },
            }}
    />
  );
}