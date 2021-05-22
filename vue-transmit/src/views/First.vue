//App.vue父组件
<template>
  <div id="app">
    <div class="parent"> 我是父组件</div>
    <users v-bind:users="users"></users>//前者自定义名称便于子组件调用，后者要传递数据名
  </div>
</template>
<script>
import Users from '../components/Users';

export default {
  name: 'App',
  data() {
    return {
      users: ['Henry', 'Bucky', 'Emily'],
    };
  },
  components: {
    users: Users,
  },
};

</script>
<style scoped>
 .parent {
   background: lightseagreen;
   width: 100%;
   height: 30px;
 }
</style>
