// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import store from './store/index'

import initCSS from '../static/css/init.css'

import Mock from '@/mock/mock.js' // 测试mock.js 基本功能的文件
import subMenuMock from '@/mock/mockSubMenu.js' // 得到子菜单的数据
import axios from 'axios' // axios http请求库

axios.defaults.baseURL = 'http://mockjs.com/api' // 设置默认请求的url
// Vue.prototype.$http = axios

window.store = store

Vue.config.productionTip = true
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
