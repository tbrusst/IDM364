import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    return <button onClick={this.props.updateState}>{this.props.label}</button>;
  }
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  updateState: PropTypes.func.isRequired
};

export default Button;
