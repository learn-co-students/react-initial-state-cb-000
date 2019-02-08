// Component Code Goes Here
import React, { Component } from 'react';


class Address extends Component {
  render() {
    return(
      <div>{ this.props.street }, { this.props.city }</div>
    );
  }
}


export default Address;
