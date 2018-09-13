import React, { Component } from 'react';
import { Link } from 'react-router';
import EquipmentInput from './EquipmentInput';
import EquipmentShowTile from './EquipmentShowTile';

class EquipmentElementTile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sitRep: ''
    }
    this.onEditClick=this.onEditClick.bind(this)
  }

  onEditClick


  render(){
    let equipmentStatus;
    if (this.state.sitRep == 'situationNormal') {
      equipmentStatus = equipmentOwnerItem;
        <li>
          {EquipmentInput}
        </li>
    } else if (this.state.sitRep == 'needUpdate') {
      equipmentStatus =
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
    }

    return(
      <div>
      </div>
    )
  }
}

export default EquipmentElementTile;
