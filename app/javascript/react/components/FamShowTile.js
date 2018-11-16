import React from 'react';
import { Link } from 'react-router';

// similar to the project index tile
let FamShowTile = (props) => {
  return(
    <div>
      <div className="cell small-12 medium-6 large-4">
        <div className="project-tile-with-owner notestyle">
          <Link to={`/projects/${props.id}`}>
            <div className="">
              <img src={props.image} alt={props.name} className="project-index-pic"/>
              <div className="project-index-info">
                <div className="project-index-title">
                  Gen {props.version} <span></span> by {props.handle}
                </div>
                <div className="project-index-version">
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FamShowTile;
