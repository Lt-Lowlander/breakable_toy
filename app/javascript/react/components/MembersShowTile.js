import React, { Component } from 'react';
import DZTile from './DZTile';

class MembersShowTile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newPhoto: [],
      picName: '',
      handleSitRep: 'situationNormal',
      bioSitRep: 'situationNormal',
      imageSitRep: 'situationNormal',
      elementEdit: ''
    }
    this.manageChange=this.manageChange.bind(this)
    this.manageHandleSubmit=this.manageHandleSubmit.bind(this)
    this.manageBioSubmit=this.manageBioSubmit.bind(this)
    this.manageImageSubmit=this.manageImageSubmit.bind(this)
    this.onHandleClick=this.onHandleClick.bind(this)
    this.onBioClick=this.onBioClick.bind(this)
    this.onImageClick=this.onImageClick.bind(this)
    this.onDrop=this.onDrop.bind(this)
    this.clearPic=this.clearPic.bind(this)
  }

  onDrop(file) {
    if (file.length == 1) {
      this.setState({
        newPhoto: file[0],
        picName: file[0].name
      })
    } else {
      this.setState({ message: 'You can only upload one file per image.'});
    }
  }

  clearPic(){
    this.setState({
      newPhoto: []
    })
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

  onImageClick(event){
    event.preventDefault();
    this.setState({
      imageSitRep: 'needUpdate'
    })
    const elem = 'image'
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

  manageImageSubmit(event) {
    event.preventDefault();
    let editedImage = new FormData();
    editedImage.append("profile_photo", this.state.newPhoto);
    this.props.sendPicUpdate(editedImage);
    this.clearPic();
    this.setState({ imageSitRep: 'situationNormal' });
  }

  render(){
    let handleEdit;
    let bioEdit;
    let imageEdit;
    if (this.props.ownership()) {
      handleEdit =
      <span className="user-handle-edit" onClick={this.onHandleClick}>
        <i className="far fa-edit"></i>
      </span>
      bioEdit =
      <div className="user-bio-edit" onClick={this.onBioClick}>
        <i className="far fa-edit"></i>
      </div>
      imageEdit =
      <div className="user-image-edit" onClick={this.onImageClick}>
        <i className="far fa-edit"></i>
      </div>
    }
    let handleStatus;
    let bioStatus;
    let imageStatus;
    let imageTitle = this.state.picName;
    let imageSize = this.state.newPhoto.size;
    let imageName;
    if (this.state.picName == "") {
      imageName = "none"
    } else {
      imageName = `${imageTitle} - ${imageSize} bytes`;
    }
      if (this.state.handleSitRep == 'situationNormal') {
        handleStatus=
        <div className="handle-user-unit">
          <span className="user-handle-cell">
            {handleEdit} {this.props.handle}
          </span>
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
      if (this.state.imageSitRep == 'situationNormal') {
        imageStatus=
        <div className="user-image-cell">
          {imageEdit}
          <div className="user-image-pic">
            <img className="user-pic" src={this.props.image} alt={this.props.image} />
          </div>
        </div>
      } else if (this.state.imageSitRep == 'needUpdate') {
        imageStatus=
        <form onSubmit={this.manageImageSubmit}>
          <div className="visual-semblance">
            <label>
              Current Profile Photo
            </label>
            <div className="cover-picture-handling">
              <img className="extant-image" src={this.props.image} />
              <div className="image-uploading">
                <DZTile
                  onDrop={this.onDrop}
                  />
                <div className="pic-prev-info">
                  <label>Preview:</label>
                  <img className="pic-preview" src={this.state.newPhoto.preview} />
                  <br/>
                  <label>File chosen:</label>
                  <ul>
                    <label>
                      <li>
                        {imageName}
                      </li>
                    </label>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <button type="submit" className="button" value="Submit">
            Enter Changes
          </button>
        </form>
      }
    return(
      <div className="member-info">
        <div className="user-details notestyle rounders">
          <div className="user-text">
            <div className="name-role-pic">
              <div className="name-and-role">
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
                    Role: {this.props.role}
                  </div>
                  <div className="role-entry">

                  </div>
                </div>
              </div>
              <div className="user-profile-pic">
                {imageStatus}
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
      </div>
    )
  }
}

export default MembersShowTile;
