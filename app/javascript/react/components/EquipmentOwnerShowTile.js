import React from 'react';
import { Link } from 'react-router';

let EquipmentOwnerShowTile = (props) => {

  return(
    <div className="equipment-show-tile">
      <li>
        <div className="element-item">
          {props.tool}
        </div>
        <div className="element-actions">
          <i className="far fa-edit"></i>
          <span>  |  </span>
          <i className="far fa-trash-alt"></i>
        </div>
      </li>
    </div>
  )
}

export default EquipmentOwnerShowTile;
