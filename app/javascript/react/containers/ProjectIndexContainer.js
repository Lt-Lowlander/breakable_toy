import React, { Component } from 'react';
import { Link } from 'react-router';
import ProjectTile from '../components/ProjectTile';

class ProjectIndexContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projects_array: []
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
      debugger
      this.setState({
        projects_array: body
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }


  render(){
    const message = "hi cat";
    const foundProjects = this.state.projects_array;
    let projectDisplay = foundProjects.map(project => {
      return(
        <div key={project.id} className="cell small-12 medium-6 large-4">
          <ProjectTile
            key={project.id}
            id={project.id}
            name={project.name}
            image={project.photo_url}
            iteration={project.version_id}
          />
        </div>
      )
    })
    return(
      <div>
        <h1 className="site-title">Project Relay</h1>
        <div className="grid-x grid-margin-x align-spaced">
          {projectDisplay}
        </div>
      </div>
    )
  }
}

export  default ProjectIndexContainer;
