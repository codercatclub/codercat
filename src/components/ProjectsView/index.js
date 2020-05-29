import React from 'react';
import projects from '../../constants/projects';
import s from './index.module.css';

const serverURL = process.env.REACT_APP_CODERCAT_SERVER_URL || '';
const makeProjectLink = route => route.startsWith('http') ? route : `${serverURL}/${route}`;

const ProjectsView = () => {
  return (
    <div className="view" id="projects-view">
      <div className="main-container" id="project-container">
        {projects.map(project => (
          <a id="project-box" href={makeProjectLink(project.route)} key={project.name}>
            <img src={project.img} alt={project.name} />
            <h1 id="box-title">
              {project.name}
            </h1>
          </a>
        ))}
      </div>
    </div>
  );
}

export default ProjectsView;