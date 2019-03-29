<template>
  <div id="app">
    <router-view></router-view>
    <order-comment></order-comment>
  </div>
</template>

<script>
import orderComment from './pages/comment/orderComment.vue'; // 引入模板
// import dataList from './payMethodList'; // 引入数据
export default {
  name: 'app',
  components: {
    orderComment
  },
  data () {
    return {
      // payMethodList: dataList
    }
  },
  // methods:{
  //   payWayId:function(id){   // 组件返回的id 
  //     console.log(id);
  //   },
  // }
}
</script>

<style lang="scss">

</style>
