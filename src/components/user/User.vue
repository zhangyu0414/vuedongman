<template>
  <div class="demo-infinite-container">
    <mu-list>
      <template>
        <div class="gridlist-demo-container">
          <mu-grid-list class="gridlist-demo">
            <mu-sub-header>图片展示</mu-sub-header>
            <mu-grid-tile v-for="tile,index in list" :key="'tile' + index" titlePosition="top" actionPosition="left" :rows="tile.featured ? 2 : 1" :cols="tile.featured ? 2 : 1">
              <img :src="tile.image"/>
              <span slot="title">{{tile.title}}</span>
              <span slot="subTitle">by <b>{{tile.author}}</b></span>
              <mu-icon-button icon="star_border" slot="action"/>
            </mu-grid-tile>
          </mu-grid-list>
        </div>
      </template>
    </mu-list>
    <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore"/>
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
        loading: false,
        scroller: null
      }
    },
    mounted () {
      this.scroller = this.$el
    },
    methods: {
      loadMore () {
        this.loading = true
        this.loadingText = '正在开心中'
        console.log(this.list.length)
        for (var i = 0; i < 5; i++) {
          this.list.push(this.list[i])
        }
        console.log('加载完毕啦')
        console.log(this.list)
        this.loading = false
      }
    }
  }
</script>

<style lang="css">
  .demo-infinite-container{
    height: 680px;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }
</style>
