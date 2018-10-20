import React from 'react';
import { Link } from 'react-router';

const ProjectInputTile = (props) => {

  //this highlights any text in an input field when clicked
  $('input').focus(function(){
         $(this).select();
      var _self = this;
      setTimeout(function(){
         if('selectionStart' in _self )
             {
                 console.log(_self.selectionStart, _self.selectionEnd);
             }
             //IE
             else if(document.selection)
             {
                 console.log(document.selection);
             }
  },1000);
 })

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
