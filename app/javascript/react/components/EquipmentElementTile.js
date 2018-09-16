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
    // this.handleClear=this.handleClear.bind(this)
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

  // handleClear(){
  //   this.setState({
  //     elementEdit: ''
  //   })
  // }

  handleSubmit(event){
    event.preventDefault()
    let payload = {
      tool_name: this.state.elementEdit
    }
    fetch(`/api/v1/projects/${this.props.projectId}/equipment/${this.props.id}.json`, {
      credentials: 'same-origin',
      method: 'PATCH',
      body: JSON.stringify(payload),
      headers: {'Content-Type': 'application/json'}
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
      this.setState({
        elementEdit: `${body.equipment[0].tool_name}`,
        sitRep: 'situationNormal'
      })
    })
    .catch(error => {
      console.error(`Error in fetch: ${error.message}`)
    });
  }

  render(){
    let equipmentStatus;
    let elementItem = this.props.tool;
    debugger
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
      <li>
        <div className="field-and-button">
          <form onSubmit={this.handleSubmit}>
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
          </form>
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
