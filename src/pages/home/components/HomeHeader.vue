<template>
  <header class="home-header">
    <router-link to="/city">
      <div class="header-left">
        <span class="city-name">{{city.name}}</span>
        <i class="iconfont icon-xiajiantou"></i>
      </div>
    </router-link>
    <div class="header-center">
      <i class="iconfont icon-sousuo-m"></i>
      输入您要查询的商品
    </div>
    <div class="header-right">
      <i class="iconfont icon-xiaoxi"></i>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HomeHeader',
  data () {
    return {

    }
  },
  computed: {
    city () {
      return this.$store.state.currenyCity
    }
  },
  mounted () {
    const headerHeight = document.querySelector(".home-header").clientHeight
    this.$store.commit('GET_HEADER_HEIGHT', headerHeight)
  },
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/style/varibles.styl';
  .home-header
    display: flex
    height: $headerHeight
    background-color: $themeColor
    color: #ffffff
    .header-left
      width: 1.44rem
      line-height $headerHeight
      text-align: center
      color: #ffffff
      textWrap()
    .header-center
      flex: 1
      height: .52rem
      margin: .13rem 0
      padding: 0 .2rem
      border-radius: .14rem
      line-height: .52rem
      background-color #ffffff
      color: #666666
      .iconfont
        width: .2rem
        height: .52rem
    .header-right
      width: 1rem
      line-height $headerHeight
      text-align: center
      .iconfont
        font-size: 18px
</style>
