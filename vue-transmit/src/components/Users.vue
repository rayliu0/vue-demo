//users子组件
<template>
  <div class="hello">
     <div class="sub"> 我是子组件</div>
    <ul>
      <li v-for="(user, index) in users" :key="index">{{user}}</li>//遍历传递过来的值，然后呈现到页面
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  props: {
    users: { // 这个就是父组件中子标签自定义名字
      type: Array,
      required: true,
    },
  },
};
</script>
<style scoped>
 .sub {
   background: skyblue;
   width: 100%;
   height: 30px;
 }
</style>
