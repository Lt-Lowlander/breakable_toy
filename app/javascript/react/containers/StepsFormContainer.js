import React, { Component } from 'react';
import StepInput from '../components/StepInput';

class StepFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      instruction: '',
    }
    this.handleChange=this.handleChange.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
    this.handleClear=this.handleClear.bind(this)
    this.fetchScout=this.fetchScout.bind(this)
  }

  fetchScout(event){
    event.preventDefault()
    const elem = 'step'
    const input = 'POST'
    this.props.methodUpdate(input, elem)
  }

  handleChange(event) {
    let fieldInfo = event.target.name
    let value = event.target.value
    this.setState({ [fieldInfo]: value })
  }

  handleSubmit(event){
    event.preventDefault()
    const payload = {
      instruction: this.state.instruction
    }
    const request = 'POST'
    const traverse = `/api/v1/projects/${this.props.projectId}/steps.json`
    this.props.changeElement(payload, request, traverse)
    this.handleClear()
  }

  handleClear(){
    this.props.reset();
    this.setState({
      instruction: ''
    })
  }

  render() {
    return(
      <div className="step-input-section" onFocus={this.fetchScout} onBlur={this.handleClear}>
        <form className="new-article-form" onSubmit={this.handleSubmit}>
          <div className="field-and-button">
            <StepInput className="step-field"
              content={this.state.instruction}
              label="New Step:"
              name="instruction"
              handleChange={this.handleChange}
              />
          </div>
          <input className="step-button button" type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default StepFormContainer;
