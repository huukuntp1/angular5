/**
*
* Homepage
*
*/

import React from 'react';
import Articles from './articles';

class Homepage extends React.Component {
  render() {
    const {
      articles,
      articlesCount
    } = this.props
    return (
      <div>
        <Articles
          articles = { articles }
          articlesCount = { articlesCount }
        />
      </div>
    );
  }
}

Homepage.propTypes = {

};

export default Homepage;
