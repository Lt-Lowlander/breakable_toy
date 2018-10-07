import React, { Component } from 'react';
import { Link } from 'react-router'

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
      debugger
      this.setState ({
        userInfo: body.user,
        userEquipment: body.user.equipment,
        userProjects: body.user.projects,
        activeMember: body.viewing_member
      })
    })
  }

  render(){
    const memberDetails = this.state.userInfo;
    const memberEquipment = this.state.userEquipment;
    const memberProjects = this.state.userProjects;

    return(
      <div>

      </div>
    )
  }
}

export default UserShowContainer;
