import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.config = {
      ip: '192.168.1.154',
      port: '8060'
    }
  }
  handleClick(e) {
    axios.post('http://'+this.config.ip+':'+this.config.port+'/keypress/'+e.target.name)
    .then(response => {

    }).catch(error => {

    });
  }
  render() {
    return (
      <div className="App">
        <h3>ReactJS Roku Remote Control</h3>
        <button name="Up" onClick={this.handleClick}>Up</button>
        <button name="Down" onClick={this.handleClick}>Down</button>
        <button name="Left" onClick={this.handleClick}>Left</button>
        <button name="Right" onClick={this.handleClick}>Right</button>
        <button name="Select" onClick={this.handleClick}>Select</button>
        <button name="Back" onClick={this.handleClick}>Back</button>
      </div>
    );
  }
}

export default App;
