import React, { Component } from 'react';

class StepsElementTile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sitRep: 'situationNormal',
      elementEdit: ''
    }
    this.handleChange=this.handleChange.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
    this.handleDestroy=this.handleDestroy.bind(this)
    this.onBlastedClick=this.onBlastedClick.bind(this)
    this.onDeleteClick=this.onDeleteClick.bind(this)
    this.onEditClick=this.onEditClick.bind(this)
    this.onReturnClick=this.onReturnClick.bind(this)
  }

  onEditClick(event) {
    event.preventDefault();
    this.setState({
      sitRep: 'needUpdate',
      elementEdit: `${this.props.info}`
    })
    const elem = 'step'
    const input = 'PATCH'
    this.props.methodUpdate(input, elem)
  }

  onDeleteClick(event) {
    event.preventDefault();
    this.setState({
      sitRep: 'youMayFireWhenReady'
    })
    const elem = 'step'
    const input = 'DELETE'
    this.props.methodUpdate(input, elem)
  }

  onBlastedClick(event) {
    event.preventDefault();
    this.handleDestroy()
    this.setState({
      sitRep: 'situationNormal',
      elementEdit: ''
    })
  }

  onReturnClick(event) {
    event.preventDefault();
    this.props.reset();
    this.setState({
      sitRep: 'situationNormal',
      elementEdit: ''
    })
  }

  handleChange(event) {
    let fieldInfo = event.target.name
    let value = event.target.value
    this.setState({ [fieldInfo]: value })
  }

  handleDestroy(){
    const payload = {
      id: this.props.id,
      instruction: this.props.info,
      project_id: this.props.projectId
    }
    const request = 'DELETE'
    const traverse = `/api/v1/projects/${this.props.projectId}/steps/${this.props.id}.json`
    this.props.changeElement(payload, request, traverse)
  }

  handleSubmit(event){
    event.preventDefault()
    const payload = { instruction: this.state.elementEdit }
    const request = 'PATCH'
    const traverse = `/api/v1/projects/${this.props.projectId}/steps/${this.props.id}.json`
    this.props.changeElement(payload, request, traverse)
    this.setState({
      sitRep: 'situationNormal'
    })
  }

  render(){
    let stepsStatus;
    let elementItem = this.props.info;
    if (this.state.sitRep == 'situationNormal') {
        stepsStatus =
          <div className="project-show-info">
            <div className="full-step-title">
              <div className="step-sequence">
                <div className="step-word">
                  Step
                </div>
                <div className="step-list-normal">
                  <li className="ordered-list-item"/>
                </div>
              </div>
              <span className="step-edelet">
                <i className="far fa-edit" onClick={this.onEditClick}></i>
                <span>  |  </span>
                <i className="far fa-trash-alt" onClick={this.onDeleteClick}></i>
              </span>
            </div>
            <div className="step-instruction">
              {elementItem}
            </div>
            <div className="cell small-12 medium-6 large-4 bounder">
              <div className="step-photo">
              </div>
            </div>
          </div>
    } else if (this.state.sitRep == 'needUpdate') {
      stepsStatus =
        <div className="project-show-info">
          <div className="full-step-title">
            <div className="step-sequence">
              <div className="step-word">
                Step
              </div>
              <div className="step-list-number">
                <li className="ordered-list-item"/>
              </div>
            </div>
          </div>
          <div className="edit-field-and-button" onBlur={this.onReturnClick}>
            <form onSubmit={this.handleSubmit}>
              <div className="element-field">
                <input
                  name='elementEdit'
                  type='text'
                  value={this.state.elementEdit}
                  onChange={this.handleChange}
                  />
              </div>
              <div className="edit-button">
                <input className="submit-clicker button" type="submit" value="Submit" />
              </div>
            </form>
          </div>
        </div>
    } else if (this.state.sitRep == 'youMayFireWhenReady') {
      const terminationMessage = 'You may fire when ready:'
      stepsStatus =
      <div className="project-show-info">
        <div className="full-step-title">
          <div className="step-sequence">
            <div className="step-word">
              Step
            </div>
            <div className="step-list-number">
              <li className="ordered-list-item"/>
            </div>
          </div>
        </div>
        <div className="step-instruction">
          <span className="step-element-item">
            {terminationMessage}
          </span>
          <span className="step-element-actions">
            <i className="fab fa-empire" onClick={this.onBlastedClick}></i>
            <span>  |  </span>
            <i className="fab fa-rebel" onClick={this.onReturnClick}></i>
          </span>
        </div>
      </div>
    }

    return(
      <div className="cell">
        <div className="step-show-tile">
          <div className="cell small-12 medium-6 large-4">
            {stepsStatus}
          </div>
        </div>
      </div>
    )
  }
}

export default StepsElementTile;
