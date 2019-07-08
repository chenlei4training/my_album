import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import home from "@/views/home/index.vue"
import login from "../views/login/index"

Vue.use(Router)

export default new Router({
  mode:'history',

  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    }
  ]
})
