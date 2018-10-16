import React, { Component } from 'react';
import MemberEquipmentTile from '../components/MemberEquipmentTile';

class MemberEquipmentContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render(){
    let userTools = this.props.memberEquipment.map(machine => {
      return(
        <MemberEquipmentTile
          key={machine.id}
          id={machine.id}
          tool={machine.tool_name}
          />
      )
    })
    return(
      <div className="notestyle rounders user-details">
        <div className="equipment-prof-sec">
          Equipment Proficiencies
        </div>
        <div className="eq-list-elems">
          <ul>
            {userTools}
          </ul>
        </div>
      </div>
    )
  }

}

export default MemberEquipmentContainer;
