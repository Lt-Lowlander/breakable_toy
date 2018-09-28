import React from 'react';
import { Link } from 'react-router';

const MemberIndexTile = (props) => {
  return(
    <div className="member-index-tile notestyle rounders">
      <Link to={`users/${props.id}`}>
        <b>{props.handle}</b>
        <div>
          ID: {props.id}
        </div>
      </Link>
    </div>
  )
}

export default MemberIndexTile;
