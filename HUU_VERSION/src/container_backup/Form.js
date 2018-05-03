import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      ele: ''
    }
  }

  onChange (evt) {
    var ele = evt.target.value;
    this.setState({
      ele: ele
    })
  }

  handleSubmit(evt) {
    evt.preventDefault();
    // this.props.eventSubmit(this.state.ele);
    this.props.addNewEle(this.state.ele);

    this.setState({
      ele: ''
    },() => {
      this.textInput.focus();
    })

  }

  render() {
    return (
      <div className="secction_form">
        <form
          id="myDIV"
          className="header"
          onSubmit={this.handleSubmit.bind(this)}
        >
          <h2>My To Do List</h2>
          <input
            type="text"
            onChange={this.onChange.bind(this)}
            placeholder="Title..."
            value={this.state.ele}
            ref={(input) => {this.textInput = input;}}
          />
          <input type="submit" value="Add"  className="addBtn"/>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    abc : state
  }
}

const mapDispatchToState = (dispatch) => {
  return {
    addNewEle : (newEle) => {
      dispatch({type: 'ADD_ELE', newEle : newEle} )
    }
  }
}

export default connect(mapStateToProps , mapDispatchToState)(App);
