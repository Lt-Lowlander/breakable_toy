import React, { Component } from 'react';

class SecretComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render(){
    let message =
    <b>
      <p>
        If you're reading this, then you're on the team I want to work for!
      </p>
      <p>
        If you too are interested, then be sure to mention your favorite music band/artist so I know that you've been here!
      </p>
    </b>
    return(
      <div className="covert-style">
        {message}
      </div>
    )
  }
}

export default SecretComponent;
