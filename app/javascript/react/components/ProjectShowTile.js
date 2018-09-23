import React from 'react';
import { Link } from 'react-router';

let projectEdits;
let ProjectShowTile = (props) => {
  if (props.ownership) {
    projectEdits =
    <h1>
      <Link to={`projects/${props.id}/edit`}>Edit Project</Link>
    </h1>
  }
  return(
    <div className="project-show-tile">
        {projectEdits}
        <div className="main-image">
          <img src={props.image} alt={props.name} className="project-show-pic"/>
          <div className="project-show-info">
            <div className="cell side-left">
              <div className="project-show-title">
                <b>{props.name}</b>
              </div>
              <div className="ownership-group">
                <span className="project-show-version">
                  <b>Mark {props.iteration}</b>
                </span>
                <span>  </span>
                <span className="project-show-inventor">
                  by <b>{props.user}</b>
                </span>
              </div>
            </div>
            <div className="side-right">
              <div className="next-iteration button rounders">
                <b>
                  Build a new version
                </b>
              </div>
            </div>
          </div>
        </div>
        <div className="desc-budg">
          <div className="smaller-div">
            <b>
              Description:
            </b> {props.desc}
            <div className="project-show-budget">
              <b>
                Budget:
              </b> {props.budget}
            </div>
          </div>
        </div>
    </div>
  )
}

export default ProjectShowTile;
