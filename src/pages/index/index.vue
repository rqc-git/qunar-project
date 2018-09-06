<template>
  <div>
    <index-header></index-header>
    <index-swiper :list="swiperList"></index-swiper>
    <index-icon :list="iconList"></index-icon>
  </div>
</template>

<script>
import IndexHeader from './header'
import IndexSwiper from './swiper'
import IndexIcon from './icon'
import axios from 'axios'

export default {
  name: 'Index',
  components: {
    IndexHeader,
    IndexSwiper,
    IndexIcon
  },
  data () {
    return {
      swiperList: [],
      iconList: []
    }
  },
  methods: {
    getIndexData () {
      axios.get('/api/swiper.json').then(this.handelSwiperListSucc.bind(this))
        .catch(this.handelSwiperListErr.bind(this))
    },
    handelSwiperListSucc (res) {
      if (res.data.ret) {
        this.swiperList = res.data.data.list
        this.iconList = res.data.data.iconList
      }
    },
    handelSwiperListErr (err) {
      console.log(err)
    }
  },
  created () {
    this.getIndexData()
  }

}
</script>

<style>

</style>
