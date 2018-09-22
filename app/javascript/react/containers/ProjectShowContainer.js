import React, { Component } from 'react';
import { Link } from 'react-router'
import ProjectShowTile from '../components/ProjectShowTile';
import StepsTile from '../components/StepsTile';
import VersionHistoryContainer from './VersionHistoryContainer'
import StepsFormContainer from './StepsFormContainer';
import EquipmentIndexContainer from './EquipmentIndexContainer';
import MaterialsIndexContainer from './MaterialsIndexContainer';

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
  }

  methodUpdate(input, elem){
    this.setState({
      fetchType: input,
      element: elem
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
  
  /* This fetch request handles the POST, PATCH, and DELETE functions for the
  Equipment list, and Materials list (so far) */
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
            material: newArray,
            fetchType: '',
            element: ''
          })
        } else if (current_method == 'PATCH' || current_method == 'DELETE') {
          this.setState({
            material: body,
            fetchType: '',
            element: ''
          })
        }
      } else if (factor == 'equipment') {
        if ( current_method == 'POST') {
          let newArray = this.state.equipment.concat(body)
          this.setState({
            equipment: newArray,
            fetchType: '',
            element: ''
          })
        } else if (current_method == 'PATCH' || current_method == 'DELETE') {
          this.setState({
            equipment: body,
            fetchType: '',
            element: ''
          })
        }
      }
    })
    .catch(error => console.error(`Error in project equipment add fetch: ${error.message}`));
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

    let access_settings;
    if (ownership) {
      access_settings =
        <div>
          <h1>
            <Link to={`projects/${this.state.project.id}/edit`}>Edit Project</Link>
          </h1>
        </div>
    }

    const projectSteps = this.state.step;
    let stepsList = projectSteps.map(step => {
      return(
        <StepsTile
          key={step.id}
          number={step.sequence_number}
          info={step.instruction}
          image={step.step_photo}
        />
      )
    })

    let stepsAccess;
    if (ownership) {
      stepsAccess=
        <div>
          <div className="step-show-list">
            {stepsList}
          </div>
          <div className="step-input-field">
            <StepsFormContainer
              addNewInstruction={this.addNewInstruction}
              />
          </div>
        </div>
    } else {
      stepsAccess=
        <div className="step-show-list">
          {stepsList}
        </div>
    }

    return(
      <div className="prokaryote">
        <div className="grid-x grid-margin-x align-spaced">
          <div className="project-nucleus notestyle rounders">
            {access_settings}
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
            />
          </div>
          <div className="cell small-12 medium-6 large-4">
            <div className="listed-elements rounders notestyle">
              <div className="materials-list">
                <MaterialsIndexContainer
                  ownership={ownership}
                  materials={projectMaterials}
                  projectId={this.state.project.id}
                  changeElement={this.changeElement}
                  methodUpdate={this.methodUpdate}
                  />
              </div>
              <div className="equipment-list">
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
              {stepsAccess}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export  default ProjectShowContainer;
