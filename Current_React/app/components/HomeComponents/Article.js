import React from 'react';

class Article extends React.Component {
  render() {
    const {
      articleItem
    } = this.props

    return (
      <div>
        <div className = "article-preview" key={ articleItem.title }>
          <div className = "article-meta">
            <a href="profile.html">
              <img src = { articleItem.author.image } />
            </a>
            <div className = "info">
              <a href="" className = "author">
                { articleItem.author.username }
              </a>
              <span className = "date">
                {new Date(articleItem.createdAt).toDateString()}
              </span>
            </div>
            <button
              className = "btn btn-outline-primary btn-sm pull-xs-right"
            >
              <i className = "ion-heart"></i>
              { articleItem.favoritesCount }
            </button>
          </div>
          <a href="" className = "preview-link">
            <h1>{ articleItem.title }</h1>
            <p>{ articleItem.description }</p>
            <span>Read more...</span>
          </a>
        </div>
      </div>
    );
  }
}

Article.propTypes = {

};

export default Article;
