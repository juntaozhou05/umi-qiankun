import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/pages/index',
      routes: [
        {
          path: '/app1',
          // component: '@/pages/app1/index',
          microApp: 'app1',
        },
      ],
    },
    {
      path: '/app1',
      // component: '@/pages/app1/index',
      microApp: 'app1',
    },
  ],
  qiankun: {
    master: {
      // 注册子应用信息
      apps: [
        {
          name: 'app1', // 唯一 id
          entry: '//localhost:8000', // html entry
        },
      ],
    },
  },
});
