import React, { Component } from 'react';
import MemberProjectTile from '../components/MemberProjectTile';

class MemberProjectsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render(){
    let userCreations = this.props.memberProjects.map(work => {
      return(
        <MemberProjectTile
          key={work.id}
          id={work.id}
          name={work.name}
          image={work.photo_url}
          iteration={work.version_id}
          />
      )
    })
    return(
      <div className="user-project-container">
        <div className="user-submissions-title">
          Submitted Projects
        </div>
        <div className="user-projects grid-x grid-margin-x align-spaced">
          {userCreations}
        </div>
      </div>
    )
  }
}

export default MemberProjectsContainer
