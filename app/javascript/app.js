import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

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
          <IndexRoute component={ProjectsIndexContainer} />
        </Route>
      </Router>
    )
  }
}

export default App;
