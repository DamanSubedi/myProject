import React from "react";
import { Link } from "react-router-dom";



//importing css
import '../index.css'




export default function Home() {
    return (
        <main className="banner">
            <aside>
                <div className="title">
                    <h2>Hello, </h2>
                    <h2>I'm</h2>
                        <div className="animate_title">
                            <span>Daman</span>
                            <span>designer</span>
                            <span>developer</span>
                        </div>
                    


                    <div className="info">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                        <p>
                            Suscipit voluptatibus iusto possimus consectetur cupiditate recusandae.
                        </p>
                    </div>
                </div>
                <button className="btn">
                    <Link to={'/contact/Contact'}>get in touch
                    </Link>
                </button>
            </aside>
        </main>
    )
}