import React, { Component } from 'react';
import { Link } from 'react-router';
import ProjectTile from '../components/ProjectTile';

class ProjectIndexContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projectsArray: [],
      member: false,
      admin: false
    }
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
          member: body.member,
          admin: body.admin
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render(){
    let member_settings;
    let admin_settings;
    const foundProjects = this.state.projectsArray;
    let projects = foundProjects.map(project => {
      if(this.state.admin){
        admin_settings=
        <div>
          <Link to={`projects/${project.id}/edit`}>
            <i className="far fa-edit"></i>
          </Link>
          <span>  |  </span>
          <Link to={`projects/${project.id}`} onClick={this.confirm}>
            <i className="far fa-trash-alt"></i>
          </Link>
        </div>
      }
      return(
        <div className="project-tile-with-owner notestyle">
          <ProjectTile
            key={project.id}
            id={project.id}
            name={project.name}
            image={project.photo_url}
            iteration={project.version_id}
            />
          <div className="admin-tile-settings">
            {admin_settings}
          </div>
        </div>
      )
    })
    if (this.state.member) {
      member_settings=
      <div className="cell">
        <div className="add-project-button good-times notestyle">
          <Link to={'/projects/new'}>
            Add a Project
          </Link>
        </div>
      </div>
    }
    return(
      <div className="index-page-overview">
        <div className="prokaryote">
          {member_settings}
          <div className="grid-x grid-margin-x align-spaced">
            {projects}
          </div>
        </div>
      </div>
    )
  }
}

export  default ProjectIndexContainer;
