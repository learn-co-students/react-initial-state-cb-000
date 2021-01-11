import React from 'react';

class Address extends React.Component {
  state = { fullAddress: `${this.props.street}, ${this.props.city}` }
  render () {
    return (
      <div className='address'>
        {/* {this.state.fullAddress} */}
        {this.props.street}, {this.props.city}
      </div>
    )
  }
}
export default Address