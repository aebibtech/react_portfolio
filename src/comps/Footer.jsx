import { useContext } from "react"
import { GlobalContext } from "../Globals"

export default function Footer(){
    const { conf: { year_created, email, site_name } } = useContext(GlobalContext)
    
    return(
        <footer className="flex justify-center sticky top-full py-4">
            <p>&copy; {year_created === "" || year_created === null || year_created === undefined ? new Date().getFullYear() : year_created} <a href={`mailto:${email}`} target="_blank" rel="noreferrer noopener" className="tracking-widest hover:underline">{site_name}</a></p>
        </footer>
    )
}