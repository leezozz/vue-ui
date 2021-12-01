<template>
  <div name="your name">
    <el-input
      v-model="inputValue"
      type="textarea"
    />
    <el-input
      v-model="inputValue"
      type="text"
    />
    <my-input
      v-model="inputValue"
      name="oneInput"
      placeholder="请输入内容"
      type="textarea"
      :disabled="false"
      :clearable="false"
      :show-password="true"
    />
    {{ inputValue }}
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
    const { proxy } = getCurrentInstance()
    console.log(proxy)

    const visible = ref(true)

    const inputValue = ref('')

    return {
      visible,
      inputValue

    }
  }
})
</script>

<style scoped lang="scss">

</style>
