import React from 'react';
import { Link } from 'react-router';

const ProjectInputTile = (props) => {

  return(
    <div>
      <label>{props.label}
        <input
          name={props.name}
          type={props.type}
          value={props.value}
          onChange={props.handleChange}
        />
      </label>
    </div>
  )
}

export default ProjectInputTile;
