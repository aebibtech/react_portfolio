import { useContext } from "react"
import { GlobalContext, HeroHoverThemes, HeroButtonThemes } from "../Globals"

export default function Hero(){
    const { conf } = useContext(GlobalContext)
    
    return(
        <div className="h-screen rounded shadow-2xl flex flex-col justify-center items-center">
            <h1 className="text-2xl md:text-4xl lg:text-7xl antialiased font-mono leading-relaxed">Hi! I'm <span className={`decoration-1 ${HeroHoverThemes[conf.theme]} rounded p-3`}>{conf.site_name}</span>!</h1>
            <h2 className="text-xl mt-4 md:text-2xl lg:text-4xl text-center ">{conf.job_title}</h2>
            <a className={`inline-block font-medium shadow-lg md:text-xl py-3 md:py-4 mt-16 ${HeroButtonThemes[conf.theme]} hover:opacity-75 w-48 text-center rounded`} href="#Contact">Contact Me</a>
        </div>
    )
}