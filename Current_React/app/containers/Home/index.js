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
  makeSelectGetTags,
  makeSelectGetFaild,
  makeSelectParamsArticles,
  makeSelectCurrentPage
} from './selectors';

import {
  makeSelectUserLogged
} from '../User/selectors';

import reducer from './reducer';
import saga from './saga';
import {
  GET_ARTICLES,
  GET_TAGS,
  GET_ARTICLES_BY_TAGS,
  SET_PARAMS_ARTICLES,
  SET_FAVORITER
} from './constants';

import Articles from 'components/HomeComponents/Articles';
import Tags from 'components/HomeComponents/Tags';
import Banner from 'components/HomeComponents/Banner';
import ToggleFeed from 'components/HomeComponents/ToggleFeed';
import MsgError from 'components/MsgError';
import { CONFIG } from '../../utils/config'
import Paging from 'components/HomeComponents/paging';
// import Homepage from '../components/Homepage'

const defaultParamsArticles = {
  limit: CONFIG.limit,
  offset: CONFIG.offset
}

export class Home extends React.Component {
  componentDidMount () {
    this.props.getArticles(defaultParamsArticles);
    this.props.getTags();
    this.props.setParamsArticles(defaultParamsArticles);
  }

  render() {
    const {
      articles,
      articlesCount,
      tags,
      msgError,
      paramsArticles,
      currentPage,
      loggedUser
    } = this.props

    const filterTags = (tag) => {
      const setParamsArticles = Object.assign({},
        paramsArticles, {
          tag
        }
      )
      this.props.getArticles(setParamsArticles);
      this.props.setParamsArticles(setParamsArticles)
    }

    const goPage = (offset) => {
      this.props.getArticles(
        Object.assign({}, paramsArticles, {
          offset
        })
      )
    }

    const toggleYourGlobalFeed = (type) => {
      this.props.getArticles(
        defaultParamsArticles, type
      )
    }

    const toggleFavoriter = (slug, status) => {
      this.props.setFavorite(
        slug, status
      )
    }

    return (
      <div className="home-page">
        <Banner msgError = { msgError }/>
        <div className="container page">
          <div className="row">
            <div className="col-md-9">
              <ToggleFeed
                toggleYourGlobalFeed = { toggleYourGlobalFeed }
              />
              <Articles
                articles = { articles }
                articlesCount = { articlesCount }
                tags = { tags }
                toggleFavoriter = { toggleFavoriter }
              />
              <Paging
                articlesCount = { articlesCount }
                goPage = { goPage }
                currentPage = { currentPage }
              />
            </div>
            <div className="col-md-3">
              <Tags
                tags = { tags }
                filterTags = { filterTags }
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
  tags: makeSelectGetTags(),
  msgError: makeSelectGetFaild(),
  paramsArticles: makeSelectParamsArticles(),
  currentPage: makeSelectCurrentPage(),
  loggedUser: makeSelectUserLogged()
});

function mapDispatchToProps(dispatch) {
  return {
    getArticles: (params, url = 'articles') => {
      dispatch({
        type: GET_ARTICLES,
        payload: {
          url,
          params
        }
      })
    },

    getTags: () => {
      dispatch({
        type: GET_TAGS,
        payload: {}
      })
    },

    getArticlesByTag: (tag) => {
      dispatch({
        type: GET_ARTICLES_BY_TAGS,
        payload: {
          params: tag
        }
      })
    },

    setParamsArticles: (params) => {
      dispatch({
        type: SET_PARAMS_ARTICLES,
        payload: {
          params
        }
      })
    },

    setFavorite: (slug, status) => {
      dispatch({
        type: SET_FAVORITER,
        payload: {
          slug,
          status
        }
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
