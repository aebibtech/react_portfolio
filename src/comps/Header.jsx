import { useContext } from "react"
import { GlobalContext, themes } from "../Globals"

export default function Header(){
    const { conf } = useContext(GlobalContext)

    return (
        <header className={`w-full ${themes[conf.theme]} hidden sm:flex sm:justify-between py-3 px-4 fixed top-0 z-40 shadow-lg`}>
            <button onClick={() => {  window.scrollTo({ top: 0, left: 0, behavior: "smooth" }) }} className="text-3xl font-semibold hover:bg-gray-700 p-1 hover:cursor-pointer flex items-center justify-center"><img src="/logo.png" className="w-12 h-12" /></button>
            <nav className="my-auto">
                <ul className="text-xl hidden sm:flex">
                    {conf.navlinks && conf.navlinks.map((link, key) => {
                        const {text, href} = link
                        return <li className="hover:bg-gray-700 decoration-dashed p-2 rounded transition-all" key={key}><a href={href}>{text}</a></li>
                    })}
                </ul>
            </nav>
        </header>
    )
}