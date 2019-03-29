<template>
  <div id="app">
       <coupon></coupon>
  </div>
</template>

<script>
import coupon from './pages/coupon.vue'; // 引入模板
export default {
  name: 'app',
  components: {
    coupon
  },
  data () {
    return {
     
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
