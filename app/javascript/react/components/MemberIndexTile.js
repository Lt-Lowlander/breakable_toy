import React from 'react';
import { Link } from 'react-router';

const MemberIndexTile = (props) => {
  return(
    <li className="membership-list">
      <div className="individual-members">
        <Link to={`/users/${props.id}`}>
          <div className="member-index-tile notestyle rounders">
            <div className="index-role">
              {props.role}
            </div>
            <span className="index-divider">  |  </span>
            <div className="index-handle">
              {props.handle}
            </div>
            <img className="member-index-photo" src={props.image} alt={props.handle} />
          </div>
        </Link>
      </div>
    </li>
  )
}

export default MemberIndexTile;
