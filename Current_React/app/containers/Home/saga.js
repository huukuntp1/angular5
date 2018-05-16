import {
  take,
  call,
  put,
  select,
  takeEvery,
  fork
} from 'redux-saga/effects';

import {
  GET_ARTICLES,
  GET_ARTICLES_SUCCESS,
  GET_TAGS,
  GET_TAGS_SUCCESS
} from './constants';

import {
  Article,
  Tags
} from '../../utils/mainFunction';

function* getArticles () {
  try {
    const { data: { articlesCount, articles } } = yield call(Article.getData, {})

    yield put({
      type: GET_ARTICLES_SUCCESS,
      payload: { articles, articlesCount }
    })
  }
  catch (error) {
    console.log(error)
  }
}

function* getTags () {
  try {
    const {data: { tags }} = yield call(Tags.getData, {})

    yield put({
      type: GET_TAGS_SUCCESS,
      payload: { tags, tags }
    })
  }
  catch (error) {
    console.log(error)
  }
}

export default function* defaultSaga() {
  yield takeEvery(GET_ARTICLES, getArticles)
  yield takeEvery(GET_TAGS, getTags)
}
