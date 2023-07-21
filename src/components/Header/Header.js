import React from 'react'
import { Link } from "react-router-dom"
import "./Header.css"

export default function Header() {
    return (
        <header>
            <h1>Welcome to My Page. Hope you like it</h1>
            <nav>
                <ul>
                    <li><Link to={"/"}>Home</Link></li> 
                    <li><Link to={"/about"}>About</Link></li> 
                    <li><Link to={"/contact"}>Contact</Link></li> 
                </ul>
            </nav>
        </header>
    )
}
