import { createContext } from "react"

export const GlobalContext = createContext({ theme: "", conf: null })

export const themes = {
    blue: "text-white bg-gradient-to-r from-indigo-900 to-black",
    white: "text-black bg-gradient-to-r from-white to-gray-100"
}

export const HeroHoverThemes = {
    blue: "bg-blue-950 hover:bg-white hover:text-blue-950",
    white: "bg-black text-white hover:opacity-75"
}

export const HeroButtonThemes = {
    blue: "bg-slate-900",
    white: "bg-black text-white"
}

export const ProjectThemes = {
    blue: "bg-blue-950",
    white: "bg-white"
}