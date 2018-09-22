import React, { Component } from 'react';
import MaterialsElementTile from '../components/MaterialsElementTile';
import MaterialsShowTile from '../components/MaterialsShowTile';
import MaterialsFormContainer from './MaterialsFormContainer';

class MaterialsIndexContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render(){
    let materialsList = this.props.materials.map(widget => {
      if (this.props.ownership) {
        return(
          <MaterialsElementTile
            key={widget.id}
            id={widget.id}
            gizmo={widget.material_name}
            changeElement={this.props.changeElement}
            methodUpdate={this.props.methodUpdate}
            projectId={this.props.projectId}
            />
        )
      } else {
        return(
          <MaterialsShowTile
            key={widget.id}
            id={widget.id}
            gizmo={widget.material_name}
            />
        )
      }
    })
    if (this.props.ownership) {
      return(
        <div>
          <div className="equipment-header">
            <b>Materials</b>
          </div>
          <ul>
            {materialsList}
          </ul>
          <div className="more-materials">
            <MaterialsFormContainer
              changeElement={this.props.changeElement}
              methodUpdate={this.props.methodUpdate}
              projectId={this.props.projectId}
              />
          </div>
        </div>
      )
    } else {
      return(
        <div>
          <div className="materials-header">
            <b>Materials</b>
          </div>
          <ul>
            {materialsList}
          </ul>
        </div>
      )
    }
  }
}

export default MaterialsIndexContainer;
