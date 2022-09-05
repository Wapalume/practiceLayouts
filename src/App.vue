!<template>
  <router-view>
  </router-view>
</template>

<script>
export default {
  created(){
    this.$store.dispatch('category/getAllCategory')
  }
}
</script>

<style lang="scss">
@import './src/scss/style.scss'
</style>