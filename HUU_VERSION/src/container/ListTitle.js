import React, { Component } from 'react';
import { connect } from 'react-redux';

import ItemComponent from '../component/ItemComponent'
import { actionChangeStatus } from '../actions'
import { actionDeleteTitle } from '../actions'

class ListTitle extends Component {

  onChangeStatus = (id, currentStatus) => {
    id && this.props.changeStatus(id, currentStatus);
  }

  onDeleteTitle = (id) => {
    id && this.props.deleteTitle(id);
  }

  render() {
    return (
      <div>
        <ul id="myUL">
          {
            this.props.listTitle.map((ele, index) => {
              console.log(ele)
              return <ItemComponent
                        item = { ele }
                        key = { index }
                        onChangeStatus = { this.onChangeStatus }
                        onDeleteTitle = { this.onDeleteTitle }
                      />
            })
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ( state ) => {
  return {
    listTitle: state
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    changeStatus: (id, currentStatus) => {
      dispatch( actionChangeStatus(id, currentStatus) )
    },

    deleteTitle: (id) => {
      dispatch( actionDeleteTitle(id) )
    }
  }
}

export default connect( mapStateToProps, mapDispatchToProps )(ListTitle);
