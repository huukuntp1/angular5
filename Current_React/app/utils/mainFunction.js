import axios from 'axios'
import { CONFIG } from './config'

axios.defaults.baseURL = CONFIG.url;
axios.defaults.headers.common['Content-Type'] = 'application/json; charset=utf-8';
if (getUserLocalStorage()) {
  axios.defaults.headers.common['authorization'] = `Token ${getUserLocalStorage().token}`;
}
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

const deleteData = ({url, data = {}}) => {
  const opts = {
    method: 'DELETE',
    url,
    data
  }
  return axios(opts)
}

const putData = ({url, data = {}}) => {
  const opts = {
    method: 'PUT',
    url,
    data
  }
  return axios(opts)
}

function getUserLocalStorage () {
  return JSON.parse(localStorage.getItem('currentUser'))
}

// const getUserLocalStorage = () => {
//   return JSON.parse(localStorage.getItem('currentUser'))
// }

const saveUserToLocalStorage = (user = {}) => {
  console.log(user)
  axios.defaults.headers.common['authorization'] = `Token ${user.token}`;
  localStorage.setItem('currentUser', JSON.stringify(user))
}

const removeUserToLocalStorage = () => {
  axios.defaults.headers.common['authorization'] = '';
  window.localStorage.removeItem('currentUser');
}


export {
  getData,
  postData,
  deleteData,
  putData,
  getUserLocalStorage,
  saveUserToLocalStorage,
  removeUserToLocalStorage
};