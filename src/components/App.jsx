import React, { Component } from 'react';
//example component import - see webpack.config.resolve.alias
import SearchBar from 'SearchBar'
import VideoList from 'VideoList'
import VideoDetail from 'VideoDetail'

//example of loaded environment variables!
// WARNING !!! THESE ARE LOADED INTO WEBPACK SCRIPT, SO IF THEY ARE CONFIDENTIAL/PRIVATE, DO !!!NOT!!!
// USE THEM IN YOUR CODE! USE HEROKU ENV VARIABLES ETC. IN PRODUCTION CODE!
const API_KEY = process.env.API_KEY
console.log("PLEASE READ ENV VARIABLE WARNING IN './src/components/App.jsx'!")



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

  }



  render() {
   
    return (
      <div>
        Start App
      </div>

    );
  }
}
