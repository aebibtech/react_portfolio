import { createContext } from "react"

export const GlobalContext = createContext({ conf: null })

function addSystemTheme(obj){
    obj.system = `${obj.white} ${obj.dark.split(" ").map(css => `dark:${css}`).join(" ")}`
    return obj
}

export const themes = addSystemTheme({
    blue: "text-white bg-gradient-to-r from-indigo-900 to-black",
    white: "text-black bg-gradient-to-r from-white to-gray-100",
    dark: "text-white bg-gradient-to-r from-neutral-800 to-black"
})

export const HeroHoverThemes = addSystemTheme({
    blue: "bg-blue-950 hover:bg-white hover:text-blue-950",
    white: "bg-black text-white hover:opacity-75",
    dark: "bg-black hover:bg-white hover:text-black"
})

export const HeroButtonThemes = addSystemTheme({
    blue: "bg-slate-900",
    white: "bg-black text-white",
    dark: "bg-white text-black"
})

export const ProjectThemes = addSystemTheme({
    blue: "bg-blue-950",
    white: "bg-white",
    dark: "bg-black"
})
