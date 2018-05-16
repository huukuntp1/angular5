import React from 'react';
import Article from './article';
import Paging from './paging';

class Articles extends React.Component {
  render() {
    const {
      articles,
      articlesCount
    } = this.props

    return (
      <div>
        {
          articles.map((articleItem, index) => {
            return (
              <Article
                articleItem = { articleItem }
                key = { index }
              />
            )
          })
        }
        <Paging articlesCount = { articlesCount } />
      </div>
    );
  }
}

Articles.propTypes = {

};

export default Articles;
