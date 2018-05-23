import {
  take,
  call,
  put,
  select,
  takeEvery
} from 'redux-saga/effects';

import {
  CREATE_ARTICLE
} from './constants';

import {
  postData,
} from '../../utils/mainFunction';

function* handleCreateArticle({payload}) {
  try {
    const data = yield call(postData, {
      url: 'articles',
      data: payload
    })

  }
  catch(error) {
    console.log(error)
  }
}

export default function* defaultSaga() {
  yield takeEvery(CREATE_ARTICLE, handleCreateArticle)
}
