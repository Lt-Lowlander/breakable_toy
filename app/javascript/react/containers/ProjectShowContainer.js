import React, { Component } from 'react';
import { Link } from 'react-router'
import ProjectShowTile from '../components/ProjectShowTile';
import EquipmentShowTile from '../components/EquipmentShowTile';
import MaterialsShowTile from '../components/MaterialsShowTile';
import StepsTile from '../components/StepsTile';
import VersionHistoryContainer from './VersionHistoryContainer';
import EquipmentFormContainer from './EquipmentFormContainer';
import MaterialsFormContainer from './MaterialsFormContainer';
import StepsFormContainer from './StepsFormContainer';

class ProjectShowContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      project: {},
      equipment: [],
      material: [],
      step: [],
    }
    this.addNewInstruction=this.addNewInstruction.bind(this)
    this.addNewMaterial=this.addNewMaterial.bind(this)
    this.addNewEquipment=this.addNewEquipment.bind(this)
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
    .catch(error => console.error(`Error in project show mount fetch: ${error.message}`));
  }

  addNewMaterial(body){
    let formPayload = body
    formPayload['project_id'] = this.state.project.id
    fetch(`/api/v1/projects/${this.props.params.id}/materials.json`, {
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin',
      method: 'POST',
      body: JSON.stringify(body)
    })
    .then(response => response.json())
    .then(body => {
      let newArray = this.state.material.concat(body)
      this.setState({ material: newArray })
    })
    .catch(error => console.error(`Error in project show mount fetch: ${error.message}`));
  }

  addNewEquipment(body){
    let formPayload = body
    formPayload['project_id'] = this.state.project.id
    fetch(`/api/v1/projects/${this.props.params.id}/equipment.json`, {
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin',
      method: 'POST',
      body: JSON.stringify(body)
    })
    .then(response => response.json())
    .then(body => {
      let newArray = this.state.equipment.concat(body)
      this.setState({ equipment: newArray })
    })
    .catch(error => console.error(`Error in project show mount fetch: ${error.message}`));
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
        project: body,
        equipment: body.equipment,
        material: body.materials,
        step: body.steps
      })
    })
    .catch(error => console.error(`Error in project show mount fetch: ${error.message}`));
  }

  render(){
    const projectEquipment = this.state.equipment;
    let equipmentList = projectEquipment.map(tool => {
      return(
        <EquipmentShowTile
          key={tool.id}
          tool={tool.tool_name}
        />
      )
    })

    const projectMaterials = this.state.material;
    let materialsList = projectMaterials.map(ingredient => {
      return(
        <MaterialsShowTile
          key={ingredient.id}
          name={ingredient.material_name}
        />
      )
    })

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

    return(
      <div className="prokaryote">
        <div className="grid-x grid-margin-x align-spaced">
          <div className="cell small-12 medium-6 large-4">
            <VersionHistoryContainer/>
          </div>
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
            />
          </div>
          <div className="cell small-12 medium-6 large-4">
            <div className="listed-elements rounders notestyle">
              <div className="materials-list">
                <div className="materials-header">
                  <b>Materials</b>
                </div>
                <ul>
                  {materialsList}
                </ul>
                <div className="more-materials">
                  <MaterialsFormContainer
                    addNewMaterial={this.addNewMaterial}
                  />
                </div>
              </div>
              <div className="equipment-list">
                <div className="equipment-header">
                  <b>Equipment</b>
                </div>
                <ul>
                  {equipmentList}
                </ul>
                <div className="more-equipment">
                  <EquipmentFormContainer
                    addNewEquipment={this.addNewEquipment}
                  />
                </div>
              </div>
          </div>
        </div>

          <div className="cell">
            <div className="steps-show-unit notestyle">
              <div className="step-show-title">
                Construction Guide
              </div>
              <div className="step-list-plus-add">
              </div>
              <div className="step-show-list">
                {stepsList}
              </div>
              <div className="step-input-field">
                <StepsFormContainer
                  addNewInstruction={this.addNewInstruction}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export  default ProjectShowContainer;
