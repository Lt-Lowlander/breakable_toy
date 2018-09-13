import React from 'react';
import { Link } from 'react-router';

let EquipmentOwnerShowTile = (props) => {
  return(
    <div className="equipment-show-tile">
      <li>
        <div>
          <div>
            {props.tool}
          </div>
          <div>
            <i className="far fa-edit"></i>
            <span>  |  </span>
            <i className="far fa-trash-alt"></i>
          </div>
        </div>
      </li>
    </div>
  )
}

export default EquipmentOwnerShowTile;
