<template>
  <div>
    <h2>switch</h2>
    <my-switch
      v-model="switchValue"
      :disabled="false"
      active-color="red"
      inactive-color="green"
    />
    <!-- 当disabled = true时，其实active-color和 inactive-color都是无效的-->
    <my-switch
      v-model="switchValues"
      :disabled="true"
      active-color="pink"
      inactive-color="skyblue"
    />
    <my-switch
      v-model="switchValues"
      :disabled="true"
      active-color="pink"
      inactive-color="skyblue"
    />
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
  name: 'Xx',
  components: {},
  props: {},
  setup () {
  // Vuex store
    const store = useStore()

    // this
    const { ctx } = getCurrentInstance()
    console.log(ctx)

    const switchValue = ref(false)
    const switchValues = ref(false)

    return {
      switchValue,
      switchValues
    }
  }
})
</script>

<style scoped lang="scss">

</style>
