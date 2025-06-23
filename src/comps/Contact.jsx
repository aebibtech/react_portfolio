import { useContext } from "react"
import { GlobalContext } from "../Globals"

function ContactButton({ link, icon }){
    const BUTTON_STYLE = "rounded hover:scale-125 transition-all duration-300 flex items-center justify-center h-12 w-12"
    return link !== "" || link !== null || link !== undefined ? <a className={BUTTON_STYLE} href={link} target="_blank"><img className="inline-block" src={icon} /></a> : null
}

export default function Contact(){
    const { conf } = useContext(GlobalContext)
    
    return(
        <div className="h-screen flex flex-col align-center justify-center" id="Contact">
            <h3 className="text-3xl sm:text-4xl md:text-7xl text-center mb-12">Let's Connect</h3>
            <div className="flex justify-center gap-4">
                {conf.contact && Object.keys(conf.contact).map(socmed => {
                    return conf.contact[socmed] && <ContactButton link={conf.contact[socmed]} icon={`/assets/img/${socmed}.png`} />
                })}
            </div>
        </div>
    )
}