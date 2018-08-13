import React from 'react';
import { Link } from 'react-router';

const ProjectShowTile = (props) => {
  return(
    <div className="project-show-tile">
        <div className="">
          <img src={props.image} alt={props.name} className="project-show-pic"/>
          <div className="project-show-info">
            <div className="project-show-title">
              <b>{props.name}</b>
            </div>
            <div>
              <span className="project-show-version">
                Mark {props.iteration}
              </span>
              <span>  </span>
              <span className="project-show-inventor">
                by {props.user}
              </span>
            </div>
            <div className="project-show-description">
              <b>
                Description:
              </b> {props.desc}
            </div>
          </div>
        </div>
    </div>
  )
}

export default ProjectShowTile;
