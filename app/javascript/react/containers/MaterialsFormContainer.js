import React, { Component } from 'react';
import MaterialInput from '../components/MaterialInput';

class MaterialsFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      materialUpdate: '',
    }
    this.handleChange=this.handleChange.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
    this.handleClear=this.handleClear.bind(this)
    this.fetchScout=this.fetchScout.bind(this)
    this.blankOut=this.blankOut.bind(this)
  }

  fetchScout(event){
    event.preventDefault();
    this.props.reset();
    this.props.gizmoCharge(this.state.materialUpdate)
    const elem = 'material'
    const input = 'POST'
    this.props.methodUpdate(input, elem)
  }

  handleChange(event) {
    event.preventDefault()
    let fieldInfo = event.target.name
    let value = event.target.value
    this.setState({ [fieldInfo]: value })
    this.props.gizmoCharge(this.state.materialUpdate)
  }

  handleSubmit(event){
    event.preventDefault()
    let payload = {
      material_name: this.state.materialUpdate,
      project_id: this.props.projectId
    }
    const request = 'POST'
    const traverse = `/api/v1/projects/${this.props.projectId}/materials.json`
    this.props.changeElement(payload, request, traverse)
    this.handleClear()
  }

  handleClear(){
    this.setState({
      materialUpdate: ''
    })
  }

  blankOut(event){
    event.preventDefault();
    this.props.reset();
  }

  render() {
    return(
      <div className="materials-input-section" onFocus={this.fetchScout} onBlur={this.blankOut}>
        <form className="new-materials-form" onSubmit={this.handleSubmit}>
          <div className="field-and-button">
            <div className="element-field">
              <MaterialInput
                content={this.state.materialUpdate}
                label="New Material:"
                name="materialUpdate"
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
