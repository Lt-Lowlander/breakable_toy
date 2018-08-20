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
  }

  handleChange(event) {
    let fieldInfo = event.target.name
    let value = event.target.value
    this.setState({ [fieldInfo]: value })
  }

  handleSubmit(event){
    event.preventDefault()
    let body = {
      instruction: this.state.instruction
    }
    this.props.addNewInstruction(body)
    this.handleClear()
  }

  handleClear(){
    this.setState({
      instruction: ''
    })
  }

  render() {
    return(
      <div className="step-input-section">
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
