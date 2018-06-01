// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueI18n from 'vue-i18n'
import Vuetify from 'vuetify'

Vue.config.productionTip = false
Vue.use(VueI18n)
Vue.use(Vuetify)

const messages = {
  en: {
    message: {
      titleForm: 'Login',
      chooseLang: 'Choose Language',
      textUser: 'Username',
      textPassword: 'Password',
      textLogin: 'Login',
      welcome: 'Welcome',
      logout: 'Logout',
      titleCoins: 'Coins dashboard',
      filter: 'Filter',
      numberorderCoin: 'Number order',
      nameCoin: 'Name',
      symbolCoin: 'Symbol',
      time1h: '1H',
      time24h: '24H',
      text7D: '7D',
      market: 'Market Capitalizations',
      home: 'Home',
      product: 'Product',
      news: 'News',
      contact: 'Contact',
      stockmarket: 'Stock marker',
      nameContact: 'Name',
      phoneContact: 'Phone',
      addressContact: 'Address',
      contentContact: 'Content',
      sendContact: 'Send Contact',
      type: 'Type',
      store: 'Store',
      chatonline: 'Chat online'
    }
  },
  vi: {
    message: {
      titleForm: 'Hệ Thống Đăng Nhập',
      chooseLang: 'Chọn ngôn ngữ',
      textUser: 'Tài khoản',
      textPassword: 'Mật khẩu',
      textLogin: 'Đăng nhập',
      welcome: 'Xin chào',
      logout: 'Đăng xuất',
      titleCoins: 'Tiền ảo',
      filter: 'Hiển Thị',
      numberorderCoin: 'STT',
      nameCoin: 'Tên',
      symbolCoin: 'Ký hiệu',
      time1h: '1H',
      time24h: '24H',
      text7D: '7D',
      market: 'Giá trị vốn hóa',
      home: 'Trang chủ',
      product: 'Sản phẩm',
      news: 'Tin tức',
      contact: 'Liên hệ',
      stockmarket: 'Thị trường',
      nameContact: 'Họ & Tên',
      phoneContact: 'Điện thoại',
      addressContact: 'Địa chỉ',
      contentContact: 'Nội dung',
      sendContact: 'Gửi liên hệ',
      type: 'Loại',
      store: 'Cửa hàng',
      chatonline: 'Chát online'
    }
  }
}

const i18n = new VueI18n({
  locale: 'vi',
  messages
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  Vuetify,
  template: '<App/>',
  components: { App }
})
