import React from 'react';
import { render } from 'react-dom';
import Clock from './components/Clock';

render(
  <React.Fragment>
    <Clock />
  </React.Fragment>,
  document.getElementById('app')
);
