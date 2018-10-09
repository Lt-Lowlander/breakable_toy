import React, { Component } from 'react';
import { Link } from 'react-router';
import MemberIndexTile from '../components/MemberIndexTile.js';

class MemberIndexContainer extends Component {
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
    let members = this.state.userList.map(indiv => {
      return(
        <MemberIndexTile
          key={indiv.id}
          id={indiv.id}
          handle={indiv.handle}
          bio={indiv.bio}
          role={indiv.role}
        />
      )
    })
    return(
      <div className="grid-x">
        <ul className="cell small-6 medium-4 large-3">
          {members}
        </ul>
      </div>
    )
  }
}

export default MemberIndexContainer;
