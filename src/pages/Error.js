import { Link } from "react-router-dom";

import "../index.css"

export default function Error(){
    return(
        <section className="error_container">
            <h1>
                404: page not found
            </h1>
            <button className="btn">
                <Link to={'/'}>
                back to home
                </Link>
            </button>
        </section>
    )
}