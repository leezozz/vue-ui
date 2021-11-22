<template>
  <!-- 通过绑定类名的方法动态控制样式 -->
  <button
    class="my-button"
    :class="[`my-button-${type}`,
             `my-button-${size}`,
             {
               'is-plain':plain,
               'is-round': round,
               'is-circle': circle,
               'is-disabled': disabled,
               'is-loading': loading
             }]"
    :disabled="disabled"
    @click="handClick"
  >
    <i
      v-if="icon"
      :class="`my-icon-${icon}`"
    ></i>
    <!-- loading 显示加载状态 -->
    <i
      v-if="loading"
      class="my-icon-loadingIcon"
    ></i>
    <!-- 如果没传入文本插槽，则不显示span内容 -->
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
import {
  defineComponent,
  getCurrentInstance
} from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'MyButton',
  components: {},
  props: {
    type: {
      type: String,
      default: 'default'
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: ''
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  emits: ['click'],
  setup () {
  // Vuex store
    const store = useStore()

    // this
    const { proxy } = getCurrentInstance()
    // console.log('this', proxy)
    // console.log('slot', proxy.$slots.default)

    // 利用子传父，自定义事件
    const handClick = (e) => {
      proxy.$emit('click', e)
    }

    return {
      handClick
    }
  }
})
</script>

<style lang="scss" scoped>
  .my-button{
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #ffffff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: 0.1s;
    font-weight: 500;
    //禁止元素的文字被选中
    -moz-user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
    &:hover,
    &:hover{
      color: #409eff;
      border-color: #c6e2ff;
      background-color: #ecf5ff;
    }
  }
  .my-button-primary{
  color:#fff;
  background-color: #409eff;
  border-color: #409eff;
  &:hover,
  &:focus{
    background: #66b1ff;
    background-color: #66b1ff;
    color: #fff;
    }
  }
  .my-button-success{
  color:#fff;
  background-color: #67c23a;
  border-color: #67c23a;
  &:hover,
  &:focus{
    background: #85ce61;
    background-color: #85ce61;
    color: #fff;
    }
  }
  .my-button-info{
  color:#fff;
  background-color: #909399;
  border-color: #909399;
  &:hover,
  &:focus{
    background: #a6a9ad;
    background-color: #a6a9ad;
    color: #fff;
    }
  }
  .my-button-warning{
  color:#fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
  &:hover,
  &:focus{
    background: #ebb563;
    background-color: #ebb563;
    color: #fff;
    }
  }
  .my-button-danger{
  color:#fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
  &:hover,
  &:focus{
    background: #f78989;
    background-color: #f78989;
    color: #fff;
    }
  }
  .my-button-mini{
    min-height: 28px;
    padding: 7px 15px;
    font-size: 12px;
  }
  .my-button-small{
    min-height: 32px;
    padding: 9px 15px;
    font-size: 12px;
  }
  .my-button-small{
    min-height: 36px;
    padding: 10px 20px;
    font-size: 12px;
  }

// 朴素按钮样式
.my-button.is-plain{
  &:hover,
  &:focus{
    background: #fff;
    border-color: #489eff;
    color: #409eff;
  }
}
.my-button-primary.is-plain{
  color: #409eff;
  background: #ecf5ff;
  &:hover,
  &:focus{
    background: #409eff;
    border-color: #409eff;
    color: #fff;
  }
}
.my-button-success.is-plain{
  color: #67c23a;
  background: #c2e7b0;
  &:hover,
  &:focus{
    background: #67c23a;
    border-color: #67c23a;
    color: #fff;
  }
}
.my-button-info.is-plain{
  color: #909399;
  background: #d3d4d6;
  &:hover,
  &:focus{
    background: #909399;
    border-color: #909399;
    color: #fff;
  }
}
.my-button-warning.is-plain{
  color: #e6a23c;
  background: #f5dab1;
  &:hover,
  &:focus{
    background: #e6a23c;
    border-color: #e6a23c;
    color: #fff;
  }
}
.my-button-danger.is-plain{
  color: #f56c6c;
  background: #fbc4c4;
  &:hover,
  &:focus{
    background: #f56c6c;
    border-color: #f56c6c;
    color: #fff;
  }
}
.my-button.is-round {
  border-radius: 20px;
  padding: 12px 23px;
}
.my-button.is-circle{
  border-radius: 50%;
  padding: 12px;
}
.my-button [class*=icon-]+span{
  margin-left: 5px;
}
.my-button.is-disabled{
   cursor: no-drop;
}
.my-button.is-loading{
  .my-icon-loadingIcon {
    display: inline-block;
    animation: rotating 2s linear infinite;
  }
}
</style>
