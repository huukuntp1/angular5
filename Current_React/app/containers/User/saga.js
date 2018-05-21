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
  ON_SUBMIT_AUTHEN
} from './constants';

import {
  postData
} from '../../utils/mainFunction';

function* onSubmitAuthen ({payload: { user }}) {
  try {
    const url = user.username ? 'users' : 'users/login'
    console.log(url)
    const data = yield call(postData,
      {
        url,
        data: {
          user
        }
      }
    )

    console.log(data)
    debugger
    // yield put({
    //   type: GET_ARTICLES_SUCCESS,
    //   payload: { articles, articlesCount }
    // })
  }

  catch (error) {
    console.log(error)
    // yield put({
    //   type: GET_MESSAGE_ERROR,
    //   payload: {
    //     message: `Msg Error Articles: ${message}`
    //   }
    // })
  }
}

export default function* defaultSaga() {
  yield takeEvery(ON_SUBMIT_AUTHEN, onSubmitAuthen)
}
