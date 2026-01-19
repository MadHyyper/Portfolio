import "../../App.css";
import { SiReact, SiLaravel, SiDotnet, SiAndroidstudio } from "react-icons/si";


export default function Frameworks() {
    return (
        <div className="grid grid-cols-4 gap-4">
            <div className="flex flex-col justify-center items-center px-8 py-4 bg-yellow-200 rounded-xl">
                <SiReact className="text-black text-8xl pb-4"></SiReact>
                <p className="font-mono text-black text-4xl">React</p>
            </div>  
            <div className="flex flex-col justify-center items-center px-8 py-4 bg-yellow-200 rounded-xl">
                <SiLaravel className="text-black text-8xl pb-4"></SiLaravel>
                <p className="font-mono text-black text-4xl">Laravel</p>
            </div>  
            <div className="flex flex-col justify-center items-center px-8 py-4 bg-yellow-200 rounded-xl">
                <SiDotnet className="text-black text-8xl pb-4 translate-x-1"></SiDotnet>
                <p className="font-mono text-black text-4xl -translate-x-0.5">.NET</p>
            </div> 
            <div className="flex flex-col justify-center items-center px-8 py-4 bg-yellow-200 rounded-xl">
                <SiAndroidstudio className="text-black text-8xl pb-4"></SiAndroidstudio>
                <p className="font-mono text-black text-4xl">Android Studio</p>
            </div> 
        </div>
    )
}