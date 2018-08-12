import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import ProjectIndexContainer from './containers/ProjectIndexContainer';
import ProjectShowContainer from './containers/ProjectShowContainer';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  $(function(){
        var flashDurationInSeconds = 5;
        var flashContainerId = 'flash-messages';

        function removeFlashMessages() {
          $('#' + flashContainerId).remove();
        }

        setTimeout(removeFlashMessages, flashDurationInSeconds * 2000);
      })

  render() {
    return(
      <Router history={browserHistory}>
        <Route path='/'>

          <IndexRoute component={ProjectIndexContainer} />
          <Route path='/projects' component={ProjectIndexContainer} />
          <Route path='/projects/:id' component={ProjectShowContainer} />
        </Route>
      </Router>
    )
  }
}

export default App;
