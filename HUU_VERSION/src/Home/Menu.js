import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <ul className="menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/form">To Do</Link></li>
        </ul>
      </div>
    );
  }
}

export default App;
