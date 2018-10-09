import React from 'react';
import { Link } from 'react-router';

const MemberIndexTile = (props) => {
  return(
    <div className="member-index-tile notestyle rounders">
      <Link to={`users/${props.id}`}>
        <div className="index-role">
          {props.role}
        </div>
        <span className="index-divider">  |  </span>
        <div className="index-handle">
          {props.handle}
        </div>
      </Link>
    </div>
  )
}

export default MemberIndexTile;
