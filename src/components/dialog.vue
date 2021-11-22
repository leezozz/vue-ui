<template>
  <transition name="dialog-fade">
    <!-- @click.self 只有点击自己时才能触发 -->
    <div
      v-show="visible"
      class="my-dialog-overlay"
      @click.self="handleClose"
    >
      <div
        class="my-dialog"
        :style="{ width: dialogWidth, marginTop: dialogMarginTop}"
      >
        <!-- header  -->
        <div class="my-dialog-header">
          <span
            class="dialog-header"
          >
            <span
              v-if="headerIcon"
              class="dialog-header-icon"
            >
              <i
                :class="`my-icon-${headerIcon}`"
              ></i>
            </span>
            <span class="dialog-header-text">
              {{ title }}
            </span>
          </span>
          <button
            class="header-icon"
            @click="handleClose"
          >
            <i class="my-icon-close">
            </i>
          </button>
        </div>
        <!-- body -->
        <div class="my-dialog-body">
          <!-- 内容可能是除span以外的其他内容，比如列表等，所以在这里使用插槽，并且不规定插槽内具体的标签  -->
          <slot
            class="dialog-body"
          ></slot>
        </div>
        <!-- footer  -->
        <div class="my-dialog-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import {
  defineComponent,
  getCurrentInstance,
  ref
} from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'MyDialog',
  components: {},
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    dialogWidth: {
      type: String,
      default: '500px'
    },
    title: {
      type: String,
      default: '提示'
    },
    headerIcon: {
      type: String,
      default: ''
    },
    dialogMarginTop: {
      type: String,
      default: '100px'
    }
  },
  emits: ['update:visible'],
  setup () {
  // Vuex store
    const store = useStore()

    // this
    const { proxy } = getCurrentInstance()
    console.log(proxy)

    const handleClose = () => {
      proxy.$emit('update:visible', false)
    }

    return {
      handleClose
    }
  }
})
</script>

<style scoped lang="scss">
// scoped：有作用域的 CSS。 控制样式只在当前组件中起作用
// scoped 会给当前组件模板中的所有元素都添加一个随机的属性
// scoped 会给当前组件中所有的样式也添加一个对应的属性选择器
.my-dialog-overlay {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0,0,0,0.5);
  z-index: 9999;
  overflow: auto;
  .my-dialog {
    padding: 20px;
    background-color: #fff;
    margin: 100px auto 0;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.3);
    .my-dialog-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .dialog-header-text {
        font-size: 18px;
        line-height: 24px;
        color: #303133;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 80%;
      }
      .header-icon {
        border: none;
        background-color: #fff;
      }
    }
    .my-dialog-body {
      margin: 20px 0 20px;
      .dialog-body {
        font-size: 14px;
        color: #606266;
      }
    }
    .my-dialog-footer {
      text-align: right;
      // 如果有 :deep() 属性，就不会添加随机的属性
      :deep() {
        .my-button:first-child {
          margin-right: 10px;
        }
      }
    }
  }
}

// 添加过渡动画
.dialog-fade-enter-active {
  animation: fade .3s;
}
.dialog-fade-leave-active {
  animation: fade .3s reverse;
}
@keyframes fade {
  0% {
    opacity: 0;
    // transform: translateY(-20px);
    transform: translate3d(0, -20px, 0);
  }
  100% {
    opacity: 1;
    // transform: translateY(0);
    transform: translate3d(0, 0, 0);
  }
}
</style>
