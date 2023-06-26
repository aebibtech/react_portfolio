export default function Project({ project }){
    return (
        <div onClick={() => { window.open(project.link, "_blank") }} className="rounded shadow-xl bg-blue-950 hover:cursor-pointer hover:opacity-75">
            <img className="block object-fill w-full h-48" src={project.banner_image} alt={project.name} />
            <h4 className="text-2xl md:text-4xl font-semibold p-3">{project.name}</h4>
            <p className="text-justify p-3">{project.description}</p>
        </div>
    )
}