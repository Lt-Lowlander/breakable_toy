import React from 'react';
import { Link } from 'react-router';

const StepsTile = (props) => {
  return(
    <div className="cell">
        <div className="step-show-tile">
          <div className="cell small-12 medium-6 large-4">
            <div className="project-show-info">
                <span className="step-sequence">
                  Step {props.number}
                </span>
              <div className="step-instruction">
               {props.info}
              </div>
            </div>
          </div>
          <div className="cell small-12 medium-6 large-4">
            <img className="step-show-pic" src={props.image} alt={props.numb} />
          </div>
        </div>
    </div>
  )
}

export default StepsTile;
