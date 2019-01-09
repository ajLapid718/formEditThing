import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="main">
          First Name:
        </div>
        <div className="main">
          Last Name:
        </div>
        <div className="main">
          <button>Edit</button>
        </div>
      </div>
    );
  }
}

export default App;
