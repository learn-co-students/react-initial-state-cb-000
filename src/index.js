import React from 'react';
import ReactDOM from 'react-dom';

import ToggleButton from './components/ToggleButton';

ReactDOM.render(
  <ToggleButton />,
  <Address
    street="Santa Monica Blvd."
    city="Santa Monica"
  />,
  document.getElementById('root')
);
