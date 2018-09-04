<template>
  <div class="home-page">
    <home-header></home-header>
    <home-banner></home-banner>
    <div>a    aaaaaaa     aaaaa</div>
  </div>
</template>

<script>
import HomeHeader from './components/HomeHeader'
import HomeBanner from './components/HomeBanner'
export default {
  name: 'HomePage',
  data () {
    return {
      title: this.$store.state.homeTitle
    }
  },
  components: {
    HomeHeader,
    HomeBanner
  }
}
</script>

<style lang="stylus" scoped>

</style>
