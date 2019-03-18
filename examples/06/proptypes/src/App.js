import React, { Component } from 'react';
import Button from './Button';
import { formatPrice } from './utilities';
import './App.css';

class App extends Component {
  updateState = () => {
    console.log('Update App State');
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Button label="Fun With propTypes" updateState={this.updateState} />
          <h1>{formatPrice(4238)}</h1>
        </header>
      </div>
    );
  }
}

export default App;
