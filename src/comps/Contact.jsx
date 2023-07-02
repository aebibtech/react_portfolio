import { useContext } from "react"
import { GlobalContext } from "../Globals"

function ContactButton({ link, icon }){
    const BUTTON_STYLE = "rounded hover:opacity-75"
    return link !== "" || link !== null || link !== undefined ? <a className={BUTTON_STYLE} href={link} target="_blank"><img className="h-12 w-12 2xl:h-24 2xl:w-24 inline-block" src={icon} /></a> : null
}

export default function Contact(){
    const { conf } = useContext(GlobalContext)
    
    return(
        <div className="p-4 mt-4 sm:mt-48" id="Contact">
            <h3 className="text-3xl sm:text-4xl md:text-7xl text-center mb-12">Where to find me</h3>
            <div className="flex justify-center gap-4">
                {conf.contact && Object.keys(conf.contact).map(socmed => {
                    return conf.contact[socmed] && <ContactButton link={conf.contact[socmed]} icon={`/assets/img/${socmed}.png`} />
                })}
            </div>
        </div>
    )
}