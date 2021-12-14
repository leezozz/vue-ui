<template>
  <div>
    <el-radio-group v-model="model">
      <el-radio
        :label="1"
      >
        label1
      </el-radio>
      <el-radio
        :label="2"
      >
        label2
      </el-radio>
      <el-radio
        :label="3"
      >
        label3
      </el-radio>
    </el-radio-group>

    <div>
      <TestProvide />
    </div>
  </div>
</template>

<script>
import {
  defineComponent,
  getCurrentInstance,
  ref
} from 'vue'
import { useStore } from 'vuex'
import TestProvide from '@/modules/TestNewSome/TestProvide.vue'

export default defineComponent({
  name: 'Xx',
  components: {
    TestProvide
  },
  props: {

  },
  setup () {
  // Vuex store
    const store = useStore()

    // this
    const { ctx } = getCurrentInstance()
    console.log(ctx)

    const model = ref(1)

    return {
      model
    }
  }
})
</script>

<style scoped lang="scss">

</style>
