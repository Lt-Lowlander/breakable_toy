import React, { Component } from 'react';

class MaterialsElementTile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sitRep: 'situationNormal',
      elementEdit: ''
    }
    this.handleChange=this.handleChange.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
    this.handleDestroy=this.handleDestroy.bind(this)
    this.onBlastedClick=this.onBlastedClick.bind(this)
    this.onDeleteClick=this.onDeleteClick.bind(this)
    this.onEditClick=this.onEditClick.bind(this)
    this.onReturnClick=this.onReturnClick.bind(this)
    this.tileEdits=this.tileEdits.bind(this)
    this.tileDeletions=this.tileDeletions.bind(this)
    this.containerEdits=this.containerEdits.bind(this)
  }

  onDeleteClick(event) {
    event.preventDefault();
    this.containerEdits();
    this.tileDeletions();
  }

  tileDeletions() {
    this.setState({
      sitRep: 'youMayFireWhenReady'
    })
    const elem = 'material'
    const input = 'DELETE'
    this.props.methodUpdate(input, elem)
  }

  onEditClick(event) {
    event.preventDefault();
    this.containerEdits();
    this.tileEdits();
  }

  containerEdits(){
    let sprocket = this.props.gizmo;
    this.props.reset();
    this.props.gizmoCharge(sprocket);
  }

  tileEdits(){
    this.setState({
      sitRep: 'needUpdate',
      elementEdit: `${this.props.gizmo}`
    })
    const elem = 'material'
    const input = 'PATCH'
    this.props.methodUpdate(input, elem)
  }

  onBlastedClick(event) {
    event.preventDefault();
    this.handleDestroy()
    this.setState({
      sitRep: 'situationNormal',
      elementEdit: ''
    })
  }

  onReturnClick(event) {
    event.preventDefault();
    this.setState({
      sitRep: 'situationNormal',
      elementEdit: ''
    })
  }

  handleChange(event) {
    let fieldInfo = event.target.name
    let value = event.target.value
    this.setState({ [fieldInfo]: value })
  }

  handleDestroy(){
    const payload = {
      id: this.props.id,
      material_name: this.props.gizmo,
      project_id: this.props.projectId
    }
    const request = 'DELETE'
    const traverse = `/api/v1/projects/${this.props.projectId}/materials/${this.props.id}.json`
    this.props.changeElement(payload, request, traverse)
  }

  handleSubmit(event){
    event.preventDefault()
    const payload = { material_name: this.state.elementEdit }
    const request = 'PATCH'
    const traverse = `/api/v1/projects/${this.props.projectId}/materials/${this.props.id}.json`
    this.props.changeElement(payload, request, traverse)
    this.setState({
      sitRep: 'situationNormal'
    })
  }

  render(){
    let materialsStatus;
    let elementItem = this.props.gizmo;
    if (this.state.sitRep == 'situationNormal' || this.props.gizmoSR != elementItem) {
        materialsStatus =
        <li className="materials-list-element">
          <div className="element-item">
            {elementItem}
          </div>
          <div className="element-actions">
            <i className="far fa-edit" onClick={this.onEditClick}></i>
            <span>  |  </span>
            <i className="far fa-trash-alt" onClick={this.onDeleteClick}></i>
          </div>
        </li>
    } else if (this.state.sitRep == 'needUpdate' && this.props.gizmoSR == elementItem) {
      materialsStatus =
      <li className="edit-field-and-button">
        <form onSubmit={this.handleSubmit}>
          <div className="element-field">
            <input
              name='elementEdit'
              type='text'
              value={this.state.elementEdit}
              onChange={this.handleChange}
            />
          </div>
          <div className="edit-button">
            <input className="submit-clicker button" type="submit" value="Submit" />
          </div>
        </form>
      </li>
    } else if (this.state.sitRep == 'youMayFireWhenReady' && this.props.gizmoSR == elementItem) {
      const terminationMessage = 'You may fire when ready:'
      materialsStatus =
      <li className="termination-list-element">
        <div className="element-item">
          {terminationMessage}
        </div>
        <div className="element-actions">
          <i className="fab fa-empire" onClick={this.onBlastedClick}></i>
          <span>  |  </span>
          <i className="fab fa-rebel" onClick={this.onReturnClick}></i>
        </div>
      </li>
    }

    return(
      <div>
        {materialsStatus}
      </div>
    )
  }
}

export default MaterialsElementTile;
