<template>
  <div>
    <TestSyncChild
      v-model:message="message"
    />
    <!-- @update:message="modifyData" -->
  </div>
</template>

<script>
import {
  defineComponent,
  getCurrentInstance,
  ref
} from 'vue'
import { useStore } from 'vuex'
import TestSyncChild from '@/modules/Test/testSyncChild.vue'

export default defineComponent({
  name: 'Xx',
  components: {
    TestSyncChild
  },
  props: {},
  setup () {
  // Vuex store
    const store = useStore()

    // this
    const { ctx } = getCurrentInstance()
    console.log(ctx)

    const message = ref('000')
    console.log('mes', message)
    const modifyData = (data) => {
      message.value = data
    }

    return {
      message,
      modifyData
    }
  }
})
</script>

<style scoped lang="scss">

</style>
