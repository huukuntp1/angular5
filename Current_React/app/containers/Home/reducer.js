/*
 *
 * Home reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  GET_ARTICLES
} from './constants';

const initialState = fromJS({
  'articles': []
});

function homeReducer(state = initialState, { type, payload }) {

  switch (type) {
    case DEFAULT_ACTION:
      return state;

    case GET_ARTICLES:
      return state
        .set('articles', payload.articles);

    default:
      return state;
  }
}

export default homeReducer;