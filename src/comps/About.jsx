import { useContext } from "react"
import { GlobalContext } from "../Globals"

export default function About(){
    const { conf } = useContext(GlobalContext)

    return(
        <div className="py-16 px-4 mt-4 sm:mt-48 shadow-2xl" id="About">
            <h3 className="text-3xl sm:text-4xl md:text-7xl text-center mb-12">About Me</h3>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-4xl mx-auto">
                <figure className="w-48 h-48 flex-shrink-0 align-center justify-center rounded-full overflow-hidden shadow-lg">
                    <img src={conf.about && conf.about.pic_link} alt="profile_pic" />
                </figure>
                <div>
                    <p className="text-3xl">{conf.about && conf.about.name}</p>
                    <p className="text-xl">{conf.about && (new Date().getFullYear() - conf.about.birth_year)}, {conf.about && conf.about.gender}</p>
                    <p className="text-xl">{conf.about && conf.about.location}</p>
                    <p className="text-xl">{conf.about && conf.about.bio}</p>
                </div>
            </div>
        </div>
    )
}