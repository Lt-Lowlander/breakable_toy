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
    const input = 'PATCH'
    this.props.methodChange(input)
  }

  onDeleteClick(event) {
    event.preventDefault();
    this.setState({
      sitRep: 'youMayFireWhenReady'
    })
    const input = 'DELETE'
    this.props.methodChange(input)
  }

  onBlastedClick(event) {
    event.preventDefault();
    this.setState({
      sitRep: 'situationNormal',
      elementEdit: ''
    })
    this.handleDestroy()
  }

  onReturnClick(event) {
    event.preventDefault();
    this.setState({
      sitRep: 'situationNormal'
    })
    const input = ''
    this.props.methodChange(input)
  }

  handleChange(event) {
    let fieldInfo = event.target.name
    let value = event.target.value
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
    this.props.changeEquipment(payload, request, traverse)
  }

  handleSubmit(event){
    event.preventDefault()
    const payload = { tool_name: this.state.elementEdit }
    const request = 'PATCH'
    const traverse = `/api/v1/projects/${this.props.projectId}/equipment/${this.props.id}.json`
    this.props.changeEquipment(payload, request, traverse)
    this.setState({
      sitRep: 'situationNormal'
    })
  }

  render(){
    let equipmentStatus;
    let elementItem = this.props.tool;
    if (this.state.sitRep == 'situationNormal') {
        equipmentStatus =
        <div className="equipment-show-tile">
          <li>
            <div className="element-item">
                {elementItem}
            </div>
            <div className="element-actions">
              <i className="far fa-edit" onClick={this.onEditClick}></i>
              <span>  |  </span>
              <i className="far fa-trash-alt" onClick={this.onDeleteClick}></i>
            </div>
          </li>
        </div>
    } else if (this.state.sitRep == 'needUpdate') {
      equipmentStatus =
      <div className="field-and-button">
        <form onSubmit={this.handleSubmit}>
          <li>
            <div className="element-field">
              <input
                name='elementEdit'
                type='text'
                value={this.state.elementEdit}
                onChange={this.handleChange}
              />
            </div>
            <div className="element-button">
              <input className="submit-clicker button" type="submit" value="Submit" />
            </div>
          </li>
        </form>
      </div>
    } else if (this.state.sitRep == 'youMayFireWhenReady') {
      equipmentStatus =
      <div>
        <li>
          <div className="equipment-show-tile">
            <div className="element-item">
              You may fire when ready:
            </div>
            <div className="element-actions">
              <i className="fab fa-empire" onClick={this.onBlastedClick}></i>
              <span>  |  </span>
              <i className="fab fa-rebel" onClick={this.onReturnClick}></i>
            </div>
          </div>
        </li>
      </div>
    }

    return(
      <div>
        {equipmentStatus}
      </div>
    )
  }
}

export default EquipmentElementTile;
