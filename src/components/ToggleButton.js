import React from 'react';

class ToggleButton extends React.Component {
  constructor() {
    super();
    this.toggle_state = this.toggle_state.bind(this) ;
    this.state = {  isEnabled: false }
  }
  toggle_state() {
    if (this.state.isEnabled === false) {
      this.setState ({isEnabled: true})
    }
    else {
      this.setState ({isEnabled: false})
    }
  }

  render() {
    return (
      <button className="toggle-button" onClick={this.toggle_state} >
        I am toggled {this.state.isEnabled ? 'on' : 'off'}
      </button>
    )
  }
}

export default ToggleButton;
