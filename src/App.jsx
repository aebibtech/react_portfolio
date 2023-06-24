import { useEffect, useState } from "react"
import Header from "./comps/Header"
import Footer from "./comps/Footer"

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
    <div className="h-screen px-4 lg:px-12 bg-white dark:bg-slate-800 text-slate-900 dark:text-white">
      <Header siteName={conf.site_name} links={conf.navlinks} />
      <div>
        Aebibtech website
      </div>
      <Footer year={conf.year_created} siteName={conf.site_name} />
    </div>
  )
}

export default App
