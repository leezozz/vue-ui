<template>
  <div>
    <my-form-item
      :label-value="'姓名'"
      :label-width="'40px'"
      :item-content-type="'input'"
      :model-value="inputValue"
    />
    <my-form-item
      :model-value="inputNumValue"
      :label-value="'年龄'"
      :label-width="'40px'"
      :item-content-type="'inputNumber'"
    />
  </div>
</template>

<script>
import {
  defineComponent,
  getCurrentInstance,
  reactive,
  ref
} from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'TestFormItem',
  components: {},
  props: {},
  setup () {
  // Vuex store
    const store = useStore()

    const inputValue = ref('')
    const inputNumValue = ref(1)

    // this
    const { proxy } = getCurrentInstance()
    // console.log(proxy)

    return {
      inputValue,
      inputNumValue
    }
  }
})
</script>

<style scoped lang="scss">

</style>
