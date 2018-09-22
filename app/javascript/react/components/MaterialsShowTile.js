import React from 'react';
import { Link } from 'react-router';

const MaterialsShowTile = (props) => {
  return(
    <div className="materials-show-tile">
      <li>
        {props.gizmo}
      </li>
    </div>
  )
}

export  default MaterialsShowTile;
