import Tooltip from '@/components/Tooltip'
import Iconfont from '@/components/IconFont'

import myDialog from '@/components/dialog.vue'
import myButton from '@/components/button.vue'

const component = {
  install: function (Vue) {
    Vue.component(Tooltip.name, Tooltip)
    Vue.component(Iconfont.name, Iconfont)
    Vue.component(myButton.name, myButton)
    Vue.component(myDialog.name, myDialog)
  }
}

export default component
