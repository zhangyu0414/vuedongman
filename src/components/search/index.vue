<template>
  <div id="search">
    搜索
  </div>
</template>

<script>
  export default {
    data () {
      return {
        list: [{
          image: '../../static/images/6d2bfc72a6128ff499021a0a46fa34ac9a8a0db1.jpg',
          title: 'Breakfast',
          author: 'Myron',
          featured: true
        }, {
          image: '../../static/images/6d2bfc72a6128ff499021a0a46fa34ac9a8a0db1.jpg',
          title: 'Burger',
          author: 'Linyu'
        }, {
          image: '../../static/images/6d2bfc72a6128ff499021a0a46fa34ac9a8a0db1.jpg',
          title: 'Camera',
          author: 'ruolin'
        }, {
          image: '../../static/images/6d2bfc72a6128ff499021a0a46fa34ac9a8a0db1.jpg',
          title: 'Hats',
          author: 'kakali'
        }, {
          image: '../../static/images/6d2bfc72a6128ff499021a0a46fa34ac9a8a0db1.jpg',
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
      refresh () {
        this.refreshing = true
        setTimeout(() => {
          console.log(this.list.length)
          for (var i = 0; i < 5; i++) {
            this.list.push(this.list[i])
          }
          console.log('加载完毕啦')
          console.log(this.list)
          this.refreshing = false
        }, 2000)
      }
    }
  }
</script>

<style lang="less">
  .demo-refresh-container{
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    border: 1px solid #d9d9d9;
    position: relative;
    user-select: none;
  }
  #search{
    margin-top:3rem;
  }
</style>
