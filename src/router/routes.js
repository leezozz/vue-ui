// import Home from '../views/Home.vue'

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/demo',
    name: 'demo',
    component: () => import('@/modules/DemoTest/components/index.vue')
  }
]

export default routes
