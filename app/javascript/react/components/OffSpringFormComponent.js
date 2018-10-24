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
    newProject.append("fam_id", this.props.family);
    newProject.append("name", "what's my name?");
    newProject.append("description", "How would you describe me?");
    newProject.append("photo_url", "https://i.imgur.com/I54DjMs.jpg");
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
    let branchButton;
    if (this.props.visitor != '') {
      branchButton =
        <form className="spawn-sequel" onSubmit={this.handleSubmit}>
          <button className="next-iteration button good-times rounders" type="submit" value="submit">
            Build a new version
          </button>
        </form>
    }
    return(
      <div className="">
        {branchButton}
      </div>
    )
  }
}

export default OffSpringFormComponent;
