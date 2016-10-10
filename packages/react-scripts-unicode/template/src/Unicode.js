import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Unicode extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Unicode Template</h2>
        </div>
        <p className="App-intro">
          This is unicodevelopers test template
        </p>
      </div>
    );
  }
}

export default Unicode;
