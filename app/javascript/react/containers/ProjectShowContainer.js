import React, { Component } from 'react';
import { Link } from 'react-router'
import ProjectShowTile from '../components/ProjectShowTile';
import EquipmentIndexContainer from './EquipmentIndexContainer';
import MaterialsIndexContainer from './MaterialsIndexContainer';
import StepsIndexContainer from './StepsIndexContainer';

class ProjectShowContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      project: {},
      coverImage: '',
      equipment: [],
      material: [],
      step: [],
      activeMember: '',
      fetchType: '',
      element: '',
      currentItem: ''
    }
    this.changeElement=this.changeElement.bind(this)
    this.methodUpdate=this.methodUpdate.bind(this)
    this.clearInputs=this.clearInputs.bind(this)
    this.romanize=this.romanize.bind(this)
    this.itemUpdate=this.itemUpdate.bind(this)
    this.cleanHouse=this.cleanHouse.bind(this)
    this.ownership=this.ownership.bind(this)
  }
  // The currentItem state element serves as a dynamic switch to constrain
  // component/tile functionality to only one component/tile at a time
  itemUpdate(zapper){
    this.clearInputs();
    this.setState({
      currentItem: zapper
    })
  }

  // this preloads relevant data for each fetch request
  methodUpdate(input, elem){
    this.setState({
      fetchType: input,
      element: elem
    })
  }

  ownership() {
    if (this.state.project.user_id === this.state.activeMember) {
      return(true)
    }
  }

  cleanHouse(){
    window.location = `/fams/${this.state.project.fam_id}`;
  }
  // Resets state elements to neutral values
  clearInputs(){
    this.setState({
      fetchType: '',
      element: ''
    })
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
      if ( current_method == 'POST') {
        let newArray;
        if (factor == 'material') {
          newArray = this.state.material.concat(body)
        } else if (factor == 'equipment') {
          newArray = this.state.equipment.concat(body)
        } else if (factor == 'step') {
          newArray = this.state.step.concat(body)
        }
        this.setState({
          [factor]: newArray
        })
        this.clearInputs()
      } else if (current_method == 'PATCH' || current_method == 'DELETE') {
        this.setState({
          [factor]: body
        })
        this.clearInputs()
      }
    })
    .catch(error => console.error(`Error in project elementChange fetch: ${error.message}`));
  }

  // Outputs the project version number in Roman Numerals
  romanize(num) {
    let i;
    let forum = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},
        roman = '';
    for ( i in forum ) {
      while ( num >= forum[i] ) {
        roman += i;
        num -= forum[i];
      }
    }
    return roman;
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
        coverImage: body.project.photo_url.url,
        material: body.project.materials,
        equipment: body.project.equipment,
        step: body.project.steps,
        activeMember: body.viewing_member
      })
    })
    .catch(error => console.error(`Error in project show mount fetch: ${error.message}`));
  }

  render(){
    let project = this.state.project;
    let projectMaterials = this.state.material;
    let projectEquipment = this.state.equipment;
    let projectSteps = this.state.step;
    let numeral = this.romanize(this.state.project.version_id);

    return(
      <div className="prokaryote">
        <div className="grid-x grid-margin-x align-spaced">
          <div className="project-nucleus notestyle rounders cell small-12 medium-8 large-6">
            <ProjectShowTile
              ownership={this.ownership}
              key={project.id}
              id={project.id}
              name={project.name}
              image={this.state.coverImage}
              iteration={project.version_id}
              numeral={numeral}
              desc={project.description}
              budget={project.budget}
              topics={project.topics}
              user={project.handle}
              fam={this.state.project.fam_id}
              userNum={project.user_id}
              parent={project.parent_id}
              viewer={this.state.activeMember}
              stately={this.cleanHouse}
            />
          </div>
          <div className="cell small-12 medium-6 large-4">
            <div className="listed-elements rounders notestyle">
              <div className="materials-list">
                <div className="materials-header">
                  <b>Materials</b>
                </div>
                <MaterialsIndexContainer
                  ownership={this.ownership}
                  materials={projectMaterials}
                  projectId={this.state.project.id}
                  changeElement={this.changeElement}
                  methodUpdate={this.methodUpdate}
                  reset={this.clearInputs}
                  currentItem={this.state.currentItem}
                  itemUpdate={this.itemUpdate}
                  />
              </div>
              <div className="equipment-list">
                <div className="equipment-header">
                  <b>Equipment</b>
                </div>
                <EquipmentIndexContainer
                  ownership={this.ownership}
                  equipment={projectEquipment}
                  projectId={this.state.project.id}
                  changeElement={this.changeElement}
                  methodUpdate={this.methodUpdate}
                  reset={this.clearInputs}
                  currentItem={this.state.currentItem}
                  itemUpdate={this.itemUpdate}
                  />
              </div>
            </div>
          </div>
          <div className="cell small-12 medium-12 large-11">
            <div className="steps-show-unit notestyle">
              <div className="step-show-title">
                Construction Guide
              </div>
              <StepsIndexContainer
                ownership={this.ownership}
                steps={projectSteps}
                projectId={this.state.project.id}
                changeElement={this.changeElement}
                methodUpdate={this.methodUpdate}
                reset={this.clearInputs}
                currentItem={this.state.currentItem}
                itemUpdate={this.itemUpdate}
                />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export  default ProjectShowContainer;
