import ProfilePicture from "../components/ProfilePicture";
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { IconContext } from "react-icons";

import Typewriter from "typewriter-effect";
import "./home.scss";
import { useEffect, useState } from "react";

const Home = () => {


  return <div className="home-container">
    <div className="introduction-container">
      <div>
        <div className="about-me-text">
          <p className="intro-line-1">Hii..</p>
          <p className="intro-line-2">This is <span>Soumitri Mukherjee</span></p>
          <div className="intro-line-3">
            <Typewriter

              onInit={(typewriter) => {

                typewriter

                  .typeString("And I am....")

                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Frontend Developer")
                  .start();
              }}
            />
          </div>
        </div>
        <div className="contactBtn">
          Contact via Email
        </div>
        <div className="about-me-links">
          <IconContext.Provider value={{ className: 'react-icons' }}>
            <a href="https://github.com/SoumitriM" target="_blank" rel="noreferrer">< FaGithub /></a>
            <a href="https://www.linkedin.com/in/soumitri-mukherjee/" target="_blank" rel="noreferrer">< FaLinkedin /></a>
            <a href="https://www.instagram.com/soumitri_/" target="_blank" rel="noreferrer">< FaInstagram /></a>
          </IconContext.Provider>
        </div>
      </div>

      <div className="about-me-dp"><ProfilePicture /></div>
    </div>
  </div>
};

export default Home;