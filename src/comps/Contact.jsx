function ContactButton({ link, icon }){
    const BUTTON_STYLE = "rounded hover:opacity-75"
    return link !== "" ? <a className={BUTTON_STYLE} href={link} target="_blank"><img className="h-12 w-12 2xl:h-24 2xl:w-24 inline-block" src={icon} /></a> : null
}

export default function Contact({ contact }){
    const { github, gitlab, linkedin, youtube, facebook, messenger, twitter } = contact
    return(
        <div className="p-4 mt-4 sm:mt-48" id="Contact">
            <h3 className="text-3xl sm:text-4xl md:text-7xl text-center mb-12">Where to find me</h3>
            <div className="flex justify-center gap-4">
                <ContactButton link={github} icon="/assets/img/github.png" />
                <ContactButton link={gitlab} icon="/assets/img/github.png" />
                <ContactButton link={linkedin} icon="/assets/img/linkedin.png" />
                <ContactButton link={youtube} icon="/assets/img/youtube.png" />
                <ContactButton link={facebook} icon="/assets/img/facebook.png" />
                <ContactButton link={messenger} icon="/assets/img/messenger.png" />
                <ContactButton link={twitter} icon="/assets/img/twitter.png" />
            </div>
        </div>
    )
}