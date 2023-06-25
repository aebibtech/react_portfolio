export default function Header({ siteName, links }){
    function goTop(){
        console.log("Go top clicked")
        document.querySelector("#hero").scrollIntoView({ behavior:"smooth" })
    }

    return (
        <header className="flex py-3 justify-between sticky top-0 bg-gradient-to-r from-indigo-900 to-black">
            <a onClick={goTop} className="text-3xl font-semibold tracking-widest hover:text-blue-500 hover:cursor-pointer">{siteName}</a>
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