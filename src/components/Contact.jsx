import "../App.css";
import { MdMail } from "react-icons/md";

export default function Contact () {
    return (
        <main style={{ position: 'relative', zIndex: 1 }}>
            <h1 className="font-mono text-white pb-4">Contact Me</h1>
            <div className="flex flex-col justify-center items-center max-w-6xl mx-auto p-4">
                <p className="font-mono text-2xl text-white pb-4">
                    If you would like to contact me, feel free to reach out to me!
                </p>
                <a
                    href="mailto:cmhoudek04@gmail.com"
                    target="_blank"
                    className="flex items-center px-3 py-2 bg-yellow-200 text-black rounded-xl hover:scale-110 transition-transform">
                        <MdMail className="text-black text-2xl"></MdMail>
                        <span className="font mono text-black text-2xl pl-2 pr-2 -translate-y-0.5">Email me</span>
                        <MdMail className="text-black text-2xl"></MdMail>
                </a>
            </div>
        </main>
    )
}