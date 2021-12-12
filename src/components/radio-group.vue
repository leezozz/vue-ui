<template>
  <div class="radio-group-main">
    <slot></slot>
  </div>
</template>

<script>
import {
  defineComponent,
  getCurrentInstance
} from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'RadioGroup',
  components: {},
  props: {},
  setup () {
  // Vuex store
    const store = useStore()

    // this
    const { ctx } = getCurrentInstance()
    // console.log(ctx)

    return {
    }
  }
})
</script>

<style scoped lang="scss">
.radio-group-main{

}
</style>
