import React from 'react';
import { Link } from 'react-router';

const EquipmentShowTile = (props) => {
  
  return(
    <div className="equipment-show-tile">
      <li>
        {props.tool}
      </li>
    </div>
  )
}

export default EquipmentShowTile;
