<template>
  <div
    class="my-switch"
    :class="{'is-checked': modelValue, 'is-disabled': disabled}"
    :disabled="disabled"
    @click="handleClick"
  >
    <div>{{ name }}</div>
    <input
      :value="modelValue"
      type="checkbox"
      class="switch_input"
      :name="name"
    >
    <span
      ref="switchRef"
      class="switch__core"
    >
      <div
        ref="switchActionRef"
        class="switch__action"
      ></div>
    </span>
  </div>
</template>

<script>
import {
  defineComponent,
  getCurrentInstance,
  ref,
  toRefs,
  toRef,
  watch,
  nextTick,
  onMounted
} from 'vue'
import { useStore } from 'vuex'

const useSwitch = (stroe, proxy, props) => {
  const switchRef = ref('')
  const switchActionRef = ref('')

  const handleClick = () => {
    proxy.$emit('update:modelValue', !props.modelValue)
  }

  const handleSwitchStyleColor = (props) => {
    if (props.activeColor || props.inactiveColor) {
      const finallColor = props.modelValue ? props.activeColor : props.inactiveColor
      proxy.$refs.switchRef.style.borderColor = finallColor
      proxy.$refs.switchRef.style.backgroundColor = finallColor
    }
  }

  // const handSwitchActionTransform = () => {
  //   nextTick(() => {
  //     proxy.$refs.switchActionRef.style.transform = 'translateX(40px)'
  //   })
  // }

  // 刚进入页面时，判断是否需要改变颜色
  onMounted(() => {
    nextTick(() => {
      handleSwitchStyleColor(props)
    })
  })
  // 当modelValue改变时，及时改变switch颜色
  watch(
    () => props.modelValue,
    () => nextTick(() =>
      handleSwitchStyleColor(props)
    ),
    {
      deep: true,
      // 刷新页面时
      immediate: true
    }
  )

  return {
    handleClick,
    switchRef,
    switchActionRef
  }
}

export default defineComponent({
  name: 'MySwitch',
  components: {},
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    },
    activeColor: {
      type: String,
      default: ''
    },
    inactiveColor: {
      type: String,
      default: ''
    }
  },
  emits: ['update:modelValue'],
  setup (props) {
  // Vuex store
    const store = useStore()

    // this
    const { proxy } = getCurrentInstance()
    // console.log(proxy)

    return {
      ...useSwitch(store, proxy, props)
    }
  }
})
</script>

<style scoped lang="scss">
.my-switch {
  display: inline-flex;
  align-items: center;
  position: relative;
  vertical-align: middle;
  .switch_input {
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
  .switch__core {
    width: 40px;
    height: 20px;
    position: relative;
    border-radius: 10px;
    border: 1px solid #d7dae2;
    background-color: #dddfe5;
    cursor: pointer;
    .switch__action {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      position: absolute;
      top: 1px;
      left: 1px;
      background-color: #fff;
      transition: all .5s;
    }
  }
}
.is-checked {
  .switch__core {
    display: flex;
    justify-content: end;
    border-color: #409eff;
    background-color: #409eff;
    .switch__action {
      transform: translateX(20px);
    }
  }
}

.is-disabled {
  opacity: .6;
  .switch__core {
    display: flex;
    justify-content: end;
    border-color: #409eff!important;
    background-color: #409eff!important;
    cursor: not-allowed;
    .switch__action {
      left: 100%;
      // 这里定义变量： $xxx
      $widthSwitchAction: 16px;
      // 使用变量：#{$xxx}
      margin-left: calc(#{-$widthSwitchAction} - 1px);
      // margin-left: -17px;
      transform: translate(0)
    }
  }
}
</style>
