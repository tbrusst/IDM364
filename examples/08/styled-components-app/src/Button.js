import React, { Component } from 'react';
import MyButton from './styles/ButtonStyles';

class Button extends Component {
  render() {
    return (
      <>
        <MyButton huge>
          Hello Button{' '}
          <span role="img" aria-label="poop">
            💩
          </span>
        </MyButton>
      </>
    );
  }
}

export default Button;
