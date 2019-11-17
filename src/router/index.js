import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('@/views/Index')
    },
    {
      path: '/transport/flow',
      name: 'TransportFlow',
      meta: { title: '集装箱全流程' },
      component: () => import('@/views/Transport/flow')
    },
    {
      path: '/shopping/warehouse',
      name: 'ShoppingWareHouse',
      meta: { title: '跨境电商-仓库数据' },
      component: () => import('@/views/Elecshopping/warehouse')
    },
    {
      path: '/container/identify',
      name: 'ContainerIdentify',
      meta: { title: '集装箱识别' },
      component: () => import('@/views/Container/identify')
    },
    {
      path: '/cert/index',
      name: 'CertIndex',
      meta: { title: '证书识别' },
      component: () => import('@/views/cert')
    },
    {
      path: '/history/con',
      name: 'HistoryControl',
      meta: { title: '指挥协调' },
      component: () => import('@/views/history/control')
    },
    {
      path: '/history/warning',
      name: 'HistoryWarning',
      meta: { title: '边界预警' },
      component: () => import('@/views/history/warning')
    }
  ]
});
