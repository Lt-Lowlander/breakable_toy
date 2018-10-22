import React, { Component } from 'react';
import { browserHistory } from 'react-router'
import ProjectInputTile from '../components/ProjectInputTile';

class EditProjectFormContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      idNum: "",
      name: "",
      description: "",
      photo_url: "",
      familyId: "",
      errors: {}
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.sendEditedProject = this.sendEditedProject.bind(this);
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleClear(){
    this.setState({
      idNum: "",
      name: "",
      description: "",
      photo_url: "",
      familyId: "",
      errors: {}
    });
  }

  handleSubmit(event){
    event.preventDefault();
    if (Object.keys(this.state.errors).length == 0) {
      let editedProject = new FormData();
      editedProject.append("name", this.state.name);
      editedProject.append("description", this.state.description);
      editedProject.append("photo_url", this.state.photo_url);
      editedProject.append("fam_id", this.state.familyId);
      this.sendEditedProject(editedProject);
      this.handleClear();
    }
  }

  sendEditedProject(infoPayload) {
    fetch(`/api/v1/projects/${this.state.idNum}`, {
      credentials: 'same-origin',
      method: 'PATCH',
      body: infoPayload
    })
      .then(response => {
        if(response.ok){
          return response
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
             error = new Error(errorMessage)
         throw(error);
        }
      })
      .then(response => response.json())
      .then(body => {
        browserHistory.push(`/projects/${body.project.id}`)})
        .catch(error => console.error(`Error in fetch: ${error.message}`));
    }

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
        if (body.project.fam_id == 0) {
          this.setState({
            familyId: body.project.id
          })
        } else {
          this.setState({
            familyId: body.project.fam_id
          })
        }
        this.setState({
          idNum: body.project.id,
          name: body.project.name,
          description: body.project.description,
          photo_url: body.project.photo_url
        })
      })
    }
  render(){
    return(
      <div className="grid-x grid-margin-x align-center">
        <div className="cell small-12 med-8  large-6">
          <div className="factor-entries notestyle rounders">
            <p className="step-show-title">Edits & Updates</p>
            <form className="new-project-form" onSubmit={this.handleSubmit}>
              <ProjectInputTile
                label="Name"
                name="name"
                type="text"
                value={this.state.name}
                handleChange={this.handleChange}
                />
              <ProjectInputTile
                label="Description"
                name="description"
                type="text"
                value={this.state.description}
                handleChange={this.handleChange}
                />
              <ProjectInputTile
                label="Cover Photo"
                name="photo_url"
                type="text"
                value={this.state.photo_url}
                handleChange={this.handleChange}
                />
              <button type="submit" className="button" value="Submit">
                Enter Changes
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default EditProjectFormContainer
