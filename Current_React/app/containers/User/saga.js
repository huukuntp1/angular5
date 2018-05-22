import {
  take,
  call,
  put,
  select,
  takeEvery,
  takeLatest,
  fork
} from 'redux-saga/effects';

import {
  ON_SUBMIT_AUTHEN,
  USER_SUCCESS,
  USER_ERROR
} from './constants';

import {
  postData,
  saveUserToLocalStorage,
  getUserLocalStorage
} from '../../utils/mainFunction';

function* onSubmitAuthen ({payload: { user }}) {
  try {
    const url = user.username ? 'users' : 'users/login'

    const { data } = yield call(postData,
      {
        url,
        data: {
          user
        }
      }
    )

    saveUserToLocalStorage(data.user)
    yield put({
      type: USER_SUCCESS,
      payload: { data }
    })
  }

  catch ({message}) {
    yield put({
      type: USER_ERROR,
      payload: {
        message
      }
    })
  }
}

export default function* defaultSaga() {
  yield takeEvery(ON_SUBMIT_AUTHEN, onSubmitAuthen)
}
