<template>
  <div class="home">
   {{msg}}
   <button @click="godetail">去往详情页面</button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      msg: 'this is msg'
    }
  },
  methods: {
    godetail () {
      this.$router.push('/login')
    }
  }
}
</script>
<style lang="less" scoped>

</style>
