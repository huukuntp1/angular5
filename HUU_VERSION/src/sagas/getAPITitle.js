import { put } from 'redux-saga/effects';
import axios from 'axios';

import { currentData } from '../actions/'

export function* getAPITitle(_url){
    try {
      const data = yield  axios({
          method: 'GET',
          url: _url
      });

      yield data.data && put( currentData(data.data) );
    } catch (error) {
      console.log(error)
    }
}