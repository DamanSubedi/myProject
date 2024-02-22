import React from "react";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home/Home";
import NavBar from "./NavBar/NavBar";
import Contact from "./contact/Contact";
import Error from "./error/Error";
import Loader from "./loader/Loader";
import Footer from "./footer/Footer";


export default function BrowserRouterSetup() {
    return (

        <Router>

            <Loader />
            <NavBar />
            <Routes>

                <Route exact path="/" element={<Home />} />
                <Route path="/contact/Contact" element={<Contact />} />



                <Route path="*" element={<Error />} />
            </Routes>
            <Footer/>
        </Router>

    )
}


