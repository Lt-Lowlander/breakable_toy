import React, { Component } from 'react';
import EquipmentElementTile from '../components/EquipmentElementTile';
import EquipmentShowTile from '../components/EquipmentShowTile';
import EquipmentFormContainer from './EquipmentFormContainer';

class EquipmentIndexContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render(){

    let equipmentList = this.props.equipment.map(machine => {
      if (this.props.ownership) {
        return(
          <EquipmentElementTile
            key={machine.id}
            id={machine.id}
            tool={machine.tool_name}
            updateEquipment={this.props.updateEquipment}
            projectId={this.props.projectId}
            />
        )
      } else {
        return(
          <EquipmentShowTile
            key={machine.id}
            id={machine.id}
            tool={machine.tool_name}
            />
        )
      }
    })
    if (this.props.ownership) {
      return(
        <div>
          <div className="equipment-header">
            <b>Equipment</b>
          </div>
          <ul>
            {equipmentList}
          </ul>
          <div className="more-equipment">
            <EquipmentFormContainer
              addNewEquipment={this.props.addNewEquipment}
              />
          </div>
        </div>
      )
    } else {
      return(
        <div>
          <div className="equipment-header">
            <b>Equipment</b>
          </div>
          <ul>
            {equipmentList}
          </ul>
        </div>
      )
    }
  }

}

export default EquipmentIndexContainer;
