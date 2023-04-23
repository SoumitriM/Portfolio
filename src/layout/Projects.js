import ProjectCard from "../components/ProjectCard";
import projectList from "../projectList";
import SectionHeader from "./SectionHeader";
import './projects.scss';
const Projects = () => {
    const title= "Projects";
    return <div className="projects-outer-container" id="project-section">
        <SectionHeader title={title}/>
        <div className="projects-container">
        {projectList.map(project => (
           <div className="child"><ProjectCard
                projectPicture={project.projectPicture}
                altText={project.altText}
                name={project.name}
                description={project.description}
                link={project.link}
            />
            </div>
        ))}
    </div>
    </div>
}

export default Projects;