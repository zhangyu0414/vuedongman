<template>
  <div id="app">
    <router-view></router-view>
    <Back-top :bottom="70"></Back-top>
    <v-foot></v-foot>
  </div>
</template>

<script>
  import Head from './components/Head.vue'
  import Foot from './components/Foot.vue'
  export default {
    components: {
      'v-head': Head,
      'v-foot': Foot
    }
  }
</script>

<style lang="less">
</style>
