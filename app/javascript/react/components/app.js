import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Konami from './KonamiCode';
import SecretComponent from './SecretComponent';
import EditProjectFormContainer from '../containers/EditProjectFormContainer';
import MemberIndexContainer from '../containers/MemberIndexContainer';
import MemberShowContainer from '../containers/MemberShowContainer';
import ProjectIndexContainer from '../containers/ProjectIndexContainer';
import ProjectShowContainer from '../containers/ProjectShowContainer';
import FamShowContainer from '../containers/FamShowContainer';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

  render() {
//     // extracts user info from the navbar (written in .erb).  could be useful for linking to the user page.
//     let relString;
//     relString = this._reactInternalInstance._hostContainerInfo._node.offsetParent.innerText;
// debugger


    // This is the flash message that appears when someone logs in or out
    $(function(){
      var flashDurationInSeconds = 1;
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
            <Route path='/projects/:id' component={ProjectShowContainer} />
            <Route path='/projects/:id/edit' component={EditProjectFormContainer} />
            <Route path='/users' component={MemberIndexContainer} />
            <Route path='/users/:id' component={MemberShowContainer} />
            <Route path='/fams/:id' component={FamShowContainer} />
            <Route path='/white_rabbit' component={SecretComponent} />
          </Route>
        </Router>
    )
  }
}

export default App;
