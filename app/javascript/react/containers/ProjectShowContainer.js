import React, { Component } from 'react';
import { Link } from 'react-router'
import StepsContainer from './StepsContainer';
import VersionHistoryContainer from './VersionHistoryContainer';
import MaterialsContainer from './MaterialsContainer';
import EquipmentContainer from './EquipmentContainer';

class ProjectShowContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }

  }

  render(){
    let message = "yo dog";

    return(
      <div>
        {message}
        <div>
          <VersionHistoryContainer/>
        </div>
        <div>
          <StepsContainer/>
        </div>
        <div>
          <MaterialsContainer/>
        </div>
        <div>
          <EquipmentContainer/>
        </div>
      </div>
    )
  }
}

export  default ProjectShowContainer;
