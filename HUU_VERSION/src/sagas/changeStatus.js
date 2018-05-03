import { put, takeLatest  } from 'redux-saga/effects';
import axios from 'axios';

import { actionChangeStatusNew } from '../actions/index'

const _url = 'http://5ae0da06ee98370014cf2429.mockapi.io/user';

function* ChangeStatus({ id, currentStatus } = {}) {
    try {
      console.log(!currentStatus)
      const { data } = yield axios({
          method: 'put',
          url: _url + '/' + id,
          data: {
            status: !currentStatus
          }
      });

      yield data && put( actionChangeStatusNew( id ));

    } catch (error) {
      console.log(error)
    }
}

export function* watchChangeStatus() {
  yield takeLatest('CHANGE_STATUS', ChangeStatus)
}

