export default function Header({ siteName, links }){
    return (
        <header className="flex justify-between py-3 px-4 sticky top-0 bg-gradient-to-r from-indigo-900 to-black">
            <button onClick={() => {  window.scrollTo({ top: 0, left: 0, behavior: "smooth" }) }} className="text-3xl font-semibold tracking-widest hover:text-blue-500 hover:cursor-pointer">{siteName}</button>
            <nav className="my-auto">
                <ul className="text-xl flex gap-3 lg:visible">
                    {links && links.map((link, key) => {
                        const {text, href} = link
                        return <li className="hover:text-blue-500 hover:underline decoration-dashed" key={key}><a href={href}>{text}</a></li>
                    })}
                </ul>
            </nav>
        </header>
    )
}