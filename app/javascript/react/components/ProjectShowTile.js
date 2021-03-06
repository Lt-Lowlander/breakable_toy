import React from 'react';
import { Link } from 'react-router';
import OffSpringFormComponent from './OffSpringFormComponent';

let projectEdits;
let numeral;
let ProjectShowTile = (props) => {
  const owner = (props.ownership())
  if (props.ownership()) {
    projectEdits =
    <Link to={`/projects/${props.id}/edit`} className="edit-engage">
      <i className="far fa-edit edit-icon"></i>
    </Link>
  }
  return(
    <div className="project-show-tile">
      <div className="main-image">
        <img src={props.image} alt={props.image} className="project-show-pic"/>
      </div>
      <div className="project-show-info">
        {props.name}
        <span className="title-buffer"></span>
        {projectEdits}
      </div>
      <div className="bifurcation">
        <div className="side-left ownership-group">
          <div className="project-show-version" onClick={props.stately}>
            Gen {props.numeral}
          </div>
          <div className="project-show-inventor">
            by
            <Link to={`/users/${props.userNum}`} className="user-title-path">
              {props.user}
            </Link>
          </div>
        </div>
        <div className="side-right">
          <OffSpringFormComponent
            handle={props.user}
            userId={props.userNum}
            family={props.fam}
            version={props.iteration + 1}
            parent={props.id}
            visitor={props.viewer}
            name={props.name}
            picture={props.image}
            description={props.desc}
            />
        </div>
      </div>
      <div className="project-show-description">
          <b>Description:</b><span className="buffer"></span>{props.desc}
      </div>
    </div>
  )
}

export default ProjectShowTile;
