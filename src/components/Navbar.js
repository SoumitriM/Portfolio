import { useState, useEffect } from "react";
import "./navbar.scss";

const Navbar = () => {
  const [navbarClassName, setNavbarClassName] = useState("navbar-container");
  const addNavbarBackground = () => {
    console.log('sjs', window.scrollY);
    if (window.scrollY >= 66) {
      setNavbarClassName('navbar-container bgColor');
    } else {
      setNavbarClassName("navbar-container");
    }
  }

  const scrollToTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
  }

  useEffect(() => {
    // adding the event when scroll change background
    window.addEventListener("scroll", addNavbarBackground);
  });

  return <div className={navbarClassName}>
    {console.log(navbarClassName)}
    <div className="hidden-div"></div>
    <ul>
      <a href="#"><li>About</li></a>
      <a href="#project-section"><li>Projects</li></a>
      <a href="#contact-section"><li>Contact</li></a>
      <a href={require("../assets/Soumitri_Resume_11_02_2023.pdf")} 
      download="Soumitri_Resume" 
      target='_blank'
      rel="noreferrer">
        <li> Download Resume</li>
      </a>
    </ul>
  </div>
}

export default Navbar;