<template>
  <div>
    <!-- <div>
      <input
        v-model="title"
        type="text"
      >
      <input
        type="text"
        :value="title"
        @input="title = $event"
      >
    </div> -->
    <Test2 v-model="title" />
    {{ title }}
    <!-- <Test2
      :model-value="title"
      @change="title = $event"
    /> -->
  </div>
</template>

<script>
import {
  defineComponent,
  effect,
  getCurrentInstance,
  ref
} from 'vue'
import { useStore } from 'vuex'
import Test2 from './Test2.vue'

export default defineComponent({
  name: 'Xx',
  components: {
    Test2
  },
  props: {},
  setup () {
  // Vuex store
    const store = useStore()

    // this
    const { ctx } = getCurrentInstance()
    console.log(ctx)

    const title = ref('')
    console.log('title', title.value)

    // const sth = (e) => {
    //   return e
    //   // console.log('e', e)
    // }

    // const title = (e) => {
    //   return e
    // }

    return {
      // sth
      // ccc
      // title
      title
    }
  }
})
</script>

<style scoped lang="scss">

</style>
