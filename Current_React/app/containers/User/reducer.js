/*
 *
 * User reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  USER_SUCCESS,
  USER_ERROR
} from './constants';

const initialState = fromJS({
  'info_current_user': {},
  'msg_error': ''
});

function userReducer(state = initialState, { type, payload }) {
  switch (type) {
    case DEFAULT_ACTION:
      return state;

    case USER_SUCCESS:
      return state
        .set('info_current_user', payload.data.user)

    case USER_ERROR:
      return state
        .set('msg_error', payload.message)

    default:
      return state;
  }
}

export default userReducer;
