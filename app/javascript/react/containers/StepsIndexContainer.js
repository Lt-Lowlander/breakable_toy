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
            info={increment.instruction}
            image={increment.step_photo}
            changeElement={this.props.changeElement}
            methodUpdate={this.props.methodUpdate}
            projectId={this.props.projectId}
            reset={this.props.reset}
            sequenceSR={this.props.currentItem}
            sequenceCharge={this.props.itemUpdate}
            />
        )
      } else {
        return(
          <StepsTile
            key={increment.id}
            id={increment.id}
            info={increment.instruction}
            image={increment.step_photo}
            />
        )
      }
    })
    if (this.props.ownership) {
      return(
        <div>
          <ol className="order-in-the-steps">
            <div className="step-show-list">
              {stepsList}
            </div>
          </ol>
          <div className="step-input-field">
            <StepsFormContainer
              changeElement={this.props.changeElement}
              methodUpdate={this.props.methodUpdate}
              projectId={this.props.projectId}
              reset={this.props.reset}
              sequenceSR={this.props.currentItem}
              sequenceCharge={this.props.itemUpdate}
              />
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <ol className="order-in-the-steps">
            <div className="step-show-list">
              {stepsList}
            </div>
          </ol>
        </div>
      )
    }
  }
}

export default StepsIndexContainer;
