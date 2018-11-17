import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import { browserHistory } from 'react-router';
import ProjectInputTile from '../components/ProjectInputTile';
import DZTile from '../components/DZTile';

class EditProjectFormContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      idNum: "",
      name: "",
      description: "",
      photo_url: "",
      image: [],
      picName: "",
      familyId: "",
      errors: {}
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onDrop = this.onDrop.bind(this);
    this.sendEditedProject = this.sendEditedProject.bind(this);
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleClear(){
    this.setState({
      idNum: "",
      name: "",
      description: "",
      photo_url: "",
      image: [],
      picName: "",
      familyId: "",
      errors: {}
    });
  }

  onDrop(file) {
    if (file.length == 1) {
      this.setState({
        image: file[0],
        picName: file[0].name
      })
    } else {
      this.setState({ message: 'You can only upload one file per image.'});
    }
  }

  handleSubmit(event){
    event.preventDefault();
    if (Object.keys(this.state.errors).length == 0) {
      let picture = this.state.image;
      let picSource = picture;
      if (picture === undefined || picture.length == 0) {
        picSource = this.state.photo_url
      }
      let editedProject = new FormData();
      editedProject.append("name", this.state.name);
      editedProject.append("description", this.state.description);
      editedProject.append("photo_url", picSource);
      editedProject.append("fam_id", this.state.familyId);
      this.sendEditedProject(editedProject);
      this.handleClear();
    }
  }

  sendEditedProject(infoPayload) {
    fetch(`/api/v1/projects/${this.state.idNum}`, {
      credentials: 'same-origin',
      method: 'PATCH',
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
        browserHistory.push(`/projects/${body.project.id}`)})
        .catch(error => console.error(`Error in fetch: ${error.message}`));
    }

    componentDidMount(){
      fetch(`/api/v1/projects/${this.props.params.id}`)
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
        this.setState({
          idNum: body.project.id,
          name: body.project.name,
          description: body.project.description,
          photo_url: body.project.photo_url.url,
          familyId: body.project.fam_id
        })
      })
    }
  render(){
    let imageTitle = this.state.picName;
    let imageSize = this.state.image.size;
    let imageName;
    if (this.state.picName == "") {
      imageName = "none"
    } else {
      imageName = `${imageTitle} - ${imageSize} bytes`;
    }
    return(
      <div className="grid-x grid-margin-x align-center">
        <div className="cell small-12 med-8  large-6">
          <div className="factor-entries notestyle rounders">
            <p className="step-show-title">Edits & Updates</p>
            <form className="new-project-form" onSubmit={this.handleSubmit}>
              <ProjectInputTile
                label="Name"
                name="name"
                type="text"
                value={this.state.name}
                handleChange={this.handleChange}
                />
              <ProjectInputTile
                label="Description"
                name="description"
                type="text"
                value={this.state.description}
                handleChange={this.handleChange}
                />
              <div className="visual-semblance">
                <label>
                  Current Cover Photo
                </label>
                <div className="cover-picture-handling">
                  <img className="extant-image" src={this.state.photo_url} />
                  <div className="image-uploading">
                    <DZTile
                      image={this.state.image}
                      onDrop={this.onDrop}
                      />
                    <div className="pic-prev-info">
                      <label>Preview:</label>
                      <img className="pic-preview" src={this.state.image.preview} />
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
          </div>
        </div>
      </div>
    )
  }
}

export default EditProjectFormContainer
