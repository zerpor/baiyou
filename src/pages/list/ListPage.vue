<template>
  <div class="list-page">
    <h1>{{title}}</h1>
  </div>
</template>

<script>
export default {
  name: 'ListPage',
  data () {
    return {
      title: this.$store.state.homeTitle
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
