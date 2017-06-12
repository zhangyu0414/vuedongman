<template>
  <div id="classify">
    <Row class-name="classify-list">
      <Col span="6">
        <img src="../../../static/images/channel_life@2x.png" alt=""/><br/><span>生活</span>
      </Col>
      <Col span="6">
        <img src="../../../static/images/channel_life@2x.png" alt=""/><br/><span>生活</span>
      </Col>
      <Col span="6">
        <img src="../../../static/images/channel_life@2x.png" alt=""/><br/><span>生活</span>
      </Col>
      <Col span="6">
        <img src="../../../static/images/channel_life@2x.png" alt=""/><br/><span>生活</span>
      </Col>
      <Col span="6">
        <img src="../../../static/images/channel_life@2x.png" alt=""/><br/><span>生活</span>
      </Col>
      <Col span="6">
        <img src="../../../static/images/channel_life@2x.png" alt=""/><br/><span>生活</span>
      </Col>
      <Col span="6">
        <img src="../../../static/images/channel_life@2x.png" alt=""/><br/><span>生活</span>
      </Col>
      <Col span="6">
        <img src="../../../static/images/channel_life@2x.png" alt=""/><br/><span>生活</span>
      </Col>
      <Col span="6">
        <img src="../../../static/images/channel_life@2x.png" alt=""/><br/><span>生活</span>
      </Col>
      <Col span="6">
        <img src="../../../static/images/channel_life@2x.png" alt=""/><br/><span>生活</span>
      </Col>
      <Col span="6">
        <img src="../../../static/images/channel_life@2x.png" alt=""/><br/><span>生活</span>
      </Col>
      <Col span="6">
        <img src="../../../static/images/channel_life@2x.png" alt=""/><br/><span>生活</span>
      </Col>
      <Col span="6">
        <img src="../../../static/images/channel_life@2x.png" alt=""/><br/><span>生活</span>
      </Col>
      <Col span="6">
        <img src="../../../static/images/channel_life@2x.png" alt=""/><br/><span>生活</span>
      </Col>
      <Col span="6">
        <img src="../../../static/images/channel_life@2x.png" alt=""/><br/><span>生活</span>
      </Col>
      <Col span="6">
        <img src="../../../static/images/channel_life@2x.png" alt=""/><br/><span>生活</span>
      </Col>
    </Row>
    <router-link to="/classify/detail">详情</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
  import '../tpl/Head.vue'
  export default {
    data () {
      return {
        headMessage: '你好'
      }
    },
    methods: {
      url: function () {
      }
    }
  }
</script>
<style lang="less">
  #classify{
    margin-top:3rem;
  }
  .classify-list{
    text-align: center;
    .ivu-col{
      padding-top:0.7rem;
      padding-bottom:0.7rem;
    }
    img{
      width: 50%;
    }
    span{
      font-size:0.8rem;
    }
  }
</style>
