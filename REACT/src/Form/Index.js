import React, { Component } from 'react';

import Form from './Form'
import List from './List'

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      listEle: []
    }
  }

  handleList (ele) {
    const currentList = this.state.listEle;
    this.setState({
      listEle: currentList.concat({
        name: ele,
        status: false
      })
    },() => {
      console.log(this.state.listEle)
    })
  }

  changeStatusList (index, isStatus) {
    this.state.listEle[index].status = !isStatus;
    const arrChangeStatus = this.state.listEle;
    this.setState({
      listEle: arrChangeStatus
    })
  }

  componentDidMount () {
    window.localStorage.storage && this.setState({
      listEle: JSON.parse(window.localStorage.storage)
    })
  }

  componentWillUnmount () {
    window.localStorage.storage = JSON.stringify(this.state.listEle);
  }

  render() {
    return (
      <div>
        <Form
          eventSubmit = { this.handleList.bind(this) }
        />
        <List
          data = { this.state.listEle }
          changeStatusList = { this.changeStatusList.bind(this) }
        />
      </div>
    );
  }
}

export default App;
