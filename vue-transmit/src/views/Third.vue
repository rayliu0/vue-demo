<template>
 <div id="itany">
    <h3></h3>
    <my-a></my-a>
    <my-b></my-b>
    <my-c></my-c>
  </div>
</template>

<script>
import AA from '../components/AA';
import BB from '../components/BB';
import CC from '../components/CC';

export default {
  data() {
    return {
      message: '分别是A、B、C组件，C组件如何获取A或者B组件的数据',
    };
  },
  components: {
    'my-a': AA,
    'my-b': BB,
    'my-c': CC,
  },
};
</script>
