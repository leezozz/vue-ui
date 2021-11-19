import ModalDialog from 'widgets/ModalDialog'
import myButton from 'widgets/Button'

export default {
  install (Vue) {
    Vue.use(ModalDialog)
    Vue.use(myButton)
  }
}
