import React, { Component } from 'react';
import './App.css';
import RemoteControl from './components/remoteControl';
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
      console.log("Pressed ", e.target.name);
    }).catch(error => {
      
    });
  }
  render() {
    return (
      <div className="App">
        <h3>ReactJS Roku Remote Control</h3>
        <RemoteControl handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
