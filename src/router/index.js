import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/home/HomePage'
import ListPage from '@/pages/list/ListPage'
import FindPage from '@/pages/find/FindPage'
import CartPage from '@/pages/cart/CartPage'
import MyPage from '@/pages/my/MyPage'
import CityPage from '@/pages/city/CityPage'
import LoginPage from '@/pages/login/LoginPage'
import MessagePage from '@/pages/message/MessagePage'

Vue.use(Router)

Router.prototype.goBack = function () {
  this.isBack = true
  window.history.go(-1)
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
      meta: {
        keepAlive: true
      }
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
    },
    {
      path: '/city',
      name: 'CityPage',
      component: CityPage,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/message',
      name: 'MessagePage',
      component: MessagePage
    }
  ]
})
