<template>
  <div
    class="my-input"
    :class="{'my-input_suffix':showSuffix}"
  >
    <div
      v-if="type === 'textarea'"
      class="input-textarea"
    >
      <textarea
        class="input-textarea_inner"
        :type="type"
      >
      </textarea>
    </div>

    <input
      v-else
      class="my-input_inner"
      :class="{'is-disabled': disabled}"
      :name="name"
      :value="modelValue"
      :placeholder="placeholder"
      :type="showPassword ? (isShowPassword ? 'text' : 'password') : type"
      :disabled="disabled"
      :clearable="clearable"
      :showPassword="showPassword"
      @input="handInput"
    >

    <span class="my-input_suffix">
      <!-- 清空图标 -->
      <i
        v-if="clearable && modelValue"
        class="my-icon-close"
        @click="handClear"
      ></i>
      <!-- 是否显示切换密码图标 -->
      <i
        v-if="showPassword && type==='password'"
        class="my-icon-hide"
        @click="handShowPassword"
      ></i>
    </span>
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
  name: 'MyInput',
  components: {},
  props: {
    name: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: '请输入'
    },
    type: {
      type: String,
      default: 'input'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    // 是否显示切换密码图标
    showPassword: {
      type: Boolean,
      default: false
    },
    modelValue: {
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

    const handInput = (e) => {
      proxy.$emit('update:modelValue', e.target.value)
    }
    // 清空输入框
    const handClear = () => {
      proxy.$emit('update:modelValue', '')
    }

    const showSuffix = () => {
      return props.clearable
    }
    showSuffix()

    const isShowPassword = ref(false)

    // 控制显示密码
    const handShowPassword = () => {
      isShowPassword.value = !isShowPassword.value
    }

    return {
      handInput,
      handClear,
      isShowPassword,
      handShowPassword,
      showSuffix
    }
  }
})
</script>

<style scoped lang="scss">
.my-input{
  width: 30%;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .input-textarea {
    position: relative;
    width: 100%;
    display: inline-block;
    vertical-align: bottom;
    .input-textarea_inner {
      width: 100%;
      display: block;
      // 可调整元素的高度
      resize: vertical;
      padding: 5px 15px;
      line-height: 1.5;
      box-sizing: border-box;
      height: 54px;
      line-height: 1.5;

    }
  }
  .my-input_inner{
    width: 100%;
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645,045,.355,1);
    width: 100%;
     &:focus{
      outline: none;
      border-color: #409eff;
    }
    // input禁用样式
    &.is-disabled{
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor:not-allowed;
    }
  }
}
.my-input_suffix{
    .my-input_inner{
      padding-right: 30px;
    }
    .my-input_suffix{
      position: absolute;
      right: 10px;
      height: 100%;
      top: 0;
      line-height: 40px;
      text-align: center;
      color: #c0c4cc;
      transition: all .3s;
      z-index: 900;
      i{
        color: #c0c4cc;
        font-size: 14px;
        cursor: pointer;
        transition: color .2s cubic-bezier(.645,.045,.355,1);
      }
    }
  }
</style>
