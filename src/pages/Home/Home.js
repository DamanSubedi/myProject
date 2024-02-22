import React from "react";
import { Link } from "react-router-dom";

import Banner from '../../asset/banner.jpg'


//importing css
import './home.css'




export default function Home() {
    return (
        <main className="banner">
            <aside>
                <div className="title">
                    <h2>Hello, I'm <span>Daman</span>.</h2>
                    <h2>I'm <span>designer</span>.</h2>

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