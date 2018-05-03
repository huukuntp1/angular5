import { all, fork } from 'redux-saga/effects';

import { watchAddTitle } from './addTitle';
import { getAPITitle } from './getAPITitle';
import { watchChangeStatus } from './changeStatus'
import { watchDeleteTitle } from './deleteTitle'

export default function* rootSaga() {
  const _url = 'http://5ae0da06ee98370014cf2429.mockapi.io/user';
  yield all([
      fork(getAPITitle, _url),
      watchAddTitle(),
      watchChangeStatus(),
      watchDeleteTitle()
  ])
}