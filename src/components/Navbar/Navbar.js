import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
    return (
        <nav className="nav">   
        <Link to="/" className="site-title">Sinziana Stanciu</Link>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About me</Link></li>
                <li><Link to="/projects">My projects</Link></li>
                <li><Link to="/contact">Contact me</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;