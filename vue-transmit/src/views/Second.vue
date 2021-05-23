// 父组件
<template>
  <div id="app">
        <h3 class="sub"> 我是父组件</h3>
    <app-header v-on:titleChanged="updateTitle" ></app-header>//与子组件titleChanged自定义事件保持一致  updateTitle($event)接受传递过来的文字
    <h2>{{title}}</h2>
    <h3>子组件向父组件传值（通过事件形式）</h3>
  </div>
</template>
<script>
import Header from '../components/Header';

export default {
  name: 'App',
  data() {
    return {
      title: '传递的是一个值',
    };
  },
  methods: {
    updateTitle(e) { // 声明这个函数
      this.title = e;
    },
  },
  components: {
    'app-header': Header,
  },
};
</script>
