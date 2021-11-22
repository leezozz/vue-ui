<template>
  <div>
    <my-button @click="visible = true">
      按钮
    </my-button>
    <my-dialog
      v-model:visible="visible"
      :width="myWidth"
      :dialog-margin-top="myMarginTop"
      :title="myTitle"
      :header-icon="myIcon"
    >
      <template #default>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </template>
      <template #footer>
        <my-button
          class="header-icon"
          @click="visible = false"
        >
          取消
        </my-button>
        <my-button
          class="header-icon"
          type="primary"
          @click="visible = false"
        >
          确定
        </my-button>
      </template>
    </my-dialog>
  </div>
</template>

<script>
import {
  defineComponent,
  getCurrentInstance,
  ref
} from 'vue'
import { useStore } from 'vuex'

const useTestDialog = (store) => {
  const visible = ref(false)
  const myWidth = '500px'
  const myMarginTop = '150px'
  const myTitle = 'Tip'
  const myIcon = 'arrow-right'
  return {
    visible,
    myWidth,
    myMarginTop,
    myTitle,
    myIcon
  }
}

export default defineComponent({
  name: 'Xx',
  components: {},
  props: {},
  setup () {
  // Vuex store
    const store = useStore()

    // this
    const { ctx } = getCurrentInstance()
    console.log(ctx)

    return {
      ...useTestDialog(store)
    }
  }
})
</script>

<style scoped lang="scss">

</style>
