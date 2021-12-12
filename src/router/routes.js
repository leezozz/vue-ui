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
  // input
  {
    path: '/input',
    name: 'Input',
    component: () => import('@/modules/Test/testInput.vue')
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
  // teleport
  {
    path: '/teleport',
    name: 'TestTeleport',
    component: () => import('@/modules/Test/testTeleport.vue')
  },
  {
    path: '/demo',
    name: 'demo',
    component: () => import('@/modules/DemoTest/components/index.vue')
  },
  // v-model
  {
    path: '/tests',
    name: 'Tests',
    component: () => import('@/modules/TestNewSome/Test2.x.vue')
  },
  // switch
  {
    path: '/switch',
    name: 'TestSwitch',
    component: () => import('@/modules/Test/TestSwitch.vue')
  },
  // radio
  {
    path: '/radio',
    name: 'TestRadio',
    component: () => import('@/modules/Test/TestRadio.vue')
  }

]

export default routes
