import React from 'react';
import projects from '../../constants/projects';
import s from './index.module.css';

const serverURL = process.env.REACT_APP_CODERCAT_SERVER_URL || '';
const makeProjectLink = (route) =>
  route.startsWith('http') ? route : `${serverURL}/${route}`;

const ProjectsView = () => {
  // Coder cat logo colors
  const overlayColors = ['#ee7a39', '#fc9827', '#f7d72d', '#28d3c2', '#31b2c3'];

  const projectElements = projects.map((project) => {
    const colorIndex = Math.floor(Math.random() * overlayColors.length);
    const overlayColor = overlayColors[colorIndex];

    return (
      <a
        id="project-box"
        href={makeProjectLink(project.route)}
        key={project.name}
        className={s.projectLink}
      >
        <div className={s.overlay} style={{ backgroundColor: overlayColor }}>
          <h1 className={s.projectTitle}>{project.name}</h1>
        </div>
        <img className={s.img} src={project.img} alt={project.name} />
      </a>
    );
  });

  return (
    <div className="view" id="projects-view">
      <div className={s.projectBox} id="project-container">
        {projectElements}
      </div>
    </div>
  );
};

export default ProjectsView;
