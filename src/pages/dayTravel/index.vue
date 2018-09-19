<template>
  <div>
    <index-header></index-header>
    <div v-for="item of list" :key="item.id">{{item.text}}</div>
  </div>
</template>

<script>
import IndexHeader from '../index/header'
import axios from 'axios'
export default {
  name: 'day-travel',
  components: {
    IndexHeader
  },
  data () {
    return {
      id: '',
      list: []
    }
  },
  created () {
    this.getDayTravelData()
  },
  watch: {
    '$route' () { // 监听路由参数变化
      this.getDayTravelData()
    }
  },
  methods: {
    getDayTravelData () {
      this.id = this.$route.params.id
      axios.get('/api/dayTravelList.json?id=' + this.id).then(this.handelDayTravelSucc.bind(this))
        .catch(this.handelDayTravelErr.bind(this))
    },
    handelDayTravelSucc (res) {
      if (res.data.ret) {
        this.list = res.data.data.list
      }
    },
    handelDayTravelErr (res) {
      console.log(res)
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
