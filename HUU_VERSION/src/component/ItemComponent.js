import React, { Component } from 'react';

class ItemComponent extends Component {
  render() {
    return (
      <li
        onClick={()=> this.props.onChangeStatus(this.props.item.id, this.props.item.status)}
        className= { this.props.item.status ? 'checked' : '' } >
        { this.props.item.title }
        ID:
        { this.props.item.id }
        <span className="close" onClick={()=> this.props.onDeleteTitle(this.props.item.id)}>×</span>
      </li>
    );
  }
}

export default ItemComponent;
