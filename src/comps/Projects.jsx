import Project from "./Project"
import { useContext } from "react"
import { GlobalContext } from "../Globals"

export default function Projects(){
    const { conf } = useContext(GlobalContext)

    return(
        <div className="p-4 mt-4 sm:mt-48" id="Projects">
            <h3 className="text-3xl sm:text-4xl md:text-7xl text-center mb-12">I have worked on</h3>
            <div className="grid sm:grid-cols-1 gap-y-12 md:gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                {conf.projects && conf.projects.map((proj) => proj.name !== "" ? <Project key={proj.name.trim()} project={proj} /> : null)}
            </div>
        </div>
    )
}