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
} from './constants';

const initialState = fromJS({
  'articles': [],
  'tags': []
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

    default:
      return state;
  }
}

export default homeReducer;