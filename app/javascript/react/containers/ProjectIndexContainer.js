import React, { Component } from 'react';
import { Link } from 'react-router'


class ProjectIndexContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }

  }

  render(){
    let message = "hi cat";

    return(
      <div>
        {message}
      </div>
    )
  }
}

export  default ProjectIndexContainer;
