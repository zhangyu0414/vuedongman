<template>
  <div id="main">
    <mu-tabs :value="activeTab" @change="handleTabChange">
      <mu-tab value="tab1" title="首页"/>
      <mu-tab value="tab2" title="直播"/>
      <mu-tab value="tab3" title="推荐"/>
    </mu-tabs>
    <div v-if="activeTab === 'tab1'">
      <Carousel autoplay>
        <Carousel-item v-for="value,index in runList">
          <div class="demo-carousel">
              <img :src="value.image" @click="enMovie"/>
          </div>
        </Carousel-item>
      </Carousel>
      <mu-grid-list class="gridlist-demo">
        <mu-sub-header>推荐展示</mu-sub-header>
        <mu-grid-tile v-for="tile,index in list" :key="'tile' + index" titlePosition="bottom" actionPosition="left" :rows="tile.featured ? 2 : 0.8" :cols="tile.featured ? 2 : 1">
          <img :src="tile.image" @click="enMovie"/>
          <span slot="title">{{tile.title}}</span>
          <span slot="subTitle">by <b>{{tile.author}}</b></span>
          <mu-icon-button icon="star_border" slot="action"/>
        </mu-grid-tile>
      </mu-grid-list>
      <mu-grid-list class="gridlist-demo">
        <mu-sub-header>正在直播</mu-sub-header>
        <mu-grid-tile v-for="tile,index in reList" :key="'tile' + index" titlePosition="bottom" actionPosition="left" :rows="tile.featured ? 2 : 0.8" :cols="tile.featured ? 2 : 1">
          <img :src="tile.image" @click="enMovie"/>
          <span slot="title">{{tile.title}}</span>
          <span slot="subTitle">by <b>{{tile.author}}</b></span>
          <mu-icon-button icon="star_border" slot="action"/>
        </mu-grid-tile>
      </mu-grid-list>
      <mu-grid-list class="gridlist-demo">
        <mu-sub-header>番剧更新</mu-sub-header>
        <mu-grid-tile v-for="tile,index in anList" :key="'tile' + index" titlePosition="bottom" actionPosition="left" :rows="tile.featured ? 2 : 1.6" :cols="tile.featured ? 2 : 1">
          <img :src="tile.image" @click="enMovie"/>
          <span slot="title">{{tile.title}}</span>
          <span slot="subTitle">by <b>{{tile.author}}</b></span>
          <mu-icon-button icon="star_border" slot="action"/>
        </mu-grid-tile>
      </mu-grid-list>
    </div>
    <div v-if="activeTab === 'tab2'">
      <Carousel autoplay>
        <Carousel-item v-for="value,index in directList">
          <div class="demo-carousel">
            <img :src="value.image" @click="enMovie"/>
          </div>
        </Carousel-item>
      </Carousel>
      <mu-grid-list class="gridlist-demo">
        <mu-sub-header>绘画专区</mu-sub-header>
        <mu-grid-tile v-for="tile,index in list" :key="'tile' + index" titlePosition="bottom" actionPosition="left" :rows="tile.featured ? 2 : 0.8" :cols="tile.featured ? 2 : 1">
          <img :src="tile.image"/>
          <span slot="title">{{tile.title}}</span>
          <span slot="subTitle">by <b>{{tile.author}}</b></span>
          <mu-icon-button icon="star_border" slot="action"/>
        </mu-grid-tile>
      </mu-grid-list>
      <mu-grid-list class="gridlist-demo">
        <mu-sub-header>生活娱乐</mu-sub-header>
        <mu-grid-tile v-for="tile,index in reList" :key="'tile' + index" titlePosition="bottom" actionPosition="left" :rows="tile.featured ? 2 : 0.8" :cols="tile.featured ? 2 : 1">
          <img :src="tile.image" @click="enMovie"/>
          <span slot="title">{{tile.title}}</span>
          <span slot="subTitle">by <b>{{tile.author}}</b></span>
          <mu-icon-button icon="star_border" slot="action"/>
        </mu-grid-tile>
      </mu-grid-list>
      <mu-grid-list class="gridlist-demo">
        <mu-sub-header>唱见舞见</mu-sub-header>
        <mu-grid-tile v-for="tile,index in reList" :key="'tile' + index" titlePosition="bottom" actionPosition="left" :rows="tile.featured ? 2 : 0.8" :cols="tile.featured ? 2 : 1">
          <img :src="tile.image" @click="enMovie"/>
          <span slot="title">{{tile.title}}</span>
          <span slot="subTitle">by <b>{{tile.author}}</b></span>
          <mu-icon-button icon="star_border" slot="action"/>
        </mu-grid-tile>
      </mu-grid-list>
      <mu-grid-list class="gridlist-demo">
        <mu-sub-header>手游直播</mu-sub-header>
        <mu-grid-tile v-for="tile,index in reList" :key="'tile' + index" titlePosition="bottom" actionPosition="left" :rows="tile.featured ? 2 : 0.8" :cols="tile.featured ? 2 : 1">
          <img :src="tile.image" @click="enMovie"/>
          <span slot="title">{{tile.title}}</span>
          <span slot="subTitle">by <b>{{tile.author}}</b></span>
          <mu-icon-button icon="star_border" slot="action"/>
        </mu-grid-tile>
      </mu-grid-list>
      <mu-grid-list class="gridlist-demo">
        <mu-sub-header>单机联机</mu-sub-header>
        <mu-grid-tile v-for="tile,index in reList" :key="'tile' + index" titlePosition="bottom" actionPosition="left" :rows="tile.featured ? 2 : 0.8" :cols="tile.featured ? 2 : 1">
          <img :src="tile.image" @click="enMovie"/>
          <span slot="title">{{tile.title}}</span>
          <span slot="subTitle">by <b>{{tile.author}}</b></span>
          <mu-icon-button icon="star_border" slot="action"/>
        </mu-grid-tile>
      </mu-grid-list>
      <mu-grid-list class="gridlist-demo">
        <mu-sub-header>网络游戏</mu-sub-header>
        <mu-grid-tile v-for="tile,index in reList" :key="'tile' + index" titlePosition="bottom" actionPosition="left" :rows="tile.featured ? 2 : 0.8" :cols="tile.featured ? 2 : 1">
          <img :src="tile.image" @click="enMovie"/>
          <span slot="title">{{tile.title}}</span>
          <span slot="subTitle">by <b>{{tile.author}}</b></span>
          <mu-icon-button icon="star_border" slot="action"/>
        </mu-grid-tile>
      </mu-grid-list>
    </div>
    <div v-if="activeTab === 'tab3'">
      <Carousel autoplay>
        <Carousel-item v-for="value,index in runList">
          <div class="demo-carousel">
            <mu-grid-list class="gridlist-demo">
              <mu-grid-tile :key="index" :rows='0.8' :cols='2'>
                <img :src="value.image" @click="enMovie"/>
                <span slot="title">{{value.title}}</span>
                <span slot="subTitle">by <b>{{value.author}}</b></span>
                <mu-icon-button icon="star_border" slot="action"/>
              </mu-grid-tile>
            </mu-grid-list>
          </div>
        </Carousel-item>
      </Carousel>
      <div class="gridlist-demo-container">
        <mu-grid-list class="gridlist-demo">
          <mu-sub-header>推荐展示</mu-sub-header>
          <mu-grid-tile v-for="tile,index in list" :key="'tile' + index" titlePosition="bottom" actionPosition="left" :rows="tile.featured ? 2 : 0.8" :cols="tile.featured ? 2 : 1">
            <img :src="tile.image" @click="enMovie"/>
            <span slot="title">{{tile.title}}</span>
            <span slot="subTitle">by <b>{{tile.author}}</b></span>
            <mu-icon-button icon="star_border" slot="action"/>
          </mu-grid-tile>
        </mu-grid-list>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        activeTab: 'tab1',
        directList: [{
          image: '../../static/images/992c42bf5d3792f853c5a4af4d1a434830492e14.jpg',
          title: 'Breakfast',
          author: 'Myron'
        }, {
          image: '../../static/images/f5478f0c90316c91b98165e5d376a43ad66b09c4.jpg',
          title: 'Burger',
          author: 'Linyu'
        }, {
          image: '../../static/images/73496ef720eb67ac2e62ca41e53c021ca9035356.jpg',
          title: 'Burger',
          author: 'Linyu'
        }, {
          image: '../../static/images/0a92e19767669489265e9a4f7dfba4eccf946f4a.jpg',
          title: 'Burger',
          author: 'Linyu'
        }],
        runList: [{
          image: '../../static/images/319a6c47cf4dcaf55974a04d96a73f89e0029f0b.jpg',
          title: 'Breakfast',
          author: 'Myron'
        }, {
          image: '../../static/images/4829f303356b051e6e2493986e74944e9829002c.jpg',
          title: 'Burger',
          author: 'Linyu'
        }, {
          image: '../../static/images/a254e4e67b88cd0d3e20835bc1a6ff21d6fcbbb4.jpg',
          title: 'Burger',
          author: 'Linyu'
        }],
        list: [{
          image: '../../static/images/6d2bfc72a6128ff499021a0a46fa34ac9a8a0db1.jpg',
          title: 'Breakfast',
          author: 'Myron'
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
        }, {
          image: '../../static/images/6d2bfc72a6128ff499021a0a46fa34ac9a8a0db1.jpg',
          title: 'Breakfast',
          author: 'Myron'
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
        reList: [{
          image: '../../static/images/1eda317284d13f877ff13d90d3f4c40fa45f5417.jpg_320x200.jpg',
          title: 'Hats',
          author: 'kakali'
        }, {
          image: '../../static/images/2c72fb5cbb4f21b504b5793f740fc78287078668.jpg_320x200.jpg',
          title: 'Hats',
          author: 'kakali'
        }, {
          image: '../../static/images/3a9f9d026d082939d2eae98b0e1769b96ac369e1.jpg',
          title: 'Hats',
          author: 'kakali'
        }, {
          image: '../../static/images/471ec31c52884d8b8bad65f5b9db01686137f7fd.jpg',
          title: 'Hats',
          author: 'kakali'
        }],
        anList: [{
          image: '../../static/images/3d8035c1cbc86118ff18a91fdd879dba0dbf93e1.jpg',
          title: 'Hats',
          author: 'kakali'
        }, {
          image: '../../static/images/5ce66f68d54052e3a305524b9b06a76977e974fc.jpg',
          title: 'Hats',
          author: 'kakali'
        }, {
          image: '../../static/images/a7a97abdf146427289d3c752e17d0c25e1c32f2b.jpg',
          title: 'Hats',
          author: 'kakali'
        }, {
          image: '../../static/images/c503b9213eb87c453e864aaeb4d14ab2dd78893a.jpg',
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
        console.log(this.list.length)
        for (var i = 0; i < 5; i++) {
          this.list.push(this.list[i])
        }
        this.refreshing = false
      },
      enMovie () {
        this.$router.push({path: '/movie'})
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
  .mu-list{
    padding: 0 !important;
  }
  .ivu-carousel{
    margin-bottom: 0.3rem;
  }
  .mu-bottom-item-active .mu-bottom-item-text{
    color:#f48fb1 !important;
  }
  .mu-bottom-item-active .mu-bottom-item-icon{
    color:#f48fb1 !important;
  }
  .mu-tab-active{
    color:#f48fb1 !important;
  }
</style>
