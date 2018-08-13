import React, { Component } from 'react';
import { Link } from 'react-router'
import StepsContainer from './StepsContainer';
import VersionHistoryContainer from './VersionHistoryContainer';
import MaterialsContainer from './MaterialsContainer';
import EquipmentContainer from './EquipmentContainer';
import ProjectShowTile from '../components/ProjectShowTile';
import EquipmentShowTile from '../components/EquipmentShowTile';

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
    // Grab the associated project Info
  componentDidMount(){
    fetch(`/api/v1/projects/${this.props.params.id}`)
      .then(response => {
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
        project: body.project,
        equipment: body.project.equipment,

      })
    })
    .catch(error => console.error(`Error in project show mount fetch: ${error.message}`));
  }




  render(){

    const message = "yo dog";

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
          <ProjectShowTile
            key={this.state.project.id}
            id={this.state.project.id}
            name={this.state.project.name}
            image={this.state.project.photo_url}
            iteration={this.state.project.version_id}
            desc={this.state.project.description}
            budget={this.state.project.budget}
            topics={this.state.project.topics}
            user={this.state.project.user}
          />
        </div>
        <div>
          <MaterialsContainer/>
        </div>
        <div>
          <div>
            <b>Equipment</b>
          </div>
          <ul>
            <EquipmentShowTile
              tool={this.state.equipment}
            />
          </ul>
        </div>
      </div>
    )
  }
}

export  default ProjectShowContainer;
