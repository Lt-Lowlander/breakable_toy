import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import ProjectIndexContainer from '../containers/ProjectIndexContainer';
import ProjectShowContainer from '../containers/ProjectShowContainer';
import ProjectFormContainer from '../containers/ProjectFormContainer';
import MemberIndexContainer from '../containers/MemberIndexContainer';
import MemberShowContainer from '../containers/MemberShowContainer';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render() {
    // This is the flash message that appears when someone logs in or out
    $(function(){
      var flashDurationInSeconds = 2;
      var flashContainerId = 'flash-messages';

      function removeFlashMessages() {
        $('#' + flashContainerId).remove();
      }

      setTimeout(removeFlashMessages, flashDurationInSeconds * 1000);
    })

    // This is an easter egg built in
    // a key map of allowed keys
    var allowedKeys = {
      37: 'left',
      38: 'up',
      39: 'right',
      40: 'down',
      65: 'a',
      66: 'b',
      13: 'enter'
    };

    // the 'official' Konami Code sequence
    var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a', 'enter'];

    // a variable to remember the 'position' the user has reached so far.
    var konamiCodePosition = 0;

    // add keydown event listener
    document.addEventListener('keydown', function(e) {
      // get the value of the key code from the key map
      var key = allowedKeys[e.keyCode];
      // get the value of the required key from the konami code
      var requiredKey = konamiCode[konamiCodePosition];

      // compare the key with the required key
      if (key == requiredKey) {

        // move to the next key in the konami code sequence
        konamiCodePosition++;

        // if the last key is reached, activate cheats
        if (konamiCodePosition == konamiCode.length) {
          activateCheats();
          konamiCodePosition = 0;
        }
      } else {
        konamiCodePosition = 0;
      }
    });

    function activateCheats() {
      alert("If you're reading this, then you're on the\nteam I want to work for!\n\nIf you too are interested, please be sure\nto mention your favorite music band/artist\nso I know that you've been here!");
    }


    return(
      <Router history={browserHistory}>
        <Route path='/'>

          <ul class="title-area top-bar">
            <li class="name">
              <h6>
                <a className="home" href="/">HOME</a>
              </h6>
            </li>
          </ul>

          <IndexRoute component={ProjectIndexContainer} />
          <Route path='/projects' component={ProjectIndexContainer} />
          <Route path='/projects/new' component={ProjectFormContainer} />
          <Route path='/projects/:id' component={ProjectShowContainer} />
          <Route path='/projects/:id/edit' component={ProjectFormContainer} />
          <Route path='/users' component={MemberIndexContainer} />
          <Route path='/users/:id' component={MemberShowContainer} />

        </Route>
      </Router>
    )
  }
}

export default App;
