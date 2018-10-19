<template>
  <div class="home-page" keep-alive>
    <home-header></home-header>
    <home-banner :bannerLists="bannerLists"></home-banner>
    <home-entry :entryList="entryList"></home-entry>
    <home-headline :headlines="headlines"></home-headline>
    <home-rush-buy :lbGoods="lbGoods"></home-rush-buy>
    <home-benefit v-if="showBenefit" :benefit="benefit"></home-benefit>
    <home-like :likeGoods="likeGoods"></home-like>
    <home-footer></home-footer>
  </div>
</template>

<script>
import HomeHeader from './components/HomeHeader'
import HomeBanner from './components/HomeBanner'
import HomeEntry from './components/HomeEntry'
import HomeHeadline from './components/HomeHeadline'
import HomeRushBuy from './components/HomeRushBuy'
import HomeBenefit from './components/HomeBenefit'
import HomeLike from './components/HomeLike'
import HomeFooter from './components/HomeFooter'
import Axios from './../../http/httpService.js'
import APIConfig from './../../http/APIConfig.js'
export default {
  name: 'HomePage',
  data () {
    return {
      bannerLists: [],
      entryList: [],
      headlines: [],
      lbGoods: [],
      benefit: {},
      likeGoods: []
    }
  },
  computed: {
    showBenefit () {
      return this.benefit.left == null ? false : true
    }
  },
  methods: {
    getData () {
      let httpConfig = {}
      Object.assign(httpConfig, APIConfig.HOME_CONFIG)
      return Axios.get(httpConfig)
    }
  },
  created () {
    let _this = this
    this.getData().then(function(result){
      console.log(result)
      if (result && result.success) {
        const homeData = result.data
        _this.$store.commit('CHANGE_CURRENT_CITY', homeData.city)
        _this.bannerLists = homeData.bannerLists
        _this.entryList = homeData.entryList
        _this.headlines = homeData.headlines
        _this.lbGoods = homeData.lbGoods
        _this.benefit = homeData.benefit
        _this.likeGoods = homeData.likeGoods
      }
    })
  },
  components: {
    HomeHeader,
    HomeBanner,
    HomeEntry,
    HomeHeadline,
    HomeRushBuy,
    HomeBenefit,
    HomeLike,
    HomeFooter
  }
}
</script>

<style lang="stylus" scoped>

</style>
