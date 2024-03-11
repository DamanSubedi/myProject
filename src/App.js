
import { Routes, Route } from "react-router-dom"

// importing pages
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Error from "./pages/Error"
import Loader from "./component/global/Loader"
import NavBar from "./component/global/NavBar"
import Footer from "./component/global/Footer"
import About from "./pages/About"



export default function App() {
    return (

        <>


            <Loader />
            <NavBar />
            <Routes>

                <Route exact path="/" element={<Home />} />
                <Route path="/contact/Contact" element={<Contact />} />
                <Route exact path="/portfolio/Portfolio" element={<About />} />



                <Route path="*" element={<Error />} />
            </Routes>
            <Footer/>
        </>

    )
}

