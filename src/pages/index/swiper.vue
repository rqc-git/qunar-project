<template>
  <div class="slide-container">
    <swiper :options="swiperOption" v-if="hasSwiper">
      <swiper-slide v-for="item of list" :key="item.id">
          <img class="slide-img" :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'indexSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        loop: true,
        pagination: '.swiper-pagination'
        // autoplay: true
      }
    }
  },
  computed: {
    hasSwiper () {
      return !!this.list.length
    }
  },
  methods: {
    handelSwiperEvent: function () {

    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../assets/stylus/varibles.styl'
  .swiper-pagination >>> .swiper-pagination-bullet-active
    background: $bgColor
  .slide-container
    // height: 31.25vw 兼容性不好
    width: 100%
    overflow: hidden
    height: 0
    padding-bottom: 31.25% //相对父元素百分比
    .slide-img
      width: 100%
</style>
