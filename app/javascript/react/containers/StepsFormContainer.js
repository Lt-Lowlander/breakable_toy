import React, { Component } from 'react';
import StepInput from '../components/StepInput';

class StepFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      instruction: '',
      // steps: props.step
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
      // instruction: this.state.instruction,
      // sequence_number: this.state.something
    }
    this.props.addNewInstruction(body)
    this.handleClear()
  }

  handleClear(){
    this.setState({
      instruction: '',
    })
  }

  render() {
    return(
      <form className="new-article-form callout" onSubmit={this.handleSubmit}>
        <StepInput
          content={this.state.instruction}
          label="Direction:"
          name="instruction"
          handleChange={this.handleChange}
        />


        <div className="button-group">
          <button className="button">Clear</button>
          <input className="button" type="submit" value="Submit" />
        </div>
      </form>
    )
  }
}

export default StepFormContainer;
