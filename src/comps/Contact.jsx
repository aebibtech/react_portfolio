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
                {conf.contact && conf.contact.github && <ContactButton link={conf.contact.github} icon="/assets/img/github.png" />}
                {conf.contact && conf.contact.gitlab && <ContactButton link={conf.contact.gitlab} icon="/assets/img/github.png" />}
                {conf.contact && conf.contact.linkedin && <ContactButton link={conf.contact.linkedin} icon="/assets/img/linkedin.png" />}
                {conf.contact && conf.contact.youtube && <ContactButton link={conf.contact.youtube} icon="/assets/img/youtube.png" />}
                {conf.contact && conf.contact.facebook && <ContactButton link={conf.contact.facebook} icon="/assets/img/facebook.png" />}
                {conf.contact && conf.contact.messenger && <ContactButton link={conf.contact.messenger} icon="/assets/img/messenger.png" />}
                {conf.contact && conf.contact.twitter && <ContactButton link={conf.contact.twitter} icon="/assets/img/twitter.png" />}
            </div>
        </div>
    )
}