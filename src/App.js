import React, { Component } from 'react';
import Main from './components/MainComponent';// importing the main class component (constantly rendered)
import { BrowserRouter } from 'react-router-dom';
import './App.css';//stylesheet

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;