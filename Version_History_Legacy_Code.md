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
<!--
===============================================================================
line 19 of StepsTile.js

 <img className="step-show-pic" src={props.image} alt={props.number} /> -->

===============================================================================

<!-- [![Build Status](https://codeship.com/projects/9f631d00-7d77-0136-6bc8-4eb24753254f/status?branch=master) -->

===============================================================================
<!--
# used to belong in spec/support/factory_bot.rb

# require 'factory_bot'
#
# FactoryBot.define do
#   factory :user do
#     sequence(:email) {|n| "user#{n}@example.com" }
#     password 'password'
#     password_confirmation 'password'
#   end
#
# end
 -->
