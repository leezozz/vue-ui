import { createStore } from 'vuex'
import plugins from 'store/plugins'

import DemoTestModule from '@/modules/DemoTest/store/index'

// 这里导入每个模块的store.js
const store = createStore({
  modules: {
    DemoTest: DemoTestModule
  },
  plugins // 是个数组
})
export default store
