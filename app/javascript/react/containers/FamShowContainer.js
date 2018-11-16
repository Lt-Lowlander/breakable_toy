import React, { Component } from 'react'
import FamShowTile from '../components/FamShowTile'

class FamShowContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projectsArray: [],
      activeMember: '',
      surname: ''
    }
    this.rumplestiltzkin=this.rumplestiltzkin.bind(this)
  }
  // this iterates through all the projects in the family, finds the progenitor, and uses its name for the page title
  rumplestiltzkin(){
    for (var i = 0; i < this.state.projectsArray.length; i++) {
      if (this.state.projectsArray[i].parent_id === null) {
        return(
          this.state.projectsArray[i].name
        )
      }
    }
  }

  componentDidMount(){
    fetch(`/api/v1/fams/${this.props.params.id}`)
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
      this.setState ({
        projectsArray: body.fam[0].projects
      })
    })
  }

  render(){
    let house = this.rumplestiltzkin();
    let famList = this.state.projectsArray.map(kindred => {
      return(
        <FamShowTile
          key={kindred.id}
          id={kindred.id}
          name={kindred.name}
          handle={kindred.handle}
          version={kindred.version_id}
          image={kindred.photo_url.url}
        />
      )
    });
    return(
      <div>
        <div className="fam-show-title">
          {house} Progression
        </div>
        <div className="grid-x grid-margin-x align-spaced">

          {famList}
        </div>
      </div>
    )
  }
}

export default FamShowContainer;
