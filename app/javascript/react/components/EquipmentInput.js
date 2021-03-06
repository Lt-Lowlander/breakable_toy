import React from 'react';

const EquipmentInput = (props) => {
  return (
    <label htmlFor={props.name}>{props.label}
      <input
        name={props.name}
        type='text'
        value={props.content}
        onChange={props.handleChange}
      />
    </label>
  );
}

export default EquipmentInput;
