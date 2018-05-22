import React from 'react';

import {
  getUserLocalStorage
} from '../../utils/mainFunction';

import classNames from 'classnames/bind';

class ToggleFeed extends React.Component {
  constructor () {
    super();
    this.state = {
      isActive: false
    }
  }

  handleClick = (type, evt) => {
    evt.preventDefault();

    type === 'articles/feed' ?
      this.setState({
        isActive: true
      }) :
      this.setState({
        isActive: false
      })

    this.props.toggleYourGlobalFeed(type)
  }

  render() {
    const isCurrentUser = getUserLocalStorage();
    const {
      isActive
    } = this.state

    let navFeed = classNames({
      'nav-link': true,
      'disabled': !isCurrentUser,
      'active': isActive
    })

    let navGlobal = classNames({
      'nav-link': true,
      'active': !isActive
    })

    return (
      <div className = "feed-toggle">
        <ul className = "nav nav-pills outline-active">
          <li className = "nav-item">
            <a
              className = { navFeed }
              href=""
              onClick = { (evt) => this.handleClick('articles/feed', evt)}
            >
              Your Feed
            </a>
          </li>
          <li className = "nav-item">
            <a
              className = { navGlobal }
              href=""
              onClick = { (evt) => this.handleClick('articles', evt)}
            >
              Global Feed
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

ToggleFeed.propTypes = {

};

export default ToggleFeed;
