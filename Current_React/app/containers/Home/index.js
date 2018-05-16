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
  makeSelectGetArticles,
  makeSelectGetArticlesCount,
  makeSelectGetTags
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import {
  GET_ARTICLES,
  GET_TAGS
} from './constants';

import Articles from 'components/Homepage/Articles';
import Tags from 'components/Homepage/Tags';
import Banner from 'components/Homepage/Banner';
import ToggleFeed from 'components/Homepage/ToggleFeed';
// import Homepage from '../components/Homepage'

export class Home extends React.Component {
  componentDidMount () {
    this.props.getArticles();
    this.props.getTags();
  }

  render() {
    const {
      articles,
      articlesCount,
      tags
    } = this.props

    return (
      <div className="home-page">
        <Banner/>
        <div className="container page">
          <div className="row">
            <div className="col-md-9">
              <ToggleFeed/>
              <Articles
                articles = { articles }
                articlesCount = { articlesCount }
                tags = { tags }
              />
            </div>
            <div className="col-md-3">
              <Tags
                tags = { tags }
              />
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
  articles: makeSelectGetArticles(),
  articlesCount: makeSelectGetArticlesCount(),
  tags: makeSelectGetTags()
});

function mapDispatchToProps(dispatch) {
  return {
    getArticles: () => {
      dispatch({
        type: GET_ARTICLES,
        payload: {}
      })
    },
    getTags: () => {
      dispatch({
        type: GET_TAGS,
        payload: {}
      })
    },
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
