import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import ProjectIndexContainer from '../containers/ProjectIndexContainer';
import ProjectShowContainer from '../containers/ProjectShowContainer';
import ProjectFormContainer from '../containers/ProjectFormContainer';
import UserShowContainer from '../containers/UserShowContainer';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render() {

    $(function(){
      var flashDurationInSeconds = 2;
      var flashContainerId = 'flash-messages';

      function removeFlashMessages() {
        $('#' + flashContainerId).remove();
      }

      setTimeout(removeFlashMessages, flashDurationInSeconds * 1000);
    })

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
          <Route path='/projects/:id/edit' component={ProjectFormContainer} />
          <Route path='/projects/:id' component={ProjectShowContainer} />
          <Route path='/users/:id' component={UserShowContainer} />

        </Route>
      </Router>
    )
  }
}

export default App;
