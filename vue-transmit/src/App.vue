<template>
 <div id="app">
    <header class="header">
      <nav class="route-style">
        <router-link to="/first">父子通信</router-link>
        <router-link to="/second">子传父通信</router-link>
         <router-link to="/third">兄弟组件通信</router-link>
      </nav>
    </header>
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
