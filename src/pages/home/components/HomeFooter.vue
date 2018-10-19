<template>
  <footer class="footer">
    <router-link tag="div" to="/" class="tab-item home is-active">
      <i class="iconfont icon-homepage_fill"></i>
      <p class="tab-name">首页</p>
    </router-link>
    <router-link tag="div" to="/list" class="tab-item list">
      <i class="iconfont icon-manage"></i>
      <p class="tab-name">分类</p>
    </router-link>
    <router-link tag="div" to="/find" class="tab-item find">
      <i class="iconfont icon-leidatance"></i>
      <p class="tab-name">发现</p>
    </router-link>
    <router-link tag="div" to="/cart" class="tab-item cart">
      <i class="iconfont icon-caigou-xianxing"></i>
      <p class="tab-name">购物车</p>
    </router-link>
    <router-link tag="div" to="/my" class="tab-item my">
      <i class="iconfont icon-people"></i>
      <p class="tab-name">我的</p>
    </router-link>
  </footer>
</template>

<script>
export default {
  name: 'HomeFooter',

}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/style/varibles.styl';
  .footer
    display: flex
    justify-content: space-between
    position: fixed
    right: 0
    left: 0
    bottom: 0
    z-index: 99
    padding-top: .04rem
    border-top: 0.01rem solid #dddddd
    color: #666
    background: #fff
    .tab-item
      width: 20%
      height: $headerHeight
      text-align: center
      .iconfont
        height: .5rem
        line-height: .5rem
        font-size: .48rem
      .tab-name
        height: .28rem
        line-height: .28rem
        font-size: .18rem
    .is-active
      color: $themeColor
</style>
