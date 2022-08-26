import { useState, useEffect } from "react";
import "./navbar.scss";

const Navbar = () => {
    const [ navbarClassName, setNavbarClassName ] = useState("navbar-container");
    const addNavbarBackground = () => {
        console.log('ss', window.scrollY);
        if (window.scrollY >= 66) {
            setNavbarClassName('navbar-container bgColor');
        } else {
            setNavbarClassName("navbar-container");
        }
    }

    useEffect(() => {
        addNavbarBackground()
        // adding the event when scroll change background
        window.addEventListener("scroll", addNavbarBackground)
      })

    return <div className={navbarClassName}>
        {console.log(navbarClassName)}
        <ul>
            <li><a href="#contact-section">Contact</a></li>
            <li><a href="#project-section">Projects</a></li>
            <li><a href={require("./resume.txt")} download="Soumitri_Resume" target='_blank' rel="noreferrer">
                Download Resume
            </a></li>
            <li>Home</li>
        </ul>
    </div>
}

export default Navbar;