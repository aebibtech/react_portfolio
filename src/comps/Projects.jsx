import Project from "./Project"

export default function Projects({ projects }){
    return(
        <div className="p-4 mt-4 sm:mt-48" id="Projects">
            <h3 className="text-3xl sm:text-4xl md:text-7xl text-center mb-12">Projects</h3>
            <div className="grid sm:grid-cols-1 gap-y-12 md:gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                {projects && projects.map((proj) => proj.name !== "" ? <Project key={proj.name.trim()} project={proj} /> : null)}
            </div>
        </div>
    )
}