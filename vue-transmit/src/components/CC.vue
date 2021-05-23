<template id="c">
  <div>
    <h3>C组件：{{name}}，{{age}}</h3>
  </div>
</template>

<script>
import { EventBus } from '../utils/eventBus';

export default {
  template: '#c',
  data() {
    return {
      name: '',
      age: '',
    };
  },
  mounted() { // 在模板编译完成后执行
    EventBus.$on('data-a', (name) => {
      this.name = name;// 箭头函数内部不会产生新的this，这边如果不用=>,this指代Event
    });
    EventBus.$on('data-b', (age) => {
      this.age = age;
    });
  },
};
</script>
