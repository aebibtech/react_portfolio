export default function Hero({ siteName, jobTitle }){
    return(
        <div className="py-20 px-4 sm:mx-auto lg:mx-0 rounded shadow-2xl">
            <h1 className="text-7xl antialiased font-mono leading-relaxed">Hi! I'm <span className="decoration-1 bg-blue-950 hover:bg-white hover:text-blue-950 rounded p-3">{siteName}</span>!</h1>
            <h2 className="text-4xl mt-2">{jobTitle}</h2>
            <a className="block shadow-lg lg:mx-0 text-xl py-6 mt-16 bg-slate-900 hover:bg-slate-800 w-48 text-center rounded" href="#Contact">Contact Me</a>
        </div>
    )
}