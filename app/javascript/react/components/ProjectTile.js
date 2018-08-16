import React from 'react';
import { Link } from 'react-router';

const ProjectTile = (props) => {
  return(
    <div className="cell small-12 medium-6 large-3">
      <div className="project-tile">
        <Link to={`/projects/${props.id}`}>
          <div className="">
            <img src={props.image} alt={props.name} className="project-index-pic"/>
            <div className="project-index-info">
              <div className="project-index-title">
                {props.name}
              </div>
              <div className="project-index-version">
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default ProjectTile;
