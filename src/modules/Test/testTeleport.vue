<template>
  <teleport to="body">
    <div class="box">
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  </teleport>
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
