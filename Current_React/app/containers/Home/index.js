/**
 *
 * Home
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import {
  makeSelectHome,
  makeGetArticles
} from './selectors';
import reducer from './reducer';
import saga from './saga';

export class Home extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    console.log(this.props.articles)
    return (
      <div className="home-page">
        <div className="banner">
          <div className="container">
            <h1 className="logo-font">
              Conduit
            </h1>
            <p>A place to share your knowledge.</p>
          </div>
        </div>
        <div className="container page">
          <div className="row">
            <div className="col-md-9">
              <div className = "feed-toggle">
                <ul className = "nav nav-pills outline-active">
                  <li className = "nav-item">
                    <a className = "nav-link disabled" href="">Your Feed</a>
                  </li>
                  <li className = "nav-item">
                    <a className = "nav-link active" href="">Global Feed</a>
                  </li>
                </ul>
              </div>
              {
                this.props.articles.map((item, key) => {
                  return (
                    <div className = "article-preview" key = { key }>
                      <div className = "article-meta">
                        <a href="profile.html">
                          <img src = { item.author.image } />
                        </a>
                        <div className = "info">
                          <a href="" className = "author">
                            { item.author.username }
                          </a>
                          <span className = "date">
                            {new Date(item.createdAt).toDateString()}
                          </span>
                        </div>
                        <button
                          className = "btn btn-outline-primary btn-sm pull-xs-right"
                        >
                          <i className = "ion-heart"></i>
                          { item.favoritesCount }
                        </button>
                      </div>
                      <a href="" className = "preview-link">
                        <h1>{ item.title }</h1>
                        <p>{ item.description }</p>
                        <span>Read more...</span>
                      </a>
                    </div>
                  )
                })
              }
            </div>

            <div className="col-md-3">
              <div className="sidebar">
                <p>Popular Tags</p>
                {/* <Tags
                  tags={this.props.tags}
                  onClickTag={this.props.onClickTag}
                /> */}
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  home: makeSelectHome(),
  articles: makeGetArticles(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Home);
