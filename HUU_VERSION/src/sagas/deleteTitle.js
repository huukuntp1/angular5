import { put, takeLatest  } from 'redux-saga/effects';
import axios from 'axios';

import { actionDeleteItem } from '../actions'

const _url = 'http://5ae0da06ee98370014cf2429.mockapi.io/user';

function* deleteTitle({ id } = {}) {
    try {
      const { data } = yield axios({
          method: 'delete',
          url: _url + '/' + id
      });

      yield data && put( actionDeleteItem(id));

    } catch (error) {
      console.log(error)
    }
}

export function* watchDeleteTitle() {
  yield takeLatest('DELETE_TITLE', deleteTitle)
}

