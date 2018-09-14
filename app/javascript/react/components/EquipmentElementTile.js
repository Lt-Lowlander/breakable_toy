import React, { Component } from 'react';
import { Link } from 'react-router';
import EquipmentInput from './EquipmentInput';


class EquipmentElementTile extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    this.onClick=this.onClick.bind(this)
  }

  onClick(event) {
    let payload;
    let request_params;
      payload = {
        review_vote: {
          vote: new_vote,
          id: this.props.user_vote.id
        }
      }

      request_params = {
        method: "PATCH",
        endpoint: `/api/v1/review_votes/${this.props.user_vote.id}`
      }

      this.props.onVoteClick(payload, request_params)

  }

  render(){
    let equipmentStatus;
    if (this.state.sitRep == 'situationNormal') {
      equipmentStatus = equipmentOwnerItem;
        <li>
          {EquipmentInput}
        </li>
    } else if (this.state.sitRep == 'needUpdate') {
      equipmentStatus =
      <div className="equipment-show-tile">
        <li>
          <div className="equipment-line-item">
            <div>
              {props.tool}
            </div>
            <div>
              <i className="far fa-edit" onClick={this.onClick}></i>
              <span>  |  </span>
              <i className="far fa-trash-alt"></i>
            </div>
          </div>
        </li>
      </div>
    }
    return(
      <div>
        {equipmentStatus}
      </div>
    )
  }
}

export default EquipmentElementTile;
