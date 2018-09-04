<template>
  <div class="cart-page">
    <h1>{{title}}</h1>
  </div>
</template>

<script>
export default {
  name: 'CartPage',
  data () {
    return {
      title: this.$store.state.homeTitle
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
