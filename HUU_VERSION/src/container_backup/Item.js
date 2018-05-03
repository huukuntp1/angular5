import React, { Component } from 'react';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      clsChecked: false
    }
  }

  isActive(index) {
    const checked = !this.state.clsChecked;
    this.setState({
      clsChecked: checked
    })

    this.props.changeStatus(index, this.state.clsChecked)
  }

  render() {
    return (
      <li
        className = { this.props.item.status ? 'checked' : ''}
        onClick={this.isActive.bind(this, this.props.num) }
      >
        { this.props.item }
      </li>
    );
  }
}

export default App;
