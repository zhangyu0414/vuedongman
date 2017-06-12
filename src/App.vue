<template>
  <div id="app">
    <v-head :userName="userName"></v-head>
    <router-view></router-view>
    <Back-top :bottom="70"></Back-top>
    <v-foot @fontMame="detailName"></v-foot>
  </div>
</template>
<script>
  import Head from './components/tpl/Head.vue'
  import Foot from './components/tpl/Foot.vue'
  export default {
    components: {
      'v-head': Head,
      'v-foot': Foot
    },
    data () {
      return {
        userName: '首页'
      }
    },
    methods: {
      detailName (str) {
        this.userName = str
      }
    }
  }
</script>

<style lang="less">
  .mu-tabs{
    background-color: #fff !important;
    color: #424242 !important;
    .mu-tab-link{
      color: hsla(0, 2%, 13%, 0.7);
    }
  }
</style>
