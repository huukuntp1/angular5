import { take, call, put, select, takeEvery, fork } from 'redux-saga/effects';

import {
  GET_ARTICLES
} from './constants';
import {
  Article
} from '../../utils/mainFunction';

function* getArticles () {
  try {
    const { data: { articlesCount, articles } } = yield call(Article.getData, {test : 'test'})

    yield put({
      type: GET_ARTICLES,
      payload: { articles, articlesCount }
    })
  }
  catch (error) {
    console.log(error)
  }
}

export default function* defaultSaga() {
  yield fork(getArticles)
}
