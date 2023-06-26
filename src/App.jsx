import { useEffect, useState } from "react"
import Header from "./comps/Header"
import Footer from "./comps/Footer"
import Hero from "./comps/Hero"
import Projects from "./comps/Projects"

function App() {
  const [conf, setConf] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    (async function(){
      setLoading(() => true)
      const response = await fetch("/site.config.json")
      const siteConfig = await response.json()
      console.log(siteConfig)
      setConf(siteConfig)
      document.title = siteConfig.site_name
      setLoading(() => false)
    })()
  }, [])

  return (
    <div className="no-scrollbar h-screen w-screen sm:px-0 2xl:px-48 text-white bg-gradient-to-r from-indigo-900 to-black">
      <div className={`h-screen w-screen ${ loading ? "visible" : "hidden" } fixed left-0 flex justify-center items-center bg-gradient-to-r from-indigo-900 to-black overflow-y-auto z-10`} role="status">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
      </div>
      <Header siteName={conf.site_name} links={conf.navlinks} />
      <Hero siteName={conf.site_name} jobTitle={conf.job_title} />
      <Projects projects={conf.projects} />
      <Footer year={conf.year_created} siteName={conf.site_name} email={conf.email} />
    </div>
  )
}

export default App
