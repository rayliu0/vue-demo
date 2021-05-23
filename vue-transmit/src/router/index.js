/* eslint-disable no-console */
import Vue from 'vue';
import Router from 'vue-router';

// 正常加载
import First from '../views/First';
import Second from '../views/Second';
import Third from '../views/Third';

Vue.use(Router);

const base = `${process.env.BASE_URL}`; // 动态获取二级目录

const router = new Router({
  // mode: 'history', // 路由有两种模式：history、hash，想要不带#号就选history，默认是hash模式
  base,
  routes: [
    {
      path: '/',
      name: '父子组件通信',
      component: First,
    },
    {
      path: '/second',
      name: '兄弟组件通信',
      component: Second,
    },
    {
      path: '/third',
      name: '兄弟组件通信',
      component: Third,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { x: 0, y: 0 };
  },
});

router.beforeEach((to, from, next) => {
  // 做些什么，通常权限控制就在这里做。
  console.log('~~~~~~~~~ :>> ', to, from);
  // 这里必须写next()，否则页面会阻止下一步操作。
  window.scrollTo(0, 0);
  next();
});

router.afterEach(() => {
  setTimeout(() => {
    Promise.highlightAll();
  }, 200);
});


export default router;

