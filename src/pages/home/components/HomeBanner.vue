<template>
  <div class="home-banner">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide>
        <img class="swiper-img" src="../../../../static/images/home-banner-01.jpg" alt="banner img">
      </swiper-slide>
      <swiper-slide>
        <img class="swiper-img" src="../../../../static/images/home-banner-02.jpg" alt="banner img">
      </swiper-slide>
      <swiper-slide>
        <img class="swiper-img" src="../../../../static/images/home-banner-03.jpg" alt="banner img">
      </swiper-slide>
      <swiper-slide>
        <img class="swiper-img" src="../../../../static/images/home-banner-04.jpg" alt="banner img">
      </swiper-slide>
      <swiper-slide>
        <img class="swiper-img" src="../../../../static/images/home-banner-05.jpg" alt="banner img">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeBanner',
  data() {
    return {
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
        pagination: '.swiper-pagination',
        preloadImages: false, //不加载全部照片
        loop: true,
        autoplay: 2000,
        autoplayDisableOnInteraction: false
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    // this.swiper.slideTo(3, 1000, false)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/style/varibles.styl';
  .home-banner >>> .swiper-pagination-bullet
    background-color: #fff
    opacity: 1
  .home-banner >>> .swiper-pagination-bullet-active
    background-color: $themeColor
  .home-banner
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 36.27%
    .swiper-img
      width: 100%
</style>
