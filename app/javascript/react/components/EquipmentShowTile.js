import React from 'react';
import { Link } from 'react-router';

let EquipmentShowTile = (props) => {
  return(
    <div className="equipment-list-element">
      <li>
        {props.tool}
      </li>
    </div>
  )
}

export default EquipmentShowTile;
