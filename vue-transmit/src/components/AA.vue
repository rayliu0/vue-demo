<template id="a">
  <div>
    <h3>A组件：{{name}}</h3>
    <button @click="send">将数据发送给C组件</button>
  </div>
</template>

<script>
import { EventBus } from '../utils/eventBus';

export default {
  template: '#a',
  data() {
    return {
      name: 'tom',
    };
  },
  methods: {
    send() {
      EventBus.$emit('data-a', this.name);
    },
  },
};
</script>
