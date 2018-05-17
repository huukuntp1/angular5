import axios from 'axios'
import { CONFIG } from './config'

axios.defaults.baseURL = CONFIG.url

const getData = ({url, params = {}}) => {
  const opts = {
    method: 'GET',
    url: url,
    params,
    data: {}
  }
  return axios(opts)
}

export {
  getData
};