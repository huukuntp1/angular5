import axios from 'axios'
import { CONFIG } from './config'

axios.defaults.baseURL = CONFIG.url;
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';


const getData = ({url, params = {}}) => {
  const opts = {
    method: 'GET',
    url: url,
    params,
    data: {}
  }
  return axios(opts)
}

const postData = ({url, data = {}}) => {
  const opts = {
    method: 'POST',
    url,
    data
  }
  return axios(opts)
}

export {
  getData,
  postData
};