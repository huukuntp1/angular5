import { put, takeLatest, call  } from 'redux-saga/effects';
import axios from 'axios';

import { currentData } from '../actions/';
import { refreshAPI } from './refreshDB';

const _url = 'http://5ae0da06ee98370014cf2429.mockapi.io/user';

function* ChangeStatus({ id, currentStatus } = {}) {
    try {
      console.log(!currentStatus)
      yield axios({
          method: 'put',
          url: _url + '/' + id,
          data: {
            status: !currentStatus
          }
      });

      const currentDB = yield call(refreshAPI, _url);
      yield currentDB && put( currentData(currentDB) );

    } catch (error) {
      console.log(error)
    }
}

export function* watchChangeStatus() {
  yield takeLatest('CHANGE_STATUS', ChangeStatus)
}

