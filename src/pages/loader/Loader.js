import { useEffect, useState } from "react"

import './loader.css'


function Preloader() {
    return (

        <div className="loader_container">
            <div className="loader">
                codeBy<span>Daman</span>
            </div>
        </div>
    )
}

export default function Loader() {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        window.addEventListener("load", () => setIsLoading(false))
        // setIsLoading(false)
        return () => {
            window.removeEventListener("load", () => setIsLoading(false))
        }

    }, [])




    return (
        <>
            {isLoading && <Preloader/>}
        </>


    )

}


