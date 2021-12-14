<template>
  <label
    class="radio-main"
    :class="{'is-disabled': disabled, 'is-checked': model == label}"
    :disabled="disabled"
  >
    <span class="radio-input"></span>
    <input
      v-model="model"
      type="radio"
      class="my-radio-input"
      :class="{'is-disabled': disabled}"
      :value="label"
      :disabled="disabled"
    >

    <span class="radio-label">
      <!-- 这里显示自定义的值 -->
      <slot></slot>
      <!-- 若上面的slot没有传值，这里默认显示label -->
      <template v-if="!$slots.default">{{ 'label' }}</template>
    </span>
  </label>
</template>

<script>
import {
  computed,
  defineComponent,
  getCurrentInstance,
  nextTick,
  watch,
  inject
} from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'MyRadio',
  components: {
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    label: {
      type: [String, Number, Boolean],
      default: ''
    },
    modelValue: {
      type: [String, Number, Boolean],
      default: ''
    }
  },
  emits: ['update:modelValue', 'change'],
  setup (props) {
  // Vuex store
    const store = useStore()

    // this
    const { proxy } = getCurrentInstance()

    const groupModelValue = inject('groupModelValue')
    const changeUpdate = inject('changeUpdate')

    const model = computed(
      {
        get: () => {
          return isGroup() ? groupModelValue.value : props.modelValue
        },
        set: (value) => {
          // 触发父组件的input事件
          isGroup() ? changeUpdate(value) : proxy.$emit('update:modelValue', value)
        }
      }
    )

    // 判断radio是否被radioGroup包裹
    const isGroup = () => {
      // !groupModelValue 将变量groupModelValue改为布尔值，取反
      // !!groupModelValue，相当于变量groupModelValue改为布尔值
      return !!groupModelValue
    }

    return {
      model,
      groupModelValue,
      isGroup
    }
  }
})
</script>

<style scoped lang="scss">
.radio-main {
  height: 40px;
  display: inline-flex;
  align-items: center;
  color: #606266;
  font-weight: 500;
  line-height: 1;
  font-size: 14px;
  margin-right: 30px;
  cursor: pointer;
  .radio-input {
    border: 1px solid #dcdfe6;
    border-radius: 100%;
    width: 14px;
    height: 14px;
    background-color: #fff;
    position: relative;
    &:after {
      width: 4px;
      height: 4px;
      content: "";
      border-radius: 100%;
      background-color: #fff;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%) scale(0);
      transition: transform .15s ease-in;
    }
  }
    .my-radio-input {
      display: none;
      cursor: pointer;
      opacity: 0;
      outline: none;
    }
  .radio-label {
    padding-left: 10px;
  }
}
  // 选中样式
  .is-checked {
    .radio-input {
      border-color: #409eff;
      background-color: #409eff;
      &:after {
        transform: translate(-50%, -50%) scale(1);
      }
    }
    .my-radio-input {
      opacity: 0;

    }
    .radio-label {
      color: #409eff;
    }
  }

// 禁用样式
.is-disabled {
  cursor: not-allowed!important;
  color: #c0c4cc!important;
  .radio-input {
    border: 1px solid#dadbdd ;
    background-color: #ebeff7;
    &:after {
      display: none;
    }
  }
  .my-radio-input {
    // display: none;
  }
  .radio-label {
      color: #c0c4cc!important;
    }
}
</style>
