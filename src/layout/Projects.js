import ProjectCard from "../components/ProjectCard";
import projectList from "../projectList";
import './projects.scss';
const Projects = () => {
    return <div className="projects-outer-container" id="project-section">
        <p className="headline">Projects</p>
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