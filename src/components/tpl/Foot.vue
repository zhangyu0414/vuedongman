<template>
 <div id="foot">
   <mu-paper>
     <mu-bottom-nav :value="bottomNav" @change="handleChange">
       <mu-bottom-nav-item href="#/Main" value="首页" title="首页" icon="home"/>
       <mu-bottom-nav-item href="#/Classify" value="分类" title="分类" icon="list"/>
       <mu-bottom-nav-item href="#/ShopCart" value="购物车" title="购物车" icon="assignment"/>
       <mu-bottom-nav-item href="#/search" value="搜索" title="搜索" icon="search"/>
       <mu-bottom-nav-item href="#/User" value="用户" title="用户" icon="person"/>
     </mu-bottom-nav>
   </mu-paper>
 </div>
</template>
<script>
  export default {
    data () {
      return {
        bottomNav: 'Main'
      }
    },
    methods: {
      handleChange (val) {
        this.bottomNav = val
        this.$emit('fontMame', val)
      }
    }
  }
</script>
<style lang="less">
  #foot{
    background:#fff;
    border-top:1px solid #f0f0f0;
    position:fixed;
    bottom:0;
    left:0;
    width:100%;
    height:4.9rem;
    z-index:2000;
    .item{
      font-size: .9rem;
      width:18%;
      display: inline-block;
      line-height: 3rem;
    }
  }
</style>
