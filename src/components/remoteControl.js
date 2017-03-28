import React, { Component } from 'react'

class RemoteControl extends Component {
  render () {
    return(
      <div>
        <button name="Up" onClick={this.props.handleClick}>Up</button>
        <button name="Right" onClick={this.props.handleClick}>Right</button>
        <button name="Down" onClick={this.props.handleClick}>Down</button>
        <button name="Left" onClick={this.props.handleClick}>Left</button>
        <button name="Select" onClick={this.props.handleClick}>Select</button>
        <button name="Info" onClick={this.props.handleClick}>Info</button>
        <button name="Back" onClick={this.props.handleClick}>Back</button>
        <button name="Home" onClick={this.props.handleClick}>Home</button>
        <button name="Fwd" onClick={this.props.handleClick}>Fwd</button>
        <button name="Rev" onClick={this.props.handleClick}>Rev</button>
        <button name="InstantReplay" onClick={this.props.handleClick}>InstantReplay</button>
        <button name="Search" onClick={this.props.handleClick}>Search</button>
        <button name="Enter" onClick={this.props.handleClick}>Enter</button>
        <button name="VolumeDown" onClick={this.props.handleClick}>Volume Down</button>
        <button name="VolumeUp" onClick={this.props.handleClick}>Volume Up</button>
        <button name="VolumeMute" onClick={this.props.handleClick}>Mute</button>
        <button name="PowerOff" onClick={this.props.handleClick}>Power Off</button>
      </div>
    );
  }
}

export default RemoteControl;
