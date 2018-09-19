import React, { Component } from 'react';
import EquipmentElementTile from '../components/EquipmentElementTile';
import EquipmentShowTile from '../components/EquipmentShowTile';

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

export default EquipmentIndexContainer;
