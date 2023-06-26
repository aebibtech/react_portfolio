export default function Header({ siteName, links }){
    return (
        <header className="w-full hidden sm:flex sm:justify-between py-3 px-4 fixed top-0 z-50 bg-gradient-to-r from-indigo-900 to-black">
            <button onClick={() => {  window.scrollTo({ top: 0, left: 0, behavior: "smooth" }) }} className="text-3xl font-semibold tracking-widest hover:text-blue-500 hover:cursor-pointer">{siteName}</button>
            <nav className="my-auto">
                <ul className="text-xl gap-3 hidden sm:flex">
                    {links && links.map((link, key) => {
                        const {text, href} = link
                        return <li className="hover:text-blue-500 hover:underline decoration-dashed" key={key}><a href={href}>{text}</a></li>
                    })}
                </ul>
            </nav>
        </header>
    )
}