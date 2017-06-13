<template>
  <div id="main">
    <mu-tabs :value="activeTab" @change="handleTabChange">
      <mu-tab value="tab1" title="推荐"/>
      <mu-tab value="tab2" title="直播"/>
      <mu-tab value="tab3" title="追番"/>
    </mu-tabs>
    <div v-if="activeTab === 'tab1'">
      <div class="demo-refresh-container">
        <mu-refresh-control :refreshing="refreshing" :trigger="trigger" @refresh="refresh"/>
        <mu-list>
          <template>
            <div class="gridlist-demo-container">
              <mu-grid-list class="gridlist-demo">
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
    </div>
    <div v-if="activeTab === 'tab2'">
      <h2>Tab Two</h2>
      <p>
        这是第二个 tab
      </p>
    </div>
    <div v-if="activeTab === 'tab3'">
      <h2>Tab Three</h2>
      <p>
        这是第三个 tab
      </p>
    </div>
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
