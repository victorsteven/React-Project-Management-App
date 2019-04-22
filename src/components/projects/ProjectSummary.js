import React from 'react';

const ProjectSummary  = ({project}) => {
  return (
    <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">{project.title}</span>
          <p>{project.content}</p>
          <div className="gery-text">23 Aprial, 2019</div>
        </div>
      </div>
  )
}

export default ProjectSummary