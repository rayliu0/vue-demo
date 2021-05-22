<template id="b">
  <div>
    <h3>B组件：{{age}}</h3>
    <button @click="send">将数组发送给C组件</button>
  </div>
</template>

<script>
import { EventBus } from '../utils/eventBus';

export default {
  template: '#b',
  data() {
    return {
      age: 20,
    };
  },
  methods: {
    send() {
      EventBus.$emit('data-b', this.age);
    },
  },
};
</script>
