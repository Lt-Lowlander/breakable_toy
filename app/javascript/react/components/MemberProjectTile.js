import React from 'react';
import { Link } from 'react-router';

let MemberProjectTile = (props) => {
  
  return(
    <div className="cell small-6 medium-5 large-4">
      <div className="user-project-tile-with-owner notestyle rounders">
        <Link to={`/projects/${props.id}`}>
          <div className="">
            <img src={props.image} alt={props.name} className="user-project-index-pic"/>
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

export default MemberProjectTile;
