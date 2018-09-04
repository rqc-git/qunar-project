import Vue from 'vue'
import Router from 'vue-router'
import IndexComponent from '@/pages/index/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IndexComponent',
      component: IndexComponent
    }
  ]
})
