import React, { Component } from 'react';
import MembersShowTile from '../components/MembersShowTile';
import MemberEquipmentContainer from './MemberEquipmentContainer';
import MemberProjectsContainer from './MemberProjectsContainer';

class MemberShowContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userInfo: {},
      handle: '',
      bio: '',
      image: '',
      userEquipment: [],
      userProjects: [],
      activeMember: '',
      element: ''
    }
    this.changeElement=this.changeElement.bind(this)
    this.infoUpdate=this.infoUpdate.bind(this)
    this.clearInputs=this.clearInputs.bind(this)
    this.ownership=this.ownership.bind(this)
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

  ownership() {
    if (this.state.userInfo.id === this.state.activeMember) {
      return(true)
    }
  }

  changeElement(payload){
debugger
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
debugger
      if (factor == 'handle') {
        this.setState({
          handle: body[0].handle
        })
      } else if (factor == 'bio') {
        this.setState({
          bio: body[0].bio
        })
      } else if (factor == 'image') {
        this.setState({
          image: body[0].profile_photo.thumb.url
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
        image: body.user.profile_photo.thumb.url,
        userEquipment: body.user.equipment,
        userProjects: body.user.projects,
        activeMember: body.viewing_member
      })
    })
  }

  render(){
    return(
      <div className="user-overview grid-x">
        <div className="cell small-12 medium-6 large-5 details-and-equipment">
          <div className="member-info-tile">
            <MembersShowTile
              ownership={this.ownership}
              key={this.state.userInfo.id}
              id={this.state.userInfo.id}
              role={this.state.userInfo.role}
              handle={this.state.handle}
              bio={this.state.bio}
              image={this.state.image}
              changeElement={this.changeElement}
              infoUpdate={this.infoUpdate}
              />
          </div>
          <div className="member-equipment-tile">
            <MemberEquipmentContainer
              memberEquipment={this.state.userEquipment}
              />
          </div>
        </div>
        <div className="cell small-12 medium-8 large-7 user-projects-container">
          <div className="inner-user-projects-container">
            <MemberProjectsContainer
              memberProjects={this.state.userProjects}
              />
          </div>
        </div>
      </div>
    )
  }
}

export default MemberShowContainer;
