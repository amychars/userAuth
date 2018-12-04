<template>
  <div class="footer">
    {{msg}}
  </div>
</template>
<script>
export default {
  data () {
    return {
      msg: 'this is msg'
    }
  }
}
</script>
<style lang="less" scoped>
.footer{
  height:60px;
  background-color:pink;
  color:white;
  line-height: 60px;
}
</style>
