<template>
  <div>
    <my-button @click="isShow = !isShow">
      按钮
    </my-button>
    <transition name="fade">
      <p v-show="isShow">
        hello
      </p>
    </transition>
  </div>
</template>

<script>
import {
  defineComponent,
  getCurrentInstance,
  ref
} from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'Xx',
  components: {},
  props: {},
  setup () {
  // Vuex store
    const store = useStore()

    // this
    // const { ctx } = getCurrentInstance()
    // console.log(ctx)

    const isShow = ref(true)

    return {
      isShow
    }
  }
})
</script>

<style scoped lang="scss">
// 定义进入过渡的开始状态
// .fade-enter-from {
//   opacity: 0;
// }
// // 定义进入过渡生效时的状态
// .fade-enter-active {
//   transition: all .5s;
// }
// // 定义进入过渡的结束状态
// .fade-enter-to {
//   opacity: 1;
// }
// .fade-leave-from {
//   opacity: 1;
// }
// .fade-leave-active {
//   transition: all .5s;
// }
// .fade-leave-to {
//   opacity: 0;
// }

.fade-enter-active {
  animation: run .5s;
}
.fade-leave-active {
  animation: run .5s reverse;
}
// 通过animation添加动画
@keyframes run {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
