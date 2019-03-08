import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ScrollingPage from '../src/components/scrollingPage-Main/index';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route exact path="/" render={() => <ScrollingPage />} />
        </Router>
      </div>
    );
  }
}

export default App;
