import React, { Component } from 'react';
import { browserHistory } from 'react-router'
import ProjectInputTile from '../components/ProjectInputTile';

class ProjectFormContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      name:"",
      description:"",
      photo_url:"",
      budget:"",
      errors: {}
    }
    this.validateEntry = this.validateEntry.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.postNewProject = this.postNewProject.bind(this);
  }

  validateEntry(name, fieldValue){
    if (fieldValue.trim() === '') {
      let newError = { [name]: `You must enter a ${name}`};
      this.setState({ errors: Object.assign(this.state.errors, newError) });
      return false;
    } else {
      let errorState = this.state.errors;
      delete errorState[name];
      this.setState({ errors: errorState });
      return true;
    }
  }

  handleChange(event){
    this.validateEntry(event.target.name, event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleClear(){
    this.setState({
      name:"",
      description:"",
      photo_url:"",
      budget:"",
      errors: {}
    });
  }

  handleSubmit(event){
    event.preventDefault();
    Object.keys(this.state).forEach(key => {
      if (key !="errors") {
        this.validateEntry(key, this.state[key])
      }
    })
    if (Object.keys(this.state.errors).length ==0) {
      let newProject = new FormData();
      newProject.append("name", this.state.name);
      newProject.append("description", this.state.description);
      newProject.append("photo_url", this.state.photo_url);
      newProject.append("budget", this.state.budget);
      this.postNewProject(newProject);
      this.handleClear();
    }
  }

  postNewProject(infoPayload) {
    fetch('/api/v1/projects', {
      credentials: 'same-origin',
      method: 'POST',
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
        browserHistory.push(`/projects/${body.id}`)})
        .catch(error => console.error(`Error in fetch: ${error.message}`));
    }

  render(){
    return(
      <div className="grid-x grid-margin-x align-center">
        <div className="cell small-12 med-8  large-6">
          <div className="factor notestyle rounders">
            <p></p>
            <form className="new-project-form" onSubmit={this.handleSubmit}>
              <ProjectInputTile
                label="Project Name"
                name="name"
                type="text"
                value={this.state.name}
                handleChange={this.handleChange}
                />
              <ProjectInputTile
                label="Project Description"
                name="description"
                type="text"
                value={this.state.description}
                handleChange={this.handleChange}
                />
              <ProjectInputTile
                label="Project Cover Photo"
                name="photo_url"
                type="text"
                value={this.state.photo_url}
                handleChange={this.handleChange}
                />
              <ProjectInputTile
                label="Overall Budget"
                name="budget"
                type="text"
                value={this.state.budget}
                handleChange={this.handleChange}
                />
              <button type="submit" className="button" value="Submit">
                Add Project
              </button>
            </form>
          </div>
        </div>
      </div>

    )
  }
}

export default ProjectFormContainer
