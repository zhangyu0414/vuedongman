<template>
  <div class="demo-refresh-container">
    <mu-refresh-control :refreshing="refreshing" :trigger="trigger" @refresh="refresh"/>
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
</style>
