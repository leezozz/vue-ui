import test from '@/modules/Test/test.vue'

const routes = [
  {
    path: '/',
    name: 'Test',
    component: test
  },
  {
    path: '/demo',
    name: 'demo',
    component: () => import('@/modules/DemoTest/components/index.vue')
  },
  {
    path: '/btn',
    name: 'Btn',
    component: () => import('@/widgets/Button/button.vue')
  }
]

export default routes
