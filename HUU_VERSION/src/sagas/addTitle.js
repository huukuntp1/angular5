import { put, takeLatest  } from 'redux-saga/effects';
import axios from 'axios';

import { actionListTitleNew } from '../actions/index'

const _url = 'http://5ae0da06ee98370014cf2429.mockapi.io/user';

function* addTitle({ title, status } = {}) {
    try {
      const { data } = yield axios({
          method: 'post',
          url: _url,
          data: {
            title,
            status
          }
      });

      yield data && put( actionListTitleNew( data.id, title, status ));

    } catch (error) {
      console.log(error)
    }
}

export function* watchAddTitle() {
  yield takeLatest('ADD_TITLE', addTitle)
}

