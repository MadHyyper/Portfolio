import "../../App.css";
import { SiDocker, SiSpringboot, SiHtml5, SiCss3, SiNodedotjs, SiMysql, SiMongodb, SiGit, SiTailwindcss } from "react-icons/si";
import { FaMicrochip } from "react-icons/fa";


export default function Tools() {
    return (
        <div className="grid grid-cols-4 gap-4">
            <div className="flex flex-col justify-center items-center px-8 py-4 bg-yellow-200 rounded-xl">
                <SiDocker className="text-black text-8xl pb-4"></SiDocker>
                <p className="font-mono text-black text-4xl">Docker</p>
            </div>
            <div className="flex flex-col justify-center items-center px-8 py-4 bg-yellow-200 rounded-xl">
                <SiSpringboot className="text-black text-8xl pb-4"></SiSpringboot>
                <p className="font-mono text-black text-4xl">Spring Boot</p>
            </div>
            <div className="flex flex-col justify-center items-center px-8 py-4 bg-yellow-200 rounded-xl">
                <SiHtml5 className="text-black text-8xl pb-4"></SiHtml5>
                <p className="font-mono text-black text-4xl">HTML</p>
            </div>
            <div className="flex flex-col justify-center items-center px-8 py-4 bg-yellow-200 rounded-xl">
                <SiCss3 className="text-black text-8xl pb-4"></SiCss3>
                <p className="font-mono text-black text-4xl">CSS</p>
            </div>   
            <div className="flex flex-col justify-center items-center px-8 py-4 bg-yellow-200 rounded-xl">
                <SiTailwindcss className="text-black text-8xl pb-4"></SiTailwindcss>
                <p className="font-mono text-black text-4xl">Tailwind</p>
            </div>   
            <div className="flex flex-col justify-center items-center px-8 py-4 bg-yellow-200 rounded-xl">
                <SiNodedotjs className="text-black text-8xl pb-4"></SiNodedotjs>
                <p className="font-mono text-black text-4xl">NodeJS</p>
            </div>
            <div className="flex flex-col justify-center items-center px-8 py-4 bg-yellow-200 rounded-xl">
                <SiMysql className="text-black text-8xl pb-4"></SiMysql>
                <p className="font-mono text-black text-4xl">MySql</p>
            </div>
            <div className="flex flex-col justify-center items-center px-8 py-4 bg-yellow-200 rounded-xl">
                <SiMongodb className="text-black text-8xl pb-4"></SiMongodb>
                <p className="font-mono text-black text-4xl">MongoDB</p>
            </div>
            <div className="flex flex-col justify-center items-center px-8 py-4 bg-yellow-200 rounded-xl">
                <SiGit className="text-black text-8xl pb-4"></SiGit>
                <p className="font-mono text-black text-4xl">Git</p>
            </div>
            <div className="flex flex-col justify-center items-center px-8 py-4 bg-yellow-200 rounded-xl">
                <FaMicrochip className="text-black text-8xl pb-4"></FaMicrochip>
                <p className="font-mono text-black text-4xl">FPGA Design</p>
            </div>
        </div>
    )
}