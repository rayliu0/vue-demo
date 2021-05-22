// event-bus.js
import Vue from 'vue';

// eslint-disable-next-line import/prefer-default-export
export const EventBus = new Vue();


// 实质上EventBus是一个不具备 DOM 的组件，它具有的仅仅只是它实例方法而已，因此它非常的轻便。

// 另外一种方式，可以直接在项目中的 main.js 初始化 EventBus :

// main.js
// Vue.prototype.$EventBus = new Vue()
// 注意，这种方式初始化的EventBus是一个全局的事件总线
