import { createContext } from "react"

export const GlobalContext = createContext({ theme: "", conf: null })

export const themes = {
    blue: "text-white bg-gradient-to-r from-indigo-900 to-black",
    white: "text-black bg-white"
}