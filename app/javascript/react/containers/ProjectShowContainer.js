import React, { Component } from 'react';
import { Link } from 'react-router'
import StepsContainer from './StepsContainer';
import VersionHistoryContainer from './VersionHistoryContainer';
import MaterialsContainer from './MaterialsContainer';
import EquipmentContainer from './EquipmentContainer';
import ProjectShowTile from '../components/ProjectShowTile';

class ProjectShowContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      versions: [],
      equipment: [],
      materials: [],
      steps: [],

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
          <ProjectShowTile/>
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
