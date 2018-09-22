import React, { Component } from 'react';
import EquipmentInput from '../components/EquipmentInput';

class EquipmentFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      equipment: '',
    }
    this.handleChange=this.handleChange.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
    this.handleClear=this.handleClear.bind(this)
    this.fetchScout=this.fetchScout.bind(this)
  }

  fetchScout(event){
    event.preventDefault()
    const elem = 'equipment'
    const input = 'POST'
    this.props.methodUpdate(input, elem)
  }

  handleChange(event) {
    event.preventDefault()
    let fieldInfo = event.target.name
    let value = event.target.value
    this.setState({ [fieldInfo]: value })
  }

  handleSubmit(event){
    event.preventDefault()
    const traverse = `/api/v1/projects/${this.props.projectId}/equipment.json`
    const request = 'POST'
    let payload = {
      tool_name: this.state.equipment,
      project_id: this.props.projectId
    }
    this.props.changeElement(payload, request, traverse)
    this.handleClear()
  }

  handleClear(){
    this.setState({
      equipment: ''
    })
  }

  render() {
    return(
      <div className="equipment-input-section" onFocus={this.fetchScout}>
        <form className="new-equipment-form" onSubmit={this.handleSubmit}>
          <div className="field-and-button">
            <div className="element-field">
              <EquipmentInput
                content={this.state.equipment}
                label="New piece of Equipment:"
                name="equipment"
                handleChange={this.handleChange}
              />
            </div>
            <div className="element-button">
              <input className="submit-clicker button" type="submit" value="Submit" />
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default EquipmentFormContainer;
