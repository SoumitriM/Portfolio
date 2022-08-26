import './projectcard.scss';
const ProjectCard = ({projectPicture, altText, name, description, link}) => {
    return <div className="card-container">
        {console.log('ll', process.env.PUBLIC_URL)}
        <div className="project-name">{name}</div>
        <div><img className="project-img" src={projectPicture} alt={altText} /></div>
        <div className="project-desc">{description}</div>
        <div className="project-view"> 
        <a href={link}><div className="project-view-btn">{link? "Open in new Tab" : "Work In Progress"}</div></a>
        </div>
    </div>
}

export default ProjectCard;