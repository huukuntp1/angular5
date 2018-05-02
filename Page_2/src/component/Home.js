import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
      console.log(this.props.match);
    return (
      <div className="Home">
        <p>Home</p>
      </div>
    );
  }
}

export default Home;
