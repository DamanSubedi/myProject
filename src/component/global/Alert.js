import "../../index.css"
import { useEffect } from "react";


export default function Alert({type, msg, person, show, showAlert}){

    useEffect(()=>{
        let alertTimer = setTimeout(showAlert, 2000)
        return ()=>{
            clearTimeout(alertTimer);
        }
    }, [show, person])

    return(
        <div className={`alert_container ${type}`}>
            <h1>{msg}</h1>
        </div>
    )
}