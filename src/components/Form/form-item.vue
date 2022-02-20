<template>
  <div class="pub-form-item">
    <label
      for=""
      class="form-item-label"
      :style="{ width: labelWidth }"
    >{{ labelValue }}</label>
    <div class="form-item-content">
      <component
        :is="contentTypeMap[itemContentType]"
        v-model="modelValue"
      />
    </div>
  </div>
</template>

<script>
import {
  defineComponent,
  getCurrentInstance
} from 'vue'
import { useStore } from 'vuex'
// import ELementInput from
import { ElInput, ElDatePicker, ElInputNumber, ElMessage } from 'element-plus'

export default defineComponent({
  name: 'MyFormItem',
  components: {},
  props: {
    labelValue: {
      type: String,
      default: ''
    },
    labelWidth: {
      type: String,
      default: ''
    },
    itemContentType: {
      type: String,
      default: ''
    },
    // TODO
    // modelValue: {
    //   type: [String, Number],
    //   default: '' || 0
    // }
    modelValue: [String, Number]
  },
  setup () {
  // Vuex store
    const store = useStore()

    // this
    const { proxy } = getCurrentInstance()
    // console.log(ctx)

    const contentTypeMap = {
      input: ElInput,
      inputNumber: ElInputNumber
    }

    return {
      contentTypeMap
    }
  }
})
</script>

<style scoped lang="scss">
.pub-form-item {
  .form-item-label {
    display: inline-block;
  }
  .form-item-content {
    display: inline-block;
  }
}
</style>
