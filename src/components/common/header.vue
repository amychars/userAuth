<template>
  <div class="header">
    {{message}}
  </div>
</template>
<script>
export default {
  data () {
    return {
      message: 'this is header'
    }
  }
}
</script>
<style lang="less" scoped>
.header{
  height:60px;
  background-color:pink;
  color:white;
  line-height: 60px;
}
</style>
