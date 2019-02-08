// Component Code Goes Here
import React, { Component } from 'react';

class ToggleButton extends Component {
  constructor() {
    super();

    this.state = {
      isEnabled: false
    }
  }

  render() {
    return(
      <button className="toggle-button">
        I am toggled { this.state.isEnabled ? 'on' : 'off' }
      </button>
    );
  }
}


export default ToggleButton;
