import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { links, socialLinks } from './data'

//importing icons

import { FaBars, FaTimes } from 'react-icons/fa'

//importing css
import './navBar.css'





export default function NavBar() {
    const [showLink, setShowLink] = useState(false)
    
    const linkContainerRef = useRef(null)
    const linksRef = useRef(null)
    const socialRef = useRef(null)

    useEffect(()=>{
        let linkHeight = linksRef.current.getBoundingClientRect().height;
        let socialLinkHeight = socialRef.current.getBoundingClientRect().height;

        if(showLink){   
            linkContainerRef.current.style.height = `${linkHeight + socialLinkHeight + 32}px`
        }else{
            linkContainerRef.current.style.height = 0
        }
        }, [showLink])

    return (
        <nav className="nav">
            <div className="nav_container">
                <div className="nav_center">
                    <div className="logo">
                        codeBy<span>Daman</span>
                    </div>
                    <button className="nav_toggle"
                    onClick={()=> setShowLink(!showLink)}>
                        {showLink? <FaTimes/>:<FaBars/>}
                    </button>
                </div>

                <div className="links_container" ref={linkContainerRef}>
                    <ul className="links" ref={linksRef}>
                        {links.map((l) => {
                            const { id, nav, link } = l
                            return (
                                <li key={id}>
                                    <Link to={link}>{nav}</Link>
                                </li>
                            )
                        })}
                    </ul>

                    <ul className="social-links"
                    ref={socialRef}>
                        {socialLinks.map((social) => {
                            const {id, nav,link, icon} = social
                            return(
                                <li key={id}>
                                    <Link to={link}>{icon}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </nav>

    )
}