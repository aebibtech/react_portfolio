export default function Project({ project }){
    return (
        <div className="rounded shadow-xl bg-blue-950">
            <img className="block object-fill w-full h-96" src={project.banner_image} alt={project.name} />
            <h4 className="text-5xl font-semibold p-3">{project.name}</h4>
            <p className="text-justify p-3">{project.description}</p>
        </div>
    )
}