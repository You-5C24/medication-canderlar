import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import FrameBody from '@/pages/frame-body/index.vue';
import HomePage from '@/pages/home-page/index.vue';
import Workbench from '@/pages/workbench/index.vue';
import StatisticalForm from '@/pages/statistical-form/index.vue';
import SystemManagement from '@/pages/system-management/index.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: FrameBody,
    children: [
      {
        path: '/',
        name: 'HomePage',
        component: HomePage
      },
      {
        path: '/workbench',
        name: 'Workbench',
        component: Workbench
      },
      {
        path: '/statisticalForm',
        name: 'StatisticalForm',
        component: StatisticalForm
      },
      {
        path: '/systemManagement',
        name: 'SystemManagement',
        component: SystemManagement
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
