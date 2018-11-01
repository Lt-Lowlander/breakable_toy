import React, { Component } from 'react';

class EquipmentElementTile extends Component {
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
  }

  onEditClick(event) {
    event.preventDefault();
    this.setState({
      sitRep: 'needUpdate',
      elementEdit: `${this.props.tool}`
    })
    const elem = 'equipment'
    const input = 'PATCH'
    this.props.methodUpdate(input, elem)
  }

  onDeleteClick(event) {
    event.preventDefault();
    this.setState({
      sitRep: 'youMayFireWhenReady'
    })
    const elem = 'equipment'
    const input = 'DELETE'
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
    let fieldInfo = event.target.name;
    let value = event.target.value;
    this.setState({ [fieldInfo]: value })
  }

  handleDestroy(){
    const payload = {
      id: this.props.id,
      tool_name: this.props.tool,
      project_id: this.props.projectId
    }
    const request = 'DELETE'
    const traverse = `/api/v1/projects/${this.props.projectId}/equipment/${this.props.id}.json`
    this.props.changeElement(payload, request, traverse)
  }

  handleSubmit(event){
    event.preventDefault()
    const payload = { tool_name: this.state.elementEdit }
    const request = 'PATCH'
    const traverse = `/api/v1/projects/${this.props.projectId}/equipment/${this.props.id}.json`
    this.props.changeElement(payload, request, traverse)
    this.setState({
      sitRep: 'situationNormal'
    })
  }

  render(){
    let equipmentStatus;
    const elementItem = this.props.tool;
    if (this.state.sitRep == 'situationNormal') {
        equipmentStatus =
        <li className="equipment-list-element">
          <div className="element-item">
            {elementItem}
          </div>
          <div className="element-actions">
            <i className="far fa-edit" onClick={this.onEditClick}></i>
            <span>  |  </span>
            <i className="far fa-trash-alt" onClick={this.onDeleteClick}></i>
          </div>
        </li>
    } else if (this.state.sitRep == 'needUpdate') {
      equipmentStatus =
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
    } else if (this.state.sitRep == 'youMayFireWhenReady') {
      const terminationMessage = 'You may fire when ready:'
      equipmentStatus =
      <li className="termination-list-element">
        <div className="element-item emboldened">
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
        {equipmentStatus}
      </div>
    )
  }
}

export default EquipmentElementTile;
