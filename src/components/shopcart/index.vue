<template>
  <div id="classify">
    购物车
  </div>
</template>

<script>
  export default {
    data () {
      return {
        activeTab: 'tab1',
        list: [{
          image: '../../static/images/6d2bfc72a6128ff499021a0a46fa34ac9a8a0db1.jpg',
          title: 'Breakfast',
          author: 'Myron',
          featured: true
        }, {
          image: '../../static/images/51f7ed9bd51e6ebc1e3783939c0e73f3cca3c100.jpg',
          title: 'Burger',
          author: 'Linyu'
        }, {
          image: '../../static/images/048eec7167ff893156fc73b8d496cce58617f023.jpg',
          title: 'Camera',
          author: 'ruolin'
        }, {
          image: '../../static/images/72628db670ec5d173843e7ea47bb88b0cb08d1ab.jpg',
          title: 'Hats',
          author: 'kakali'
        }, {
          image: '../../static/images/327005dc87e9c8fbeec68fd5170c2cecfd16a89d.jpg',
          title: 'Hats',
          author: 'kakali'
        }],
        num: 10,
        refreshing: false,
        trigger: null
      }
    },
    mounted () {
      this.trigger = this.$el
    },
    methods: {
      handleTabChange (val) {
        this.activeTab = val
      },
      refresh () {
        this.refreshing = true
        setTimeout(() => {
          var lt = this.list.length
          console.log(this.list.length)
          for (var i = 0; i < lt; i++) {
            this.list.push(this.list[i])
          }
          this.refreshing = false
        }, 2000)
      }
    }
  }
</script>
<style lang="less">
  #main{
    margin-bottom:4rem;
  }
  .demo-refresh-container{
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    position: relative;
    user-select: none;
  }
</style>
