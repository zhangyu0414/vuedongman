<template>
  <div id="app">
<<<<<<< HEAD
    <v-head :userName="userName"></v-head>
    <router-view></router-view>
    <Back-top :bottom="70"></Back-top>
    <v-foot @fontMame="detailName"></v-foot>
  </div>
</template>
<script>
  import Head from './components/tpl/Head.vue'
  import Foot from './components/tpl/Foot.vue'
=======
    <router-view></router-view>
    <Back-top :bottom="70"></Back-top>
    <v-foot></v-foot>
  </div>
</template>

<script>
  import Head from './components/Head.vue'
  import Foot from './components/Foot.vue'
>>>>>>> e3687170a493d47ac81e8ef199432a72b2a7847d
  export default {
    components: {
      'v-head': Head,
      'v-foot': Foot
<<<<<<< HEAD
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
=======
>>>>>>> e3687170a493d47ac81e8ef199432a72b2a7847d
    }
  }
</script>

<style lang="less">
<<<<<<< HEAD
  .mu-tabs{
    background-color: #fff !important;
    color: #424242 !important;
    .mu-tab-link{
      color: hsla(0, 2%, 13%, 0.7);
    }
  }
=======
>>>>>>> e3687170a493d47ac81e8ef199432a72b2a7847d
</style>
