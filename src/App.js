import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import Footer from "./components/Footer"

export default function App(){
    return (
        <div className="body">
            <Navbar/>
            <Main />
            <Footer/>
        </div>
    )
}