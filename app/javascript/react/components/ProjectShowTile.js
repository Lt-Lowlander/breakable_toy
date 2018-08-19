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
            <div className="ownership-group">
              <span className="project-show-version">
                <b>Mark {props.iteration}</b>
              </span>
              <span>  </span>
              <span className="project-show-inventor">
                by <b>{props.user}</b>
              </span>
            </div>
            <div className="project-show-description">
              <b>
                Description:
              </b> {props.desc}
            </div>
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
