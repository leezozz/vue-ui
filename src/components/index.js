import Tooltip from '@/components/Tooltip'
import Iconfont from '@/components/IconFont'

import myDialog from '@/components/dialog.vue'
import myButton from '@/components/button.vue'
import myInput from '@/components/input.vue'
import mySwitch from '@/components/switch.vue'
import myRadio from '@/components/radio.vue'
import myRadioGroup from '@/components/radio-group.vue'

const component = {
  install: function (Vue) {
    Vue.component(Tooltip.name, Tooltip)
    Vue.component(Iconfont.name, Iconfont)
    Vue.component(myButton.name, myButton)
    Vue.component(myDialog.name, myDialog)
    Vue.component(myInput.name, myInput)
    Vue.component(mySwitch.name, mySwitch)
    Vue.component(myRadio.name, myRadio)
    Vue.component(myRadioGroup.name, myRadioGroup)
  }
}

export default component
