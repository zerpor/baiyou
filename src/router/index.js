import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/home/HomePage'
import ListPage from '@/pages/list/ListPage'
import FindPage from '@/pages/find/FindPage'
import CartPage from '@/pages/cart/CartPage'
import MyPage from '@/pages/my/MyPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/list',
      name: 'ListPage',
      component: ListPage
    },
    {
      path: '/find',
      name: 'FindPage',
      component: FindPage
    },
    {
      path: '/cart',
      name: 'CartPage',
      component: CartPage
    },
    {
      path: '/my',
      name: 'MyPage',
      component: MyPage
    }
  ]
})
