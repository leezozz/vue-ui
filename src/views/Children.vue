<template>
  <div>
    <h3>{{ msg }}</h3>
    <button @click="btnClick">
      按钮
    </button>
  </div>
</template>

<script>
import {
  defineComponent,
  getCurrentInstance
} from 'vue'

export default defineComponent({
  name: 'Children',
  components: {},
  props: {
    msg: {
      type: String,
      default: ''
    }
  },
  emits: ['getData'],
  setup (props, { emit }) {
    const { proxy } = getCurrentInstance()
    console.log('proxy', proxy)
    const btnClick = () => {
      // proxy.$emit('getData', '7777777')
      emit('getData', '7777777')
    }
    // proxy.hello()
    return {
      btnClick
    }
  }
})
</script>

<style scoped lang="scss">

</style>
