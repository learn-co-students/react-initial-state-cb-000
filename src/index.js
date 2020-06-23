import React from 'react';
import ReactDOM from 'react-dom';


import ToggleButton from './components/ToggleButton';
import Address from './components/Address';




ReactDOM.render(
  
    <ToggleButton />,
  <Address street="Santa Monica Blvd." city="Santa Monica" />,
  
  <div>Components Need To Be Mounted</div>,
  document.getElementById('root')
)