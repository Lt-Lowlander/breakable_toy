import React from 'react';
import { Link } from 'react-router';

const ProjectShowTile = (props) => {
  return(
    <div className="project-show-tile">
        <div className="">
          <img src={props.image} alt={props.name} className="project-show-pic"/>
          <div className="project-show-info">
            <div className="project-show-title">
              {props.name}
            </div>
            <div className="project-show-version">
              Mark {props.iteration}
            </div>
            <div className="project-show-description">
              Description: {props.desc}
            </div>
          </div>
        </div>
    </div>
  )
}

export default ProjectShowTile;
