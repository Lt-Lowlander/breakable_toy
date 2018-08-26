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
  }

  handleChange(event) {
    let fieldInfo = event.target.name
    let value = event.target.value
    this.setState({ [fieldInfo]: value })
  }

  handleSubmit(event){
    event.preventDefault()
    let body = {
      equipment: this.state.equipment
    }
    this.props.addNewEquipment(body)
    this.handleClear()
  }

  handleClear(){
    this.setState({
      equipment: ''
    })
  }

  render() {
    return(
      <div className="equipment-input-section">
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
