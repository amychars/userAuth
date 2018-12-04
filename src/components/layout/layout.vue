<template>
  <div class="layout">
    <Header></Header>
    <div class="container">
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from '@/components/common/header.vue'
import Footer from '@/components/common/footer.vue'
export default {
  data () {
    return {
    }
  },
  components: {
    Header,
    Footer
  }
}
</script>
<style lang="less" scoped>
.layout{
  .container{
    min-height:calc(100vh - 120px);
    background-color:white;
  }
}
</style>
