import React, { Component } from 'react';
import { Link } from 'react-router'
import StepsTile from '../components/StepsTile';
import VersionHistoryContainer from './VersionHistoryContainer';
import MaterialsShowTile from '../components/MaterialsShowTile';
import EquipmentContainer from './EquipmentContainer';
import ProjectShowTile from '../components/ProjectShowTile';
import EquipmentShowTile from '../components/EquipmentShowTile';

class ProjectShowContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      project: {},
      equipment: [],
      material: [],
      step: []
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
          <div className="cell small-12 medium-6 large-4">
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
          <div className="cell small-12 medium-6 large-4">
            <div className="listed-elements rounders notestyle">
              <div className="materials-list">
                <div>
                  <b>Materials</b>
                </div>
                <ul>
                  {materialsList}
                </ul>
              </div>
              <div className="equipment-list">
                <div>
                  <b>Equipment</b>
                </div>
                <ul>
                  {equipmentList}
                </ul>
              </div>
          </div>
        </div>

          <div className="cell">
            <div className="steps-show-unit">
              <div className="step-show-title">
                Construction Guide
              </div>
              <div className="step-show-list notestyle">
                {stepsList}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export  default ProjectShowContainer;
