import React, { Component } from 'react';
import MaterialInput from '../components/MaterialInput';

class MaterialsFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      material: '',
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
      material_name: this.state.material
    }
    this.props.addNewMaterial(body)
    this.handleClear()
  }

  handleClear(){
    this.setState({
      material: ''
    })
  }

  render() {
    return(
      <div className="material-input-section">
        <form className="new-material-form" onSubmit={this.handleSubmit}>
          <div className="field-and-button">
            <div className="element-field">
              <MaterialInput
                content={this.state.material}
                label="New Material:"
                name="material"
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

export default MaterialsFormContainer;
