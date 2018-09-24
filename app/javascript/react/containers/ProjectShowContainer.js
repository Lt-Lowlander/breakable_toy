import React, { Component } from 'react';
import { Link } from 'react-router'
import ProjectShowTile from '../components/ProjectShowTile';
import VersionHistoryContainer from './VersionHistoryContainer'
import EquipmentIndexContainer from './EquipmentIndexContainer';
import MaterialsIndexContainer from './MaterialsIndexContainer';
import StepsIndexContainer from './StepsIndexContainer';

class ProjectShowContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      project: {},
      equipment: [],
      material: [],
      step: [],
      activeMember: '',
      fetchType: '',
      element: ''
    }
    this.addNewInstruction=this.addNewInstruction.bind(this)
    this.changeElement=this.changeElement.bind(this)
    this.methodUpdate=this.methodUpdate.bind(this)
    this.clearInputs=this.clearInputs.bind(this)
  }

  methodUpdate(input, elem){
    this.setState({
      fetchType: input,
      element: elem
    })
  }

  clearInputs(){
    this.setState({
      fetchType: '',
      element: ''
    })
  }

  addNewInstruction(body){
    let formPayload = body
    formPayload['project_id'] = this.state.project.id
    fetch(`/api/v1/projects/${this.props.params.id}/steps.json`, {
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin',
      method: 'POST',
      body: JSON.stringify(body)
    })
    .then(response => response.json())
    .then(body => {
      let newArray = this.state.step.concat(body)
      this.setState({ step: newArray })
    })
    .catch(error => console.error(`Error in project instruction add fetch: ${error.message}`));
  }

  /* This fetch callback handles the POST, PATCH, and DELETE functions for the
  Equipment list, Materials list, and Steps list */
  changeElement(payload, request, traverse){
    fetch(traverse, {
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin',
      method: request,
      body: JSON.stringify(payload)
    })
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
      const factor = this.state.element
      const current_method = this.state.fetchType
      if (factor == 'materials') {
        if ( current_method == 'POST') {
          let newArray = this.state.material.concat(body)
          this.setState({
            material: newArray
          })
          this.clearInputs()
        } else if (current_method == 'PATCH' || current_method == 'DELETE') {
          this.setState({
            material: body
          })
          this.clearInputs()
        }
      } else if (factor == 'equipment') {
        if ( current_method == 'POST') {
          let newArray = this.state.equipment.concat(body)
          this.setState({
            equipment: newArray
          })
          this.clearInputs()
        } else if (current_method == 'PATCH' || current_method == 'DELETE') {
          this.setState({
            equipment: body
          })
          this.clearInputs()
        }
      } else if (factor == 'steps') {
        if ( current_method == 'POST') {
          let newArray = this.state.step.concat(body)
          this.setState({
            step: newArray
          })
          this.clearInputs()
        } else if (current_method == 'PATCH' || current_method == 'DELETE') {
          this.setState({
            step: body
          })
          this.clearInputs()
        }
      }
    })
    .catch(error => console.error(`Error in project elementChange fetch: ${error.message}`));
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
        material: body.project.materials,
        equipment: body.project.equipment,
        step: body.project.steps,
        activeMember: body.viewing_member
      })
    })
    .catch(error => console.error(`Error in project show mount fetch: ${error.message}`));
  }

  render(){
    let ownership;
    const author = this.state.project.handle;
    const viewer = this.state.activeMember;
    if (viewer === author) {
      ownership = true;
    }
    let projectMaterials = this.state.material;
    let projectEquipment = this.state.equipment;
    let projectSteps = this.state.step;

    return(
      <div className="prokaryote">
        <div className="grid-x grid-margin-x align-spaced">
          <div className="project-nucleus notestyle rounders">
            <ProjectShowTile
              key={this.state.project.id}
              id={this.state.project.id}
              name={this.state.project.name}
              image={this.state.project.photo_url}
              iteration={this.state.project.version_id}
              desc={this.state.project.description}
              budget={this.state.project.budget}
              topics={this.state.project.topics}
              user={this.state.project.handle}
              ownership={ownership}
            />
          </div>
          <div className="cell small-12 medium-6 large-4">
            <div className="listed-elements rounders notestyle">
              <div className="materials-list">
                <div className="materials-header">
                  <b>Materials</b>
                </div>
                <MaterialsIndexContainer
                  ownership={ownership}
                  materials={projectMaterials}
                  projectId={this.state.project.id}
                  changeElement={this.changeElement}
                  methodUpdate={this.methodUpdate}
                  />
              </div>
              <div className="equipment-list">
                <div className="equipment-header">
                  <b>Equipment</b>
                </div>
                <EquipmentIndexContainer
                  ownership={ownership}
                  equipment={projectEquipment}
                  projectId={this.state.project.id}
                  changeElement={this.changeElement}
                  methodUpdate={this.methodUpdate}
                  />
              </div>
          </div>
        </div>
          <div className="cell">
            <div className="steps-show-unit notestyle">
              <div className="step-show-title">
                Construction Guide
              </div>
              <StepsIndexContainer
                ownership={ownership}
                steps={projectSteps}
                projectId={this.state.project.id}
                changeElement={this.changeElement}
                methodUpdate={this.methodUpdate}
                />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export  default ProjectShowContainer;
