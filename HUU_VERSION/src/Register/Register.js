import React, { Component } from 'react';

class App extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div className="secction_home">
        <h2>Welcome React JS</h2>
        <img src="assets/images/website_updates.jpg" alt="Home"/>
      </div>
    );
  }
}

export default App;
