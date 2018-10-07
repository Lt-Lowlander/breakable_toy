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

  onHandleClick(event){
    event.preventDefault();
    this.setState({
      handleSitRep: 'needUpdate',
      elementEdit: `${this.props.handle}`
    })
    const elem = 'handle'
    this.props.infoUpdate(elem)

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

  }

  render(){
    let memberStatus =
    <div className="user-details">
      <div className="user-handle-cell">
        if (this.state.handleSitRep == 'situationNormal') {
          <div className="user-handle-text">
            {this.props.handle}
          </div>
          if (this.props.ownership) {
            <div className="user-handle-edit">
              <i className="far fa-edit" onClick={this.onHandleClick}></i>
            </div>
          }
        } else if (this.state.handleSitRep == 'needUpdate') {
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
      </div>
      <div className="user-bio-cell">
        if (this.state.bioSitRep == 'situationNormal') {
          <div className="user-bio-text">
            {this.props.bio}
          </div>
          if (this.props.ownership) {
            <div className="user-bio-edit">
              <i className="far fa-edit" onClick={this.onBioClick}></i>
            </div>
          }
        } else if (this.state.bioSitRep == 'needUpdate') {
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
      </div>
    </div>
  }

  return(
    <div>
      {memberStatus}
    </div>
  )
}

export default MembersShowTile;
