import React, { Component } from 'react';
import { Link } from 'react-router';
import ProjectTile from '../components/ProjectTile';

class ProjectIndexContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projectsArray: []
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
          projectsArray: body
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }


  render(){
    const foundProjects = this.state.projectsArray;
    let projects = foundProjects.map(project => {
      return(
        <ProjectTile
          key={project.id}
          id={project.id}
          name={project.name}
          image={project.photo_url}
          iteration={project.version_id}
        />
      )
    })

    return(
      <div className="index-page-overview">
        <h1 className="site-title">Project Relay</h1>
        <div className="grid-x grid-margin-x align-spaced">
          {projects}
        </div>
      </div>
    )
  }
}

export  default ProjectIndexContainer;
