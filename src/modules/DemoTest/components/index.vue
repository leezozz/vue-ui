<template>
  <div class="xxx-container"></div>
</template>

<script>
import {
  computed,
  defineComponent,
  getCurrentInstance
} from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'Xxx',
  props: {

  },
  setup () {
    const store = useStore()
    const { proxy } = getCurrentInstance()
    console.log(proxy)

    return {
    }
  }
})

</script>

<style lang="scss" scoped>
.xxx-container {

}
</style>
