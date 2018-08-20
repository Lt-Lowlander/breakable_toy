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
      material: this.state.material
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
            <MaterialInput className="step-field"
              content={this.state.material}
              label="New Material:"
              name="material"
              handleChange={this.handleChange}
              />
          </div>
          <input className="step-button button" type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default MaterialsFormContainer;
