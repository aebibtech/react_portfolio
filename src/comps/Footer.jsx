export default function Footer({ year, siteName }){
    return(
        <footer className="flex justify-center sticky top-full py-4">
            <p>&copy; {year === "" ? new Date().getFullYear() : year} <span className="tracking-widest">{siteName}</span></p>
        </footer>
    )
}