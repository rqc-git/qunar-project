// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import FastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'assets/css/reset.css'                                               
import 'assets/css/iconfont/iconfont.css'
import 'swiper/dist/css/swiper.css'

// import { swiper, swiperSlide } from 'vue-awesome-swiper'

Vue.use(Vuex)
// 解决移动端300mm延迟问题
FastClick.attach(document.body)
// vue使用插件
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
