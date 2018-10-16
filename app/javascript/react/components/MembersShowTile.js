import React, { Component } from 'react';

class MembersShowTile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      handleSitRep: 'situationNormal',
      bioSitRep: 'situationNormal',
      elementEdit: ''
    }
    this.manageChange=this.manageChange.bind(this)
    this.manageHandleSubmit=this.manageHandleSubmit.bind(this)
    this.manageBioSubmit=this.manageBioSubmit.bind(this)
    this.onHandleClick=this.onHandleClick.bind(this)
    this.onBioClick=this.onBioClick.bind(this)
  }

  onBioClick(event){
    event.preventDefault();
    this.setState({
      bioSitRep: 'needUpdate',
      elementEdit: `${this.props.bio}`
    })
    const elem = 'bio'
    this.props.infoUpdate(elem)
  }

  onHandleClick(event){
    event.preventDefault();
    this.setState({
      handleSitRep: 'needUpdate',
      elementEdit: `${this.props.handle}`
    })
    const elem = 'handle'
    this.props.infoUpdate(elem)
  }

  manageChange(event) {
    event.preventDefault();
    let fieldInfo = event.target.name;
    let value = event.target.value;
    this.setState({ [fieldInfo]: value })
  }

  manageHandleSubmit(event) {
    event.preventDefault();
    const payload = { handle: this.state.elementEdit }
    this.props.changeElement(payload)
    this.setState({ handleSitRep: 'situationNormal'})
  }

  manageBioSubmit(event) {
    event.preventDefault();
    const payload = { bio: this.state.elementEdit }
    this.props.changeElement(payload)
    this.setState({ bioSitRep: 'situationNormal'})
  }

  render(){
    let handleEdit;
    let bioEdit;
    if (this.props.ownership) {
      handleEdit =
      <div className="user-handle-edit" onClick={this.onHandleClick}>
        <i className="far fa-edit"></i>
      </div>
      bioEdit =
      <div className="user-bio-edit" onClick={this.onBioClick}>
        <i className="far fa-edit"></i>
      </div>
    }
    let handleStatus;
    let bioStatus;
      if (this.state.handleSitRep == 'situationNormal') {
        handleStatus=
        <div className="user-handle-cell">
          {handleEdit}
          <div className="user-handle-text">
            {this.props.handle}
          </div>
        </div>
      } else if (this.state.handleSitRep == 'needUpdate') {
        handleStatus =
        <form onSubmit={this.manageHandleSubmit}>
          <div className="element-field">
            <input
              name='elementEdit'
              type='text'
              value={this.state.elementEdit}
              onChange={this.manageChange}
            />
          </div>
          <div className="edit-button">
            <input className="submit-clicker button" type="submit" value="submit" />
          </div>
        </form>
      }
      if (this.state.bioSitRep == 'situationNormal') {
        bioStatus=
        <div className="user-bio-cell">
          {bioEdit}
          <div className="user-bio-text">
            {this.props.bio}
          </div>
        </div>
      } else if (this.state.bioSitRep == 'needUpdate') {
        bioStatus=
        <form onSubmit={this.manageBioSubmit}>
          <div className="element-field">
            <input
              name='elementEdit'
              type='text'
              value={this.state.elementEdit}
              onChange={this.manageChange}
            />
          </div>
          <div className="edit-button">
            <input className="submit-clicker button" type="submit" value="submit" />
          </div>
        </form>
      }
    return(
      <div className="member-info">
        <div className="user-details notestyle rounders">
          <div className="handle-unit margin-spacing">
            <div className="handle-label">
              User Name:
            </div>
            <div className="handle-entry">
              {handleStatus}
            </div>
          </div>
          <div className="role-unit margin-spacing">
            <div className="role-label">
              Role:
            </div>
            <div className="role-entry">
              {this.props.role}
            </div>
          </div>
          <div className="bio-unit margin-spacing">
            <div className="bio-label">
              Bio:
            </div>
            <div className="bio-entry">
              {bioStatus}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MembersShowTile;
