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
    this.nomenclature=this.nomenclature.bind(this)
  }

  nomenclature(nickname){
    this.setState({
      surname: nickname
    })
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
    let house = this.state.surname;
    let famList = this.state.projectsArray.map(kindred => {
      return(
        <FamShowTile
          key={kindred.id}
          id={kindred.id}
          ancestor={kindred.parent_id}
          name={kindred.name}
          handle={kindred.handle}
          version={kindred.version_id}
          image={kindred.photo_url.url}
          lastName={this.nomenclature}
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
