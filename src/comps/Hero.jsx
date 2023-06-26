export default function Hero({ siteName, jobTitle }){
    return(
        <div className="py-16 lg:py-32 px-4 lg:mx-0 rounded shadow-2xl lg:mt-24">
            <h1 className="text-2xl text-center sm:text-start md:text-4xl lg:text-7xl antialiased font-mono leading-relaxed">Hi! I'm <span className="decoration-1 bg-blue-950 hover:bg-white hover:text-blue-950 rounded p-3">{siteName}</span>!</h1>
            <h2 className="text-xl text-center sm:text-start md:text-2xl lg:text-4xl mt-2">{jobTitle}</h2>
            <a className="block shadow-lg lg:mx-0 md:text-xl mx-auto sm:mx-0 py-3 md:py-6 mt-16 bg-slate-900 hover:bg-slate-800 w-48 text-center rounded" href="#Contact">Contact Me</a>
        </div>
    )
}