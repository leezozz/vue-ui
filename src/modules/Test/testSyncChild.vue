<template>
  <div>
    TestSyncChild-------{{ message }}
    <my-button @click="handleClick">
      修改
    </my-button>
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
  props: {
    message: {
      type: String,
      default: ''
    }
  },
  emits: ['update:message'],
  setup (props) {
  // Vuex store
    const store = useStore()

    // this
    const { proxy } = getCurrentInstance()

    const handleClick = () => {
      proxy.$emit('update:message', '12321')
      console.log('emit', proxy)
    }

    return {
      handleClick
    }
  }
})
</script>

<style scoped lang="scss">

</style>
