import React from 'react';
import { Link } from 'react-router';

let EquipmentOwnerShowTile = (props) => {
  return(
    <div className="equipment-show-tile">
      <li>
        <div>
          {props.tool}
        </div>
        <div>
          <span> "edit" </span>
          <span>  |  </span>
          <span> "delete" </span>
        </div>
      </li>
    </div>
  )
}

export default EquipmentOwnerShowTile;
