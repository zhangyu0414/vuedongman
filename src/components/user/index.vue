<template>
  <div id="user">
    <v-uHead></v-uHead>
    <div>User {{ $route.params.id }}</div>
    <div>User {{ $route.params.name }}</div>
  </div>
</template>

<script>
  import UserHead from './userHead.vue'
  export default {
    data () {
      return {
      }
    },
    mounted () {
      this.scroller = this.$el
    },
    methods: {
    },
    components: {
      'v-uHead': UserHead
    },
    created () {
      console.log(this.$route.params.id)
    }
  }
</script>

<style lang="less">
  .demo-infinite-container{
    height: 680px;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }
  .demo-carousel{
    img{
      width: 100%;
    }
  }
  .h50{
    height: 3rem;
  }
  #user{
    margin-top:3rem;
  }
</style>
