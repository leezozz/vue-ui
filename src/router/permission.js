// 路由守卫
import router from 'router'
import store from '@/store'
import Cookie from 'js-cookie'
import { allowlist } from '@/router/auth-list'

router.beforeEach(async (to, form, next) => {
  console.log('store', store)
  console.log('Cookie', Cookie)
  console.log('allowlist', allowlist)
})
