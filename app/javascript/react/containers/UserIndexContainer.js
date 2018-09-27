import React, { Component } from 'react';
import { Link } from 'react-router'

class UserIndexContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userList: []
    }
  }

  componentDidMount(){
    fetch(`/api/v1/users`,{
      credentials: 'same-origin'
    })
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
      this.setState({
        userList: body
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
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

export default UserIndexContainer;
