import React from 'react';
import { Link } from 'react-router';

let revisionPermission;
const ProjectTile = (props) => {
  if (props.viewer == props.author || props.admin){
    revisionPermission =
    <div>
      <Link to={`/projects/${props.id}/edit`}>
        <i className="far fa-edit"></i>
      </Link>
      <span>  |  </span>
      <Link to={`/users/${props.author}`}>
        <i className="far fa-trash-alt"></i>
      </Link>
    </div>
  } else if (props.viewer != props.author) {
    revisionPermission = ""
  }
  return(
    <div className="cell small-12 medium-6 large-4">
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
      <div className="admin-tile-settings">
        {revisionPermission}
      </div>
    </div>
  )
}

export default ProjectTile;
