import React from 'react';
import { Link } from 'react-router';
import OffSpringFormComponent from './OffSpringFormComponent';

let projectEdits;
let ProjectShowTile = (props) => {
  if (props.ownership) {
    projectEdits =
    <Link to={`/projects/${props.id}/edit`}>
      <i className="far fa-edit edit-icon"></i>
    </Link>
  }
  return(
    <div className="project-show-tile">
      <div className="main-image">
        <img src={props.image} alt={props.name} className="project-show-pic"/>
        <div className="project-show-info">
          <div className="cell side-left">
            <div className="title-group">
              <div className="project-show-title">
                <b>{props.name}</b>
              </div>
              <div className="">
                {projectEdits}
              </div>
            </div>
            <div className="ownership-group">
              <div className="project-show-version">
                Mark {props.iteration}
              </div>
              <div className="project-show-inventor">
                by
                <Link to={`/users/${props.userNum}`} className="user-title-path">
                  <b>{props.user}</b>
                </Link>
              </div>
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
            />
          </div>
        </div>
      </div>
      <div className="descr">
        <div className="smaller-div">
          <b>
            Description:
          </b> {props.desc}
        </div>
      </div>
    </div>
  )
}

export default ProjectShowTile;
