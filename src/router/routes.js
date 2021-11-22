import test from '@/modules/Test/test.vue'

const routes = [
  // button
  {
    path: '/',
    name: 'Test',
    component: test
  },
  // dialog
  {
    path: '/dialog',
    name: 'Dialog',
    component: () => import('@/modules/Test/testDialog.vue')
  },
  // sync
  {
    path: '/testSync',
    name: 'TestSync',
    component: () => import('@/modules/Test/testSync.vue')
  },
  // vue-transition
  {
    path: '/testTransition',
    name: 'TestTransition',
    component: () => import('@/modules/Test/testVueTransition.vue')
  },
  // .stop 修饰符
  {
    path: '/stop',
    name: 'TestStop',
    component: () => import('@/modules/Test/testStop.vue')
  },
  {
    path: '/demo',
    name: 'demo',
    component: () => import('@/modules/DemoTest/components/index.vue')
  }

]

export default routes
