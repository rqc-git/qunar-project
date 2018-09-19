import Vue from 'vue'
import Router from 'vue-router'
import IndexComponent from '@/pages/index/index'
import DayTravel from '@/pages/dayTravel/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IndexComponent',
      component: IndexComponent
    },
    {
      path: '/dayTravel/:id',
      name: 'dayTravel',
      component: DayTravel
    }
  ]
})
