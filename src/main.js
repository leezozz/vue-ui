import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import Mixin from './mixins'
import Widgets from './widgets'
import GlobalComponents from '@/components'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import '@/assets/fonts/iconfont.css'

const app = createApp(App)

app
  .use(store)
  .use(router)
  .use(ElementPlus)
  .use(GlobalComponents)
  .use(Mixin)
  .use(Widgets)
  .mount('#app')
