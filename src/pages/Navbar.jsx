import React from "react";
import { Link } from "react-router-dom";
import "../styles/Nav.css"

const Navbar = () =>{
    return(
    <nav id="navbar" className="flex justify-end items-center mt-5 top-0 absolute">
        <h1 className="text-white font-semibold text-5xl absolute left-12">TaskFlow</h1>
        <div className="flex text-white font-medium">
            <Link to="howWorks" className="mr-6 text-lg cursor-pointer static">How works</Link>
            <Link to="about" className="mr-6 text-lg cursor-pointer static">About</Link>
            <Link to="login" className="mr-6 text-lg cursor-pointer static">Login/Register</Link>
        </div>
        <div className="flex flex-col items-center rounded-lg w-12 h-12 ml-8 mr-5 cursor-pointer" id="profile-img">
            <div className="bg-white mt-1 rounded-full w-5 h-5"></div>
            <div className="bg-white w-7  h-3 absolute mt-7" id="profile-img-body"></div>
        </div>
    </nav>)
}
const navbar = ["About", "How works?", "Login/Register"]

export default Navbar;