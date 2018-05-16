import React from 'react';

class Banner extends React.Component {
  render() {
    const {
      tags
    } = this.props
    return (
      <div className="banner">
        <div className="container">
          <h1 className="logo-font">
            Conduit
          </h1>
          <p>A place to share your knowledge.</p>
        </div>
      </div>
    );
  }
}

export default Banner;
