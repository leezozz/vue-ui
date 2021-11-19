<template>
  <div>
    <h2>test</h2>
    <my-button>new</my-button>
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
  components: {
  },
  props: {},
  setup () {
  // Vuex store
    const store = useStore()

    // this
    const { ctx } = getCurrentInstance()
    console.log(ctx)

    return {
    }
  }
})
</script>

<style scoped lang="scss">

</style>
