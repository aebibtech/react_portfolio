export default function Footer({ year, siteName, email }){
    return(
        <footer className="flex justify-center sticky top-full py-4">
            <p>&copy; {year === "" ? new Date().getFullYear() : year} <a href={`mailto:${email}`} target="_blank" rel="noreferrer noopener" className="tracking-widest hover:underline">{siteName}</a></p>
        </footer>
    )
}