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
  GET_ARTICLES,
  GET_ARTICLES_SUCCESS,
  GET_TAGS,
  GET_TAGS_SUCCESS,
  GET_MESSAGE_ERROR,
  GET_ARTICLES_BY_TAGS,
  SET_FAVORITER,
  UPDATE_ARTICLE
} from './constants';

import {
  getData,
  postData,
  deleteData
} from '../../utils/mainFunction';

function* getArticles ({payload: { url, params }}) {
  try {
    const { data: { articlesCount, articles } } = yield call(getData,
      { url, params }
    )

    yield put({
      type: GET_ARTICLES_SUCCESS,
      payload: { articles, articlesCount }
    })
  }

  catch ({message}) {
    yield put({
      type: GET_MESSAGE_ERROR,
      payload: {
        message: `Msg Error Articles: ${message}`
      }
    })
  }
}

function* getTags () {
  try {
    const { data: { tags } } = yield call(getData,
      { url: '/tags'}
    )

    yield put({
      type: GET_TAGS_SUCCESS,
      payload: { tags }
    })
  }

  catch ({message}) {
    yield put({
      type: GET_MESSAGE_ERROR,
      payload: {
        message: `Msg Error Tags: ${message}`
      }
    })
  }
}

function* setFavoriter({payload: { slug, status }}) {
  try {
    if(!status) {
      const { data: { article } } = yield call(postData, {
        url: `articles/${slug}/favorite`
      })

      yield put({
        type: UPDATE_ARTICLE,
        payload: {
          article
        }
      })
    } else {
      const { data: {  article } } = yield call(deleteData, {
        url: `articles/${slug}/favorite`
      })

      yield put({
        type: UPDATE_ARTICLE,
        payload: {
          article
        }
      })
    }
  }

  catch ({message}) {
    yield put({
      type: GET_MESSAGE_ERROR,
      payload: {
        message: `Msg Error Tags: ${message}`
      }
    })
  }
}

export default function* defaultSaga() {
  yield takeEvery(GET_ARTICLES, getArticles)
  yield takeEvery(GET_TAGS, getTags)
  yield takeEvery(SET_FAVORITER, setFavoriter)
}
