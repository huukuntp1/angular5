import Vue from 'vue'
import Router from 'vue-router'
import Trand from '@/components/Trand'
import Form from '@/components/Form'
import Contact from '@/components/Contact'
import Product from '@/components/Product'
import News from '@/components/News'
import Chatonline from '@/components/Chatonline'
import Intranet from '@/components/Intranet'
import Vuetify from '@/components/Vuetify'
// import Pwa from '@/components/Pwa'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Form',
      component: Form
    },
    {
      path: '/trand',
      name: 'trand',
      component: Trand
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/product',
      name: 'Product',
      component: Product
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/chatonline',
      name: 'Chatonline',
      component: Chatonline
    },
    {
      path: '/intranet',
      name: 'Intranet',
      component: Intranet
    },
    {
      path: '/vuetify',
      name: 'Vuetify',
      component: Vuetify
    }
  ]
})
