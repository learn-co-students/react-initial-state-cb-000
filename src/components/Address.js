// Component Code Goes Here

import React from 'react';

class Address extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fullAddress: `${props.street}, ${props.city}`
    }
  } 

  render() {
    return (
      <div className="address">
        {this.state.street},
        {this.props.city}
      </div>
    );
  }
}

export default Address; 