import React from 'react';

class ToggleButton extends React.Component {
  state = { isEnabled: false }
  render () {
    return (
      <button className='toggleButton'>
        I am toggled {this.state.isEnabled ? 'on' : 'off'}
      </button>
    )
  }
}
export default ToggleButton