import React from 'react';

class Address extends React.Component {
  // Not good practice to use statre to compute the full address.
  // Use the component's props directly instead
/*
  constructor(props) {
    super(props);
    
    this.state = {
      fullAddress: `${props.street}, ${props.city}`
    }
  }
*/
  
  render() {
    return (
      <div className="address">
        {this.props.street}, {this.props.city}
      </div>
    )
  }
}

export default Address;