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
      project: {},
      versions: [],
      equipment: [],
      materials: [],
      steps: [],

    }

  }

  componentDidMount(){
    fetch(`api/v1/projects/${this.props.params.id}`)
      .then(response => {
debugger
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({
        equipment: body.project.equipment
      })
    })
    .catch(error => console.error(`Error in venue show mount fetch: ${error.message}`));
  }




  render(){
    const message = "yo dog";
    const projectInfo = this.state.project;
    let project
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
