import React, { Component } from 'react';
import { connect } from 'react-redux';

import FormComponent from '../component/FormComponent';
import ListTitle from './ListTitle';
import { actionAddTitle } from '../actions/index';

class Form extends Component {
  constructor (props) {
    super(props);
    this.state = {
      title: ''
    }
  }

  submitForm = (evt) => {
    evt.preventDefault();

    let status = false;
    const title = this.state.title;

    this.state.title && this.props.addTitleNew( title, status )

    this.setState({
      title: ''
    })
  }

  onChangeTitle = (evt) => {
    const newTitle = evt.target.value
    this.setState({
      title: newTitle
    })
  }

  render() {
    return (
      <div>
        <FormComponent
          submitForm = { this.submitForm }
          onChangeTitle = { this.onChangeTitle }
          valTitle = { this.state.title }
        />
        <ListTitle/>
      </div>
    );
  }
}

const mapStateToProps = ( state ) => {
  return {

  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    addTitleNew: ( title, status ) => {
      dispatch( actionAddTitle( title, status ) )
    }
  }
}

export default connect( mapStateToProps, mapDispatchToProps )(Form);
