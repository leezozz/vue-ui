<template>
  <div>
    <TestInject />
  </div>
</template>

<script>
import {
  computed,
  defineComponent,
  getCurrentInstance,
  provide,
  ref
} from 'vue'
import { useStore } from 'vuex'
import TestInject from '@/modules/TestNewSome/TestInject.vue'

export default defineComponent({
  name: 'Xx',
  components: {
    TestInject
  },
  props: {
    modelValue: {
      type: Number,
      default: 0
    }
  },
  emits: ['updata:modelValue'],
  setup (props) {
  // Vuex store
    const store = useStore()

    // this
    const { proxy } = getCurrentInstance()
    // console.log(ctx)

    const a = ref('123')
    provide('a', a)

    provide('msg', 333)

    const values = ref(123456)

    provide('values', computed(() => props.modelValue))
    provide('newVal', (val) => {
      proxy.$emit('updata:modelValue', val)
    })

    return {
      a,
      values
    }
  }
})
</script>

<style scoped lang="scss">

</style>
