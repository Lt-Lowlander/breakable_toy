import React, { Component } from 'react';
import { Link } from 'react-router'

class UserShowContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount(){
    fetch(`/api/v1/users/${this.props.params.id}`)
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
debugger
      this.setState ({

      })
    })
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
