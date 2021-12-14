<template>
  <div class="radio-group-main">
    <slot></slot>
  </div>
</template>

<script>
import {
  computed,
  defineComponent,
  getCurrentInstance,
  provide,
  ref,
  toRef
} from 'vue'
import { useStore } from 'vuex'
// import radio from '@/components/radio.vue'

export default defineComponent({
  name: 'MyRadioGroup',
  components: {
    // radio
  },
  props: {
    modelValue: {
      type: [String, Number, Boolean],
      default: ''
    }
  },
  emits: ['update:modelValue'],
  setup (props) {
  // Vuex store
    const store = useStore()

    // this
    const { proxy } = getCurrentInstance()
    // console.log(ctx)

    console.log('321', props.modelValue)

    // 这里得是 computed 计算属性，实时或得更改的值
    provide('groupModelValue', computed(() => props.modelValue))
    provide('changeUpdate', (val) => {
      proxy.$emit('update:modelValue', val)
    })

    return {

    }
  }
})
</script>

<style scoped lang="scss">
.radio-group-main{

}
</style>
