export default function Header({ siteName, links }){
    return (
        <header className="flex py-3 mix-blend-mutliply justify-between">
            <a className="text-3xl font-semibold tracking-widest hover:text-blue-500" href="#">{siteName}</a>
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