import Vue from 'vue'
import Vuex from 'vuex'
import http from 'axios'

Vue.use(Vuex)

const config = {
  urlAPI: 'https://api.coinmarketcap.com/v1/ticker/',
  urlImage: 'https://cors-anywhere.herokuapp.com/https://www.cryptocompare.com/api/data/coinlist',
  urlProduct: 'https://gist.githubusercontent.com/dpetersen/1237910/raw/80492f9a2dcadd5c0d26e5aaac3dc98fef7895a4/product_grid.js',
  urlNews: 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=567890d2653141c2b42fa838abbf1ffa',
  urlIntranet: 'http://10.0.2.210:2018/staticTestData/intranet.json'
}

const state = {
  sectionUsername: '',
  dataApi: [],
  dataImages: [],
  dataProduct: [],
  arrayCart: [],
  arrAmount: [],
  arrNews: [],
  keyWord: '',
  isRow: false,
  showNews: true,
  isShowCart: false,
  isLoading: false,
  pageSize: 4,
  currPageIndex: 1,
  arrIntranet: [],
  arrMember: []
}

const getters = {
  dataApi: ({dataApi}) => {
    return dataApi.filter(item => item.percent_change_1h < 0)
  },

  dataApiTest: ({dataApi}) => {
    return dataApi
  },

  arrayCart: ({arrayCart}) => {
    return arrayCart.filter()
  },

  totalPage: ({arrNews, pageSize}) => Math.round(arrNews.length / pageSize),

  getPageNews: ({arrNews, currPageIndex, pageSize}) => {
    return arrNews.slice((currPageIndex - 1) * pageSize, (currPageIndex - 1) * pageSize + pageSize)
  }

}

const mutations = {
  loginForm (state, user) {
    state.sectionUsername = user
  },

  setCoinsData (state, data) {
    state.dataApi = data
  },

  setImages (state, images) {
    const baseLink = images.BaseImageUrl
    const dataApi = state.dataApi

    dataApi.forEach(item => {
      if (images.Data[item.symbol]) {
        Vue.set(item, 'imageURL', baseLink + images.Data[item.symbol]['ImageUrl'])
      }
    })
  },

  setIsLoading (state, isLoading) {
    state.isLoading = isLoading
  },

  setProductData (state, data) {
    state.dataProduct = data
  },

  setShowCart (state, isShow) {
    state.isShowCart = isShow
  },

  setArrayCart (state, num) {
    const amount = 0
    if (state.arrayCart.indexOf(num) > -1) {
      state.arrayCart.map(function (item) {
        if (item === num) {
          console.log(amount)
        }
      })
    } else {
      state.arrayCart.push(num)
    }
  },

  setNewsData (state, data) {
    state.arrNews = data
    data.map(function (item) {
      Vue.set(item, 'show', true)
    })
  },

  searchNews (state, keyWord) {
    const data = state.arrNews
    data.map(function (item) {
      var isCheck = false
      if (item.title.toUpperCase().indexOf(keyWord.toUpperCase()) > -1) {
        isCheck = true
      }
      console.log(item.title + ' compare ' + keyWord + ' isCheck ' + isCheck)
      console.log('---------------------------------Each Item------------------------------------')
      Vue.set(item, 'show', isCheck)
    })
    state.keyWord = keyWord
  },

  setIsRow (state, isRow) {
    state.isRow = isRow
  },

  setCurrentPage (state, index) {
    state.currPageIndex = index
  },

  pagesizeInput (state, page) {
    state.pageSize = page
  },

  setDataIntranet (state, data) {
    state.arrIntranet = data
    console.log(state.arrIntranet)
  },

  filterTeam (state, id) {
    const data = state.arrIntranet
    data.map(function (item) {
      Vue.set(item, 'show', false)
      if (item['@team_id'] === id) {
        state.arrMember = item.gro.per
      }
    })
  }
}

const actions = {
  loginForm ({commit}, user) {
    commit('loginForm', user)
  },

  callAPI ({commit, dispatch}, param) {
    const url = (!param) ? config.urlAPI : config.urlAPI + `?limit=${param}`
    commit('setIsLoading', true)
    http.get(url)
      .then((response) => {
        commit('setCoinsData', response.data)
        commit('setIsLoading', false)
        dispatch('getImages')
      })
      .catch()
  },

  getImages ({commit}) {
    http.get(config.urlImage)
    .then((response) => {
      commit('setImages', response.data)
    })
    .catch()
  },

  callDataProduct ({commit}) {
    commit('setIsLoading', true)
    http.get(config.urlProduct)
    .then((res) => {
      commit('setIsLoading', false)
      commit('setProductData', res.data.CO)
    })
    .catch((error) => {
      console.log(error)
    })
  },

  callDataIntranet ({commit}, dataOld) {
    commit('setIsLoading', true)
    if (dataOld.length > 0) {
      commit('setDataIntranet', JSON.parse(dataOld))
      commit('setIsLoading', false)
    } else {
      http.get(config.urlIntranet)
      .then((res) => {
        commit('setIsLoading', false)
        commit('setDataIntranet', res.data.team)
      })
      .catch((error) => {
        console.log(error)
      })
    }
  },

  callDataNews ({commit}) {
    commit('setIsLoading', true)
    http.get(config.urlNews)
    .then((res) => {
      commit('setIsLoading', false)
      console.log(res.data.articles)
      commit('setNewsData', res.data.articles)
    })
    .catch((error) => {
      console.log(error)
    })
  },

  handleCart ({commit}, id) {
    commit('setShowCart', true)
    commit('setArrayCart', id)
  },

  handleShowCart ({commit}, isShow) {
    commit('setShowCart', isShow)
  },

  searchNews ({commit}, keyWord) {
    commit('setIsLoading', true)
    commit('searchNews', keyWord)
    commit('setIsLoading', false)
  },

  setIsRow ({commit}, isRow) {
    commit('setIsRow', isRow)
  },

  setCurrentPage ({commit}, index) {
    commit('setCurrentPage', index)
  },

  pagesizeInput ({commit}, page) {
    commit('pagesizeInput', page)
  },

  filterTeam ({commit}, id) {
    commit('filterTeam', id)
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
