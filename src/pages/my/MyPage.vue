<template>
  <div class="my-page">
    <h1>{{title}}</h1>
  </div>
</template>

<script>
export default {
  name: 'MyPage',
  data () {
    return {
      title: this.$store.state.homeTitle
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
