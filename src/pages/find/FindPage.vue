<template>
  <div class="find-page">
    <h1>{{title}}</h1>
  </div>
</template>

<script>
export default {
  name: 'FindPage',
  data () {
    return {
      title: this.$store.state.homeTitle
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
