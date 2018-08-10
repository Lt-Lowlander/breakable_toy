import React from 'react';
import { Link } from 'react-router';

const ProjectShowTile = (props) => {
  return(
    <div className="project-show-tile">
      <Link to={`/projects/${props.id}`}>
        <div className="">
          <img src={props.image} alt={props.name} className="project-index-pic"/>
          <div className="project-index-info">
            <div className="project-index-title">
              {props.name}
            </div>
            <div className="project-index-version">
              Mark {props.iteration}
            </div>
          </div>
        </div>
      </Link>
      <hr/>
    </div>
  )
}

export default ProjectShowTile;
