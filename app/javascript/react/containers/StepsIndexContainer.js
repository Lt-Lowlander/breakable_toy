import React, { Component } from 'react';
import StepsFormContainer from './StepsFormContainer';
import StepsTile from '../components/StepsTile';
import StepsElementTile from '../components/StepsElementTile';

class StepsIndexContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render(){
    let stepsList = this.props.steps.map(increment => {
      if (this.props.ownership) {
        return(
          <StepsElementTile
            key={increment.id}
            id={increment.id}
            number={increment.sequence_number}
            info={increment.instruction}
            image={increment.step_photo}
            changeElement={this.props.changeElement}
            methodUpdate={this.props.methodUpdate}
            projectId={this.props.projectId}
            />
        )
      } else {
        return(
          <StepsTile
            key={increment.id}
            number={increment.sequence_number}
            info={increment.instruction}
            image={increment.step_photo}
            />
        )
      }
    })
    if (this.props.ownership) {
      return(
        <div>
          <div className="step-show-list">
            {stepsList}
          </div>
          <div className="step-input-field">
            <StepsFormContainer
              changeElement={this.props.changeElement}
              methodUpdate={this.props.methodUpdate}
              projectId={this.props.projectId}
              />
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <div className="step-show-list">
            {stepsList}
          </div>
        </div>
      )
    }
  }
}

export default StepsIndexContainer;
