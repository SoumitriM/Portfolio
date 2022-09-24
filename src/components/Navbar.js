import { useState, useEffect } from "react";
import "./navbar.scss";

const Navbar = () => {
    const [ navbarClassName, setNavbarClassName ] = useState("navbar-container");
    const addNavbarBackground = () => {
        console.log('sjs', window.scrollY);
        if (window.scrollY >= 66) {
            setNavbarClassName('navbar-container bgColor');
        } else {
            setNavbarClassName("navbar-container");
        }
    }

    window.addEventListener("scroll", () => {
        console.log('ff');
    });

    const scrollToTop = () => {
        document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; 
    }

    useEffect(() => {
        // adding the event when scroll change background
        window.addEventListener("scroll", () => {
            console.log('ff');
        });
        //window.addEventListener("scroll", addNavbarBackground);
      });

    return <div className={navbarClassName}>
        {console.log(navbarClassName)}
        <div className="hidden-div"></div>
        <ul>
            <li><a onClick={scrollToTop}>About</a></li>
            <li><a href="#project-section">Projects</a></li>
            <li><a href="#contact-section">Contact</a></li>
            <li><a href={require("./soumitri_resume.pdf")} download="Soumitri_Resume" target='_blank' rel="noreferrer">
                Download Resume
            </a></li>
        </ul>
    </div>
}

export default Navbar;