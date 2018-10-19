import React, { Component } from 'react';
import { browserHistory } from 'react-router'

class OffSpringFormComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.postNewProject = this.postNewProject.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    let newProject = new FormData();
    newProject.append("parent_id", this.props.parent);
    newProject.append("user_id", this.props.userId);
    newProject.append("handle", this.props.handle);
    newProject.append("version_id", this.props.version);
    newProject.append("family_id", this.props.family);
    newProject.append("name", "fill me in!");
    newProject.append("description", "fill me in!");
    newProject.append("photo_url", "fill me in!");
    newProject.append("budget", "fill me in!");
    this.postNewProject(newProject);
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
        browserHistory.push(`/projects/${body.id}/edit`)})
        .catch(error => console.error(`Error in fetch: ${error.message}`));
    }

  render(){
    return(
      <div>
        <form className="spawn-sequel" onSubmit={this.handleSubmit}>
          <button className="next-iteration good-times button rounders" type="submit" value="submit">
            <b>
              Build a new version
            </b>
          </button>
        </form>
      </div>
    )
  }
}

export default OffSpringFormComponent;
