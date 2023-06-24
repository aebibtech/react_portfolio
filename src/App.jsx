import { useEffect, useState } from "react"
import Header from "./comps/Header"
import Footer from "./comps/Footer"
import Hero from "./comps/Hero"

function App() {
  const [conf, setConf] = useState({})

  useEffect(() => {
      (async function(){
          const response = await fetch("/site.config.json")
          const siteConfig = await response.json()
          console.log(siteConfig)
          setConf(siteConfig)
          document.title = siteConfig.site_name
      })()
  }, [])

  return (
    <div className="h-screen w-screen px-4 lg:px-12 text-white bg-gradient-to-r from-indigo-900 to-black overflow-y-auto">
      <Header siteName={conf.site_name} links={conf.navlinks} />
      <Hero siteName={conf.site_name} jobTitle={conf.job_title} />
      <Footer year={conf.year_created} siteName={conf.site_name} email={conf.email} />
    </div>
  )
}

export default App
