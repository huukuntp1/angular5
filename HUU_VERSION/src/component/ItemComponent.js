import React, { Component } from 'react';

class ItemComponent extends Component {
  render() {
    return (
      <li
        onClick={()=> this.props.onChangeStatus(this.props.item.id, this.props.item.status)}
        className= { this.props.item.status ? 'active' : 'nonactive' } >
        { this.props.item.title }
        ID:
        { this.props.item.id }
        <span onClick={()=> this.props.onDeleteTitle(this.props.item.id)}>×</span>
      </li>
    );
  }
}

export default ItemComponent;
