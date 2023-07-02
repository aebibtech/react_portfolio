import { useContext } from "react"
import { GlobalContext, themes } from "../Globals"

export default function Header(){
    const { conf } = useContext(GlobalContext)

    return (
        <header className={`w-full ${themes[conf.theme]} hidden sm:flex sm:justify-between py-3 px-4 fixed top-0 z-40 shadow-lg`}>
            <button onClick={() => {  window.scrollTo({ top: 0, left: 0, behavior: "smooth" }) }} className="text-3xl font-semibold tracking-widest hover:opacity-75 hover:cursor-pointer">{conf.site_name}</button>
            <nav className="my-auto">
                <ul className="text-xl gap-3 hidden sm:flex">
                    {conf.navlinks && conf.navlinks.map((link, key) => {
                        const {text, href} = link
                        return <li className="hover:opacity-75 hover:underline decoration-dashed" key={key}><a href={href}>{text}</a></li>
                    })}
                </ul>
            </nav>
        </header>
    )
}