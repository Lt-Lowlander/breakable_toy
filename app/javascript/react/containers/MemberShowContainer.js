import React, { Component } from 'react';
import MembersShowTile from '../components/MembersShowTile';

class MemberShowContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userInfo: {},
      handle: '',
      bio: '',
      userEquipment: [],
      userProjects: [],
      activeMember: '',
      element: ''
    }
    this.changeElement=this.changeElement.bind(this)
    this.infoUpdate=this.infoUpdate.bind(this)
    this.clearInputs=this.clearInputs.bind(this)
  }

  infoUpdate(elem){
    this.setState({
      element: elem
    })
  }

  clearInputs(){
    this.setState({
      element: ''
    })
  }

  changeElement(payload){
    fetch(`/api/v1/users/${this.props.params.id}`, {
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin',
      method: 'PATCH',
      body: JSON.stringify(payload)
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
      const factor = this.state.element
      if (factor == 'handle') {
        this.setState({
          handle: body[0].handle
        })
      } else if (factor == 'bio') {
        this.setState({
          bio: body[0].bio
        })
      }
      this.clearInputs()
    })
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
        handle: body.user.handle,
        bio: body.user.bio,
        userEquipment: body.user.equipment,
        userProjects: body.user.projects,
        activeMember: body.viewing_member
      })
    })
  }

  render(){
    let ownership;
    const author = this.state.userInfo.id;
    const viewer = this.state.activeMember;
    if (viewer === author) {
      ownership = true;
    }
    const memberEquipment = this.state.userEquipment;
    const memberProjects = this.state.userProjects;
    return(
      <div>
        <MembersShowTile
          ownership={ownership}
          key={this.state.userInfo.id}
          id={this.state.userInfo.id}
          handle={this.state.handle}
          bio={this.state.bio}
          changeElement={this.changeElement}
          infoUpdate={this.infoUpdate}
        />
      </div>
    )
  }
}

export default MemberShowContainer;
