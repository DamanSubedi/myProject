import "../../index.css"
import { useEffect } from "react";


export default function Alert({type, msg, person, show, showAlert}){

    useEffect(()=>{
        let alertTimer = setTimeout(showAlert, 4000)
        return ()=>{
            clearTimeout(alertTimer);
        }
    }, [show, person])

    return(
        <div className={`alert_container ${type}`}>
            <p>{msg}</p>
        </div>
    )
}