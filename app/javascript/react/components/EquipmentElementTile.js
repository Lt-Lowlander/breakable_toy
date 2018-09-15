import React, { Component } from 'react';
import { Link } from 'react-router';

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
    let body = {
      tool_id: this.props.id,
      tool_name: this.state.elementEdit
    }
    this.props.updateEquipment(body)
    this.setState({
      sitRep: 'situationNormal'
    })
  }

  render(){
    let equipmentStatus;
    if (this.state.sitRep == 'situationNormal') {
        equipmentStatus =
        <div className="equipment-show-tile">
          <li>
            <div className="element-item">
              {this.props.tool}
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
      <li>
        <form onSubmit={this.handleSubmit}>
          <div className="field-and-button">
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
          </div>
        </form>
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
