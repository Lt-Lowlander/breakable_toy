import React, { Component } from 'react';

class SecretComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render(){
    document.getElementById("container-helm").className = "covert-background";
    document.getElementById("sticky-helm").className = "";
    document.getElementById("nav-helm").className = "";
    document.getElementById("title-helm").className = "";
    let message =
    <div className="grid-x grid-margin-x align-spaced">
      <div className="cell small-11 medium-8 large-5">
        <b>
          <p>
            If you're reading this, then you're on the team I want to work for!
          </p>
          <p>
            If you too are interested, then be sure to mention your favorite musical band/artist so I know that you've been here!
          </p>
        </b>
      </div>
    </div>
    return(
      <div className="covert-background">
        <div className="covert-style">
          {message}
        </div>
      </div>
    )
  }
}

export default SecretComponent;
