import { useEffect, useState } from "react"
import Header from "./comps/Header"
import Footer from "./comps/Footer"
import Hero from "./comps/Hero"
import Projects from "./comps/Projects"
import Skills from "./comps/Skills"
import Contact from "./comps/Contact"
import { GlobalContext, themes } from "./Globals"
import LoadingSpinner from "./comps/LoadingSpinner"
import About from "./comps/About"

function App() {
  const [conf, setConf] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    (async function(){
      setLoading(() => true)
      const response = await fetch("/site.config.json")
      const siteConfig = await response.json()
      setConf(siteConfig)
      document.title = siteConfig.site_name
      document.body.classList.add(...themes[siteConfig.theme].split(" "))
      setLoading(() => false)
    })()
  }, [])

  return (
    <GlobalContext.Provider value={{ conf: conf }}>
      <div className={`${themes[conf.theme]}`}>
        <LoadingSpinner loading={loading} />
        <Header />
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
        <Footer />
      </div>
    </GlobalContext.Provider>
  )
}

export default App
