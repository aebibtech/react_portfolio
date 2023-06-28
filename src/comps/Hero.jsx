import { useContext } from "react"
import { GlobalContext, HeroHoverThemes, HeroButtonThemes } from "../Globals"

export default function Hero(){
    const { conf } = useContext(GlobalContext)
    
    return(
        <div className="py-16 lg:py-32 2xl:py-48 px-4 lg:mx-0 rounded shadow-2xl mt-8 lg:mt-24">
            <h1 className="text-2xl text-center md:text-4xl lg:text-7xl antialiased font-mono leading-relaxed">Hi! I'm <span className={`decoration-1 ${HeroHoverThemes[conf.theme]} rounded p-3`}>{conf.site_name}</span>!</h1>
            <h2 className="text-xl mt-4 text-center md:text-2xl lg:text-4xl">{conf.job_title}</h2>
            <a className={`block shadow-lg md:text-xl mx-auto py-3 md:py-6 mt-16 ${HeroButtonThemes[conf.theme]} hover:opacity-75 w-48 text-center rounded`} href="#Contact">Contact Me</a>
        </div>
    )
}