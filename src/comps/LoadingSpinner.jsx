import { useContext } from "react"
import { GlobalContext, themes } from "../Globals"

export default function LoadingSpinner({ loading }){
    const { conf } = useContext(GlobalContext)

    return (
        <div className={`h-screen w-screen ${ loading ? "visible" : "hidden" } ${themes[conf.theme]} fixed left-0 flex justify-center items-center overflow-y-auto z-10`} role="status">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
        </div>
    )
}