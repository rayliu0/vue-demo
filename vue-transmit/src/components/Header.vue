// 子组件
<template>
  <header>
    <h3 class="sub"> 我是子组件</h3>
    <h1 @click="changeTitle">{{title}}</h1>//绑定一个点击事件
  </header>
</template>
<script>
export default {
  name: 'app-header',
  data() {
    return {
      title: 'Vue.js Demo',
    };
  },
  methods: {
    changeTitle() {
      this.$emit('titleChanged', '子向父组件传值');// 自定义事件  传递值“子向父组件传值”
    },
  },
};
</script>
