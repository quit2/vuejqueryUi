import Vue from 'vue'
import Router from 'vue-router'
import address from '@/components/address'
import shoppingCart from '@/components/shoppingCart'
import jqueryUi from '@/components/jqueryUi'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/shoppingCart'
    },
    {
      path: '/shoppingCart',
      name: 'shoppingCart',
      component: shoppingCart
    },
    {
      path: '/address',
      name: 'address',
      component: address
    },
    {
      path: '/jqueryUi',
      name: 'jqueryUi',
      component: jqueryUi
    }
  ]
})
