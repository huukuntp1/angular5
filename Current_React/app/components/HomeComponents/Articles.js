import React from 'react';
import Article from './article';

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
      </div>
    );
  }
}

Articles.propTypes = {

};

export default Articles;
