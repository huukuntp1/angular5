import React, { Component } from 'react';

class FormComponent extends Component {
  render() {
    return (
      <div>
        <form id="myDIV" className="header" onSubmit = { this.props.submitForm } >
          <h2>My To Do List</h2>
          <input type="text" id="myInput" placeholder="Title..." value = { this.props.valTitle } onChange = { this.props.onChangeTitle } />
          <button type="submit" className="addBtn">Add</button>
        </form>
      </div>
    );
  }
}

export default FormComponent;
