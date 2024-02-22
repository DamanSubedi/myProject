
import { FaWhatsapp } from "react-icons/fa"
import {FaFacebook, FaLinkedin, FaSquareWhatsapp, } from "react-icons/fa"
import { SiGmail } from "react-icons/si";

export const links= [
    {id: 1, nav: "Home", link: '/'},
    {id: 2, nav: "portfolio", link: '/'},
    {id: 3, nav: "about", link: '/'},
    {id: 4, nav: "contact", link: '/contact/Contact'},
]
export const socialLinks= [
    {id: 1, nav: "faceBook", icon: <FaFacebook/>, link: 'https://www.facebook.com'},
    {id: 2, nav: "linkedIn", icon: <FaLinkedin/>, link: 'https://www.linkedin.com'},
    {id: 3, nav: "whatsApp",icon: <FaWhatsapp/> , link: 'https://web.whatsapp.com/'},
    {id: 4, nav: "gmail", icon: <SiGmail/>, link: 'https://mail.google.com'},
]