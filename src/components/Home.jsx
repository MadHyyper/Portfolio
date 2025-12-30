import "../App.css";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

export default function Home() {

  return (
    <main style={{ position: 'relative', zIndex: 1 }}>
        {/* General text at top of page */}
        <h1 className="font-mono text-white pb-4">Welcome</h1>
        <div className="max-w-6xl mx-auto p-4">
            <p className="font-mono text-2xl text-white">
                My name is <span className="text-yellow-200">Conner Houdek</span>. I'm a software engineer who enjoys 
                <span className="text-yellow-200"> creating</span> new projects and <span className="text-yellow-200">solving problems</span>. 
                I've worked on a variety of projects including <span className="text-yellow-200">websites</span>, 
                <span className="text-yellow-200"> android apps</span>, and <span className="text-yellow-200">embedded systems development</span>. 
                I also have experience with <span className="text-yellow-200">managing databases</span>, <span className="text-yellow-200">CI/CD pipelines</span>,
                <span className="text-yellow-200"> Docker</span>, and several other <span className="text-yellow-200">frameworks</span> and <span className="text-yellow-200">programming languages </span>
                 across both personal projects and my academic career.</p>
        </div>

        {/* Container which stores icon-button links to github and linkedin */}
        <div className="mt-6 flex justify-center gap-6">
            <a
              href="https://github.com/MadHyyper"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform">
                <FaGithub className="text-yellow-200 text-5xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/conner-houdek-930b2a32a/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform">
                <FaLinkedin className="text-yellow-200 text-5xl" />
              </a>
        </div>

        {/* Container with button to download resume */}
        <div className="mt-6 flex justify-center">
            <a
              href="/resume.pdf"
              download
              className="flex items-center px-4 py-3 bg-yellow-200 text-black rounded hover:scale-110 transition-transform">
                <FaDownload className="text-black text-xl mr-4" /> <span className="text-xl text-mono text-black">Download Resume</span>
              </a>
        </div>
    </main>
  )
}