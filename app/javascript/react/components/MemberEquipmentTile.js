import React from 'react';
import { Link } from 'react-router';

const MemberEquipmentTile = (props) => {
  return(
    <div className="member-index-tools margin-spacing">
      {props.tool}
    </div>
  )
}

export default MemberEquipmentTile;
