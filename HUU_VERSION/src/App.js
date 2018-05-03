import React, { Component } from 'react';

import './App.css';
import Menu from './Home/Menu';
import Router from './Router/Router'

class App extends Component {
  constructor (props) {
    super(props);
    this.state = ({
      listElement: []
    })

    this.submitForm = this.submitForm.bind(this);
    this.handleDelIndex = this.handleDelIndex.bind(this);
  }

  submitForm (element) {
    const currentList = this.state.listElement;

    this.setState({
      listElement: currentList.concat(element)
    }, () => {
      console.log(this.state.listElement);
    })
  }

  handleDelIndex (index) {
    const currentList = this.state.listElement;
    console.log(currentList)
    this.setState({
      listElement: currentList.splice(index, 1)
    }, () => {
      console.log(this.state.listElement)
    })
  }

  render() {
    return (
      <div className="App">
        <Menu/>
        <Router/>
      </div>
    );
  }
}

export default App;
