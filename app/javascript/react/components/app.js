import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Konami from './KonamiCode';
import SecretComponent from './SecretComponent';
import ProjectIndexContainer from '../containers/ProjectIndexContainer';
import ProjectShowContainer from '../containers/ProjectShowContainer';
import ProjectFormContainer from '../containers/ProjectFormContainer';
import MemberIndexContainer from '../containers/MemberIndexContainer';
import MemberShowContainer from '../containers/MemberShowContainer';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
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
    });

    // This gets called any time a user enters the Konami Code
    let secretOp = () => {
      window.location = '/white_rabbit';
    };
    const whiteRabbit = new Konami(secretOp);

    return(
      <Router history={browserHistory}>
        <Route path='/'>

          <IndexRoute component={ProjectIndexContainer} />
          <Route path='/projects' component={ProjectIndexContainer} />
          <Route path='/projects/new' component={ProjectFormContainer} />
          <Route path='/projects/:id' component={ProjectShowContainer} />
          <Route path='/projects/:id/edit' component={ProjectFormContainer} />
          <Route path='/users' component={MemberIndexContainer} />
          <Route path='/users/:id' component={MemberShowContainer} />
          <Route path='/white_rabbit' component={SecretComponent} />

        </Route>
      </Router>
    )
  }
}

export default App;
