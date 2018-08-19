<!-- app/javascript/react/containers/VersionHistoryContainer.js

    import React, { Component } from 'react';
    import { Link } from 'react-router'



    class VersionHistoryContainer extends Component {
      constructor(props) {
        super(props)
        this.state = {

        }

      }

      render(){
        let message = "VersionHistoryContainer";

        return(
          <div className="version-history-container">
            <div className="version-hist-cont-title">
              {message}
            </div>
            <div className="version-hierarchy">
            </div>
          </div>
        )
      }
    }

    export  default VersionHistoryContainer;

===============================================================================

 app/javascript/react/containers/ProjectShowContainer.js

 import VersionHistoryContainer from './VersionHistoryContainer';

paste this into line 85, indented from top div
 <div className="cell small-12 medium-6 large-4">
   <VersionHistoryContainer/>
 </div> -->
