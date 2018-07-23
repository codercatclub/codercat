import React from 'react';
import { projects } from '../constants';


export default function ProjectsView() {
  return (
    <div className="view" id="projects-view">
      <div className="main-container" id="project-container">
        {projects.map(project => (
          <a id="project-box" href={project.link} key={project.name}>
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
