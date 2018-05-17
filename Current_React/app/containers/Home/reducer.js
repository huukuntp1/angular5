/*
 *
 * Home reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  GET_ARTICLES_SUCCESS,
  GET_TAGS_SUCCESS,
  GET_MESSAGE_ERROR,
  SET_PARAMS_ARTICLES
} from './constants';

const initialState = fromJS({
  'articles': [],
  'tags': [],
  'error': [],
  'defaultParamsArticles': {},
  'articlesCount': 1,
  'currentPage': 0
});

function homeReducer(state = initialState, { type, payload }) {

  switch (type) {
    case DEFAULT_ACTION:
      return state;

    case GET_ARTICLES_SUCCESS:
      return state
        .set('articles', payload.articles)
        .set('articlesCount', payload.articlesCount);

    case GET_TAGS_SUCCESS:
      return state
        .set('tags', payload.tags);

    case GET_MESSAGE_ERROR:
      const listMsg = state.get('error').concat(payload.message)

      return state
        .set('error', listMsg)

    case SET_PARAMS_ARTICLES:
      return state
        .set('defaultParamsArticles', payload.params)

    default:
      return state;
  }
}

export default homeReducer;