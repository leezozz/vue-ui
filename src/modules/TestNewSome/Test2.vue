<template>
  <div>
    <input
      type="text"
      :value="modelValue"
      @input="handInput"
    >
  </div>
</template>

<script>
import {
  defineComponent,
  getCurrentInstance
} from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'Xx',
  components: {},
  model: {
    prop: 'title',
    event: 'change'
  },
  props: {
    modelValue: {
      type: String,
      default: ''
    }
    // title: {
    //   type: String,
    //   default: ''
    // }
  },
  emits: ['update:modelValue'],
  setup () {
  // Vuex store
    const store = useStore()

    // this
    const { proxy } = getCurrentInstance()
    console.log(proxy)

    // const changePageTitle = (title) => {
    //   proxy.$emit('update:modelValue', title)
    // }

    const handInput = (e) => {
      proxy.$emit('update:modelValue', e.target.value)
    }

    return {
      // changePageTitle,
      handInput
    }
  }
})
</script>

<style scoped lang="scss">

</style>
