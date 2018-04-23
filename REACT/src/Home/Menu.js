import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class App extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul className="menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/form">To Do</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
        </ul>
      </div>
    );
  }
}

export default App;
