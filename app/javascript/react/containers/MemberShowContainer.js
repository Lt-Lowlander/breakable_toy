import React, { Component } from 'react';
import { Link } from 'react-router'

class UserShowContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render(){
    let message = "Hi cat";

    return(
      <div>
        {message}
      </div>
    )
  }
}

export default UserShowContainer;