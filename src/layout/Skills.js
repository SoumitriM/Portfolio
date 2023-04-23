import React from 'react'
import { SkillCard } from './SkillCard'
import css_logo from "../assets/skills/csslogo.png";
import htmllogo from "../assets/skills/htmllogo.png";
import jslogo from "../assets/skills/jslogo.png";
import reactlogo from "../assets/skills/reactlogo.png";
import nodelogo from "../assets/skills/nodelogo.png";
import nextjslogo from "../assets/skills/nextjs.svg";
import SectionHeader from './SectionHeader';
import "./skills.scss";
const skills = [
  {
  icon: reactlogo,
  text: "React"
},{
  icon: jslogo,
  text: "Javascript"
},{
  icon: nodelogo,
  text: "Node.JS"
},{
  icon: htmllogo,
  text: "HTML"
},{
  icon: css_logo,
  text: "CSS"
},{
  icon: nextjslogo,
  text: "NextJS"
}
]

const title="Skills";

const Skills = () => {
  return (
    <div className="skills-container">
      <SectionHeader title={title}/>
      <div className="skills-grid">
      {skills.map(skill => (
        <div key={skill.text}>
          <SkillCard logo={skill.icon} altText={skill.text}/>
        </div>
      ))}
      </div>
    </div>
  )
};

export default Skills;
