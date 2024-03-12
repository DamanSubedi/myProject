import React, { Component, createRef, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

//importing icons

import { FaBars, FaTimes } from 'react-icons/fa'

//importing css
import '../../index.css'



import { FaWhatsapp } from "react-icons/fa"
import { FaFacebook, FaLinkedin, FaSquareWhatsapp, } from "react-icons/fa"
import { SiGmail } from "react-icons/si";

export const links = [
    { id: 1, nav: "Home", link: '/' },
    { id: 2, nav: "about", link: '/portfolio/Portfolio' },
    { id: 4, nav: "contact", link: '/contact/Contact' },
]
export const socialLinks = [
    { id: 1, nav: "faceBook", icon: <FaFacebook />, link: 'https://www.facebook.com' },
    { id: 2, nav: "linkedIn", icon: <FaLinkedin />, link: 'https://www.linkedin.com' },
    { id: 3, nav: "whatsApp", icon: <FaWhatsapp />, link: 'https://web.whatsapp.com/' },
    { id: 4, nav: "gmail", icon: <SiGmail />, link: "mailto:ssssssss6943@gmail.com"},
]


export default class NavBar extends Component {
    state = {
        showLink: false
    }

    componentDidMount() {
        // this.showLinks()
    }

    linkContainerRef = createRef(null)
    linksRef = createRef(null)
    socialRef = createRef(null)
    showLinks = () => {

        let linksHeight = this.linksRef.current.offsetHeight

        console.log(linksHeight)
        let socialHeight = this.socialRef.current.offsetHeight
        this.linkContainerRef.current.style.height = `${linksHeight + socialHeight + 24}px`
        if (!this.state.showLink) {

            this.linkContainerRef.current.style.height = `0px`
        }
    }

    render() {

        return (
            <nav className="nav">
                <div className="nav_container">
                    <div className="nav_center">
                        <div className="logo">
                            codeBy<span>Daman</span>
                        </div>
                        <button className="nav_toggle"
                            onClick={
                                () => {
                                    this.setState({
                                        showLink: !this.state.showLink
                                    }, this.showLinks)

                                }

                            }>
                            {this.state.showLink ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>

                    <div className="links_container" ref={this.linkContainerRef}>
                        <ul className="links" ref={this.linksRef}>
                            {links.map((l) => {
                                const { id, nav, link } = l
                                return (
                                    <li key={id} onClick={() => this.setState({
                                        showLink: !this.state.showLink
                                    }, this.showLinks)}>
                                        <Link to={link}>{nav}</Link>
                                    </li>
                                )
                            })}
                        </ul>

                        <ul className="social-links"
                            ref={this.socialRef}>
                            {socialLinks.map((social) => {
                                const { id, nav, link, icon } = social
                                return (
                                    <li key={id}
                                    onClick={()=>{
                                        this.setState({
                                            showLink : !this.setState.showLink
                                        }, this.showLinks)
                                    }}
                                    >
                                        <Link to={link}>{icon}</Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </nav >

        )
    }
}