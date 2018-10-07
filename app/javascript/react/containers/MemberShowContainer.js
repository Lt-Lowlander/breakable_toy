import React, { Component } from 'react';
import { Link } from 'react-router'
import MembersShowTile from '../components/MembersShowTile';

class UserShowContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userInfo: {},
      userEquipment: [],
      userProjects: [],
      activeMember: ''
    }
  }

  componentDidMount(){
    fetch(`/api/v1/users/${this.props.params.id}`)
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
        userInfo: body.user,
        userEquipment: body.user.equipment,
        userProjects: body.user.projects,
        activeMember: body.viewing_member
      })
    })
  }

  render(){
    let ownership;
    const author = this.state.userInfo.handle;
    const viewer = this.state.activeMember;
    if (viewer === author) {
      ownership = true;
    }
    const memberDetails = this.state.userInfo;
    const memberEquipment = this.state.userEquipment;
    const memberProjects = this.state.userProjects;

    return(
      <div>
        <MembersShowTile
          ownership={ownership}
          key={memberDetails.id}
          id={memberDetails.id}
          handle={memberDetails.handle}
        />
      </div>
    )
  }
}

export default UserShowContainer;
