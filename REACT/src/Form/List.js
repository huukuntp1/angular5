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
    console.log(this.props)
    return (
      <div>
        <button onClick={() => this.props.test}>test</button>

        <ul id="myUL">
          {
            this.props.data.map((data, index) =>
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
  console.log(state);
  return {
    abc : state
  }
}

const mapDispatchToState = (dispatch) => {
  console.log(dispatch);
  return {
    test : (id) => {
      dispatch({type: 'CHANGE_STATUS',id : id} )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToState)(App);
