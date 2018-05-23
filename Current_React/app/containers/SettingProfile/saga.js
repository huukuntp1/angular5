import {
  take,
  call,
  put,
  select,
  takeEvery
} from 'redux-saga/effects';

import {
  UPDATE_USER_SETTING
} from './constants'

import {
  putData,
  saveUserToLocalStorage
} from '../../utils/mainFunction';

function* updateUserSetting({payload}) {
  try {
    const {data} = yield call(putData,{
      url: 'user',
      data: payload
    })
    debugger
    saveUserToLocalStorage(data.user)
  }
  catch ({message}) {
    console.log(message)
  }
}

export default function* defaultSaga() {
  yield takeEvery(UPDATE_USER_SETTING, updateUserSetting)
}
