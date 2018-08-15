import React, { Component } from 'react';
import { Link } from 'react-router'



class VersionHistoryContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }

  }

  render(){
    let message = "VersionHistoryContainer";

    return(
      <div className="version-history-container">
        <div className="version-hist-cont-title">
          {message}
        </div>
        <div className="version-hierarchy">
        </div>
      </div>
    )
  }
}

export  default VersionHistoryContainer;
