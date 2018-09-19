import React, { Component } from 'react';

class EquipmentElementTile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sitRep: 'situationNormal',
      elementEdit: ''
    }
    this.onClick=this.onClick.bind(this)
    this.handleChange=this.handleChange.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
  }

  onClick(event) {
    this.setState({
      sitRep: 'needUpdate',
      elementEdit: `${this.props.tool}`
    })
  }

  handleChange(event) {
    let fieldInfo = event.target.name
    let value = event.target.value
    this.setState({ [fieldInfo]: value })
  }

  handleSubmit(event){
    event.preventDefault()
    const path = `/api/v1/projects/${this.props.projectId}/equipment/${this.props.id}.json`
    const payload = {
      tool_name: this.state.elementEdit
    }
    this.props.updateEquipment(payload, path)
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
              <i className="far fa-edit" onClick={this.onClick}></i>
              <span>  |  </span>
              <i className="far fa-trash-alt"></i>
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
    }

    return(
      <div>
        {equipmentStatus}
      </div>
    )
  }
}

export default EquipmentElementTile;
