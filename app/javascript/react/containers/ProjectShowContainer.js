import React, { Component } from 'react';
import { Link } from 'react-router'
import ProjectShowTile from '../components/ProjectShowTile';
import EquipmentShowTile from '../components/EquipmentShowTile';
import EquipmentElementTile from '../components/EquipmentElementTile';
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
      activeMember: ''
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

    let access_settings;
    if (ownership) {
      access_settings =
        <div>
          <h1>
            <Link to={`projects/${this.state.project.id}/edit`}>Edit Project</Link>
          </h1>
        </div>
    }

    const projectEquipment = this.state.equipment;
    let equipmentList = projectEquipment.map(tool => {
      if (ownership) {
        return(
          <EquipmentElementTile
            key={tool.id}
            id={tool.id}
            tool={tool.tool_name}
            updateEquipment={this.updateEquipment}
            projectId={this.state.project.id}
          />
        )
      } else {
        return(
          <EquipmentShowTile
            key={tool.id}
            tool={tool.tool_name}
          />
        )
      }
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

    let materialsAccess;
    let equipmentAccess;
    let stepsAccess;
    if (ownership) {
      materialsAccess=
        <div>
          <ul>
            {materialsList}
          </ul>
          <div className="more-materials">
            <MaterialsFormContainer
              addNewMaterial={this.addNewMaterial}
              />
          </div>
        </div>
      equipmentAccess=
        <div>
          <ul>
            {equipmentList}
          </ul>
          <div className="more-equipment">
            <EquipmentFormContainer
              addNewEquipment={this.addNewEquipment}
              />
          </div>
        </div>
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
      materialsAccess=
        <ul>
          {materialsList}
        </ul>
      equipmentAccess=
        <ul>
          {equipmentList}
        </ul>
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
                <div className="materials-header">
                  <b>Materials</b>
                </div>
                {materialsAccess}
              </div>
              <div className="equipment-list">
                <div className="equipment-header">
                  <b>Equipment</b>
                </div>
                {equipmentAccess}
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
