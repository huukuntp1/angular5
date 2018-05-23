/**
 *
 * CreateEditArticle
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
import makeSelectCreateEditArticle from './selectors';
import reducer from './reducer';
import saga from './saga';
import ArticleComponent from 'components/ArticleComponent';
import {
  makeSelectGetTags
} from '../Home/selectors'

import {
  CREATE_ARTICLE
} from './constants';

export class CreateEditArticle extends React.Component {

  createArticle = (body) => {
    this.props.handleCreateArticle(body)
  }

  render() {
    const {
      tags
    } =  this.props

    return (
      <div>
        <ArticleComponent
          tags = { tags }
          createArticle = { this.createArticle }
        />
      </div>
    );
  }
}

CreateEditArticle.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  createeditarticle: makeSelectCreateEditArticle(),
  tags: makeSelectGetTags()
});

function mapDispatchToProps(dispatch) {
  return {
    handleCreateArticle (article) {
      dispatch({
        type: CREATE_ARTICLE,
        payload: {
          article
        }
      })
    },
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'createEditArticle', reducer });
const withSaga = injectSaga({ key: 'createEditArticle', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(CreateEditArticle);
