import React, { Component } from 'react';
import Item from './Item';
import { connect } from 'react-redux';

class App extends Component {
  constructor (props) {
    super(props);
  }

  hanleDelList(index) {
    this.props.dataTest(index)
  }

  changeStatus (index, isStatus) {
    this.props.changeStatusList(index, isStatus)
  }

  render() {
    return (
      <div>
        <ul id="myUL">
          {
            this.props.listEle.map((data, index) =>

              <Item
                item = {data}
                num = { index }
                key = { index }
                changeStatus = { this.changeStatus.bind(this) }/>
            )
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listEle : state
  }
}

export default connect(mapStateToProps, null)(App);
