// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
<<<<<<< HEAD
import Main from './components/index/index.vue'
import Title from './components/Title.vue'
import Hello from './components/tpl/Head.vue'
import User from './components/user/index.vue'
import ShopCart from './components/shopcart/index.vue'
import Search from './components/search/index.vue'
import Classify from './components/classify/index.vue'
import detail from './components/classify/detail.vue'
import movie from './components/movie/movie.vue'
=======
import Main from './components/index/Main.vue'
import Title from './components/Title.vue'
import Hello from './components/Head.vue'
import User from './components/user/User.vue'
import ShopCart from './components/shopcart/Shopcart.vue'
import Search from './components/search/search.vue'
import Classify from './components/classify/Classify.vue'
import detail from './components/classify/detail.vue'
>>>>>>> e3687170a493d47ac81e8ef199432a72b2a7847d
import VueRouter from 'vue-router'
import iView from 'iview'
import MuseUI from 'muse-ui'
import 'iview/dist/styles/iview.css'
import 'muse-ui/dist/muse-ui.css'

Vue.use(iView)
Vue.use(MuseUI)
Vue.use(VueRouter)

Vue.config.productionTip = false

// 配置路由
const routes = [{
  path: '/',
  component: Main
}, {
  path: '/Main',
  component: Main
}, {
  path: '/Title',
  component: Title
}, {
  path: '/Hello',
  component: Hello
}, {
  path: '/Classify',
  component: Classify,
  children: [{
    path: '/Classify/detail',
    component: detail
  }]
}, {
  path: '/User',
  component: User
}, {
<<<<<<< HEAD
  path: '/User/:id',
  component: User
}, {
  path: '/User/:id/Uid/:name',
  component: User
}, {
=======
>>>>>>> e3687170a493d47ac81e8ef199432a72b2a7847d
  path: '/ShopCart',
  component: ShopCart
}, {
  path: '/search',
  component: Search
<<<<<<< HEAD
}, {
  path: '/movie',
  component: movie
=======
>>>>>>> e3687170a493d47ac81e8ef199432a72b2a7847d
}]

const router = new VueRouter({
  routes,
  'linkActiveClass': 'ivu-menu-item-selected' // 修改路由激活样式
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
