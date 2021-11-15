import Tooltip from '@/components/Tooltip'
import Iconfont from '@/components/IconFont'

const component = {
  install: function (Vue) {
    Vue.component(Tooltip.name, Tooltip)
    Vue.component(Iconfont.name, Iconfont)
  }
}

export default component
