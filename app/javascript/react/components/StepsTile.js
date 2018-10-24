import React from 'react';

const StepsTile = (props) => {
  return(
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
      </div>
      <div className="step-instruction">
        {props.info}
      </div>
      <div className="cell small-12 medium-6 large-4">
        <div className="step-photo">
        </div>
      </div>
    </div>
  )
}

export default StepsTile;
