import React, { Component } from 'react';
import './remoteControl.css';

class RemoteControl extends Component {
  render () {
    return(
      <div className="roku-remote-control-wrapper container-fluid">
        <div className="row">
          <div className="col-sm-6">
            <button className="btn btn-default" name="Back" onClick={this.props.handleClick}>Back</button>
          </div>
          <div className="col-sm-6">
            <button className="btn btn-default" name="Home" onClick={this.props.handleClick}>Home</button>
          </div>
        </div>

        <div role="separator" className="divider"></div>

        <div className="row">
          <div className="col-sm-12">
            <button className="btn btn-default" name="Up" onClick={this.props.handleClick}>Up</button>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-4">
            <button className="btn btn-default" name="Left" onClick={this.props.handleClick}>Left</button>
          </div>
          <div className="col-sm-4">
            <button className="btn btn-default" name="Select" onClick={this.props.handleClick}>Select</button>
          </div>
          <div className="col-sm-4">
            <button className="btn btn-default" name="Right" onClick={this.props.handleClick}>Right</button>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12">
            <button className="btn btn-default" name="Down" onClick={this.props.handleClick}>Down</button>
          </div>
        </div>

        <div role="separator" className="divider"></div>

        <div className="row">
          <div className="col-sm-6">
            <button className="btn btn-default" name="InstantReplay" onClick={this.props.handleClick}>InstantReplay</button>
          </div>
          <div className="col-sm-6">
            <button className="btn btn-default" name="Info" onClick={this.props.handleClick}>Info</button>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-4">
            <button className="btn btn-default" name="Rev" onClick={this.props.handleClick}>Rev</button>
          </div>
          <div className="col-sm-4">
            <button className="btn btn-default" name="Play" onClick={this.props.handleClick}>Play</button>
          </div>
          <div className="col-sm-4">
            <button className="btn btn-default" name="Fwd" onClick={this.props.handleClick}>Fwd</button>
          </div>
        </div>

        <div role="separator" className="divider"></div>

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
