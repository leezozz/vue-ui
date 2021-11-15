import router from 'router'
import store from '@/store'
import Cookie from 'js-cookie'
import { allowlist } from '@/router/auth-list'

// 路由守卫
router.beforeEach(async (to, form, next) => {
  console.log('store', store)
  console.log('Cookie', Cookie)
  console.log('allowlist', allowlist)
})
