import React, { Component } from 'react';
import { browserHistory } from 'react-router'
import { Link } from 'react-router';

import ProjectTile from '../components/ProjectTile';

class ProjectIndexContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projectsArray: [],
      activeMember: '',
      member: false,
      admin: false
    }
    this.confirm = this.confirm.bind(this);
    this.destroyProject = this.destroyProject.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.newLitFam = this.newLitFam.bind(this);
    this.postNewProject = this.postNewProject.bind(this);
  }

  confirm(event){
    if(confirm("Are you sure you want to destroy this project?")) {
      this.destroyProject(event);
    } else {
      event.preventDefault();
    }
  }

  destroyProject(event){
    event.preventDefault();
    fetch(`/api/v1/${event.currentTarget.attributes.href.value}`, {
    credentials: 'same-origin',
    method: 'DELETE'
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
      this.setState ({
        projectsArray: body
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  handleSubmit(event){
    event.preventDefault();
    let newProject = new FormData();
    newProject.append("name", "What's my name?");
    newProject.append("description", "How would you describe me?");
    newProject.append("photo_url", "How do I look?");
    this.newLitFam(newProject);
  }
  newLitFam(relevantData) {
    fetch('/api/v1/fams', {
      credentials: 'same-origin',
      method: 'POST'
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
debugger
      relevantData.append("fam_id", `${body.id}`)
      this.postNewProject(relevantData)
    });
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
debugger
        browserHistory.push(`/projects/${body.id}/edit`)
      });
    }

  componentDidMount(){
    fetch(`/api/v1/projects`, {
      credentials: 'same-origin'
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
      this.setState({
          projectsArray: body.projects,
          activeMember: body.viewing_member,
          member: body.member,
          admin: body.admin
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render(){
    let button_settings;
    const admin = this.state.admin;
    const viewer = this.state.activeMember;
    const foundProjects = this.state.projectsArray;
    let projects = foundProjects.map(project => {
      return(
        <div className="project-tile-with-owner notestyle">
          <ProjectTile
            key={project.id}
            id={project.id}
            viewer={viewer}
            admin={admin}
            author={project.user_id}
            name={project.name}
            image={project.photo_url.url}
            iteration={project.version_id}
            confirmDelete={this.confirm}
          />
        </div>
      )
    })
    if (this.state.member) {
      button_settings=
      <div className="grid-x">
        <form onSubmit={this.handleSubmit} className="cell small-8 medium-10 large-12">
          <button className="add-project-button good-times notestyle" type="submit" value="submit">
              Add a Project
          </button>
        </form>
      </div>
    }
    return(
      <div className="index-page-overview">
        <div className="prokaryote">
          {button_settings}
          <div className="grid-x grid-margin-x align-spaced">
            {projects}
          </div>
        </div>
      </div>
    )
  }
}

export  default ProjectIndexContainer;
