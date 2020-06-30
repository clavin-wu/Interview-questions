import React, { Component } from 'react';
import './App.css';
import Interview from './components/interview'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Interview />
        </div>
      </div>
    );
  }
}

export default App;
