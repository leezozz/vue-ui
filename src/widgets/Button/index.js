import myButton from '@/widgets/Button/button.vue'

export default {
  // app为实例，options是配置
  install: (app) => {
    // 第一个参数是自己定义的将要使用的公用组件名，第二个值是上面传入的组件
    app.component('MyButton', myButton)
  }
}
