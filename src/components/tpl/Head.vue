<template>
  <div class="head">
    {{userName}}
  </div>
</template>
<script>
export default {
  name: 'head',
  props: {
    userName: String
  },
  methods: {
  }
}
</script>

<style lang="less">
  .head{
    position:fixed;
    top:0;
    left:0;
    width: 100%;
    height:3rem;
    line-height: 3rem;
    border-bottom:1px solid #f0f0f0;
    background:#fff;
    text-align: center;
  }
</style>
