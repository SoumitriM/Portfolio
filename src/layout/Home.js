import ProfilePicture from "../components/ProfilePicture";
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { IconContext } from "react-icons";
import css_logo from "../assets/skills/csslogo.png";
import htmllogo from "../assets/skills/htmllogo.png";
import jslogo from "../assets/skills/jslogo.png";
import reactlogo from "../assets/skills/reactlogo.png";
import nodelogo from "../assets/skills/nodelogo.png";
import "./home.scss";

const Home = () => {
  return <div className="home-container">
    <div className="introduction-container">
      <div>
        <div className="about-me-text">
          <p className="intro-line-1">Hi There!</p>
          <p className="intro-line-2">This is <span>Soumitri Mukherjee</span></p>
          <p className="intro-line-3">Frontend Developer</p>
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
    <div className="skill-section">
      <div className="sliding-skills">
        <div><img src={css_logo} alt="css" /></div>
        <div><img src={htmllogo} alt="html" /></div>
        <div><img src={jslogo} alt="js" /></div>
        <div><img src={reactlogo} alt="react" /></div>
        <div><img src={nodelogo} alt="node" /></div>
      </div>
      <div className="bar"></div>
    </div>
  </div>
};

export default Home;