<template>
  <div>
    <h3>inject</h3>
    {{ data }}
    <p>
      {{ changemsg }}
    </p>
    <!-- <my-button @click="handClick">
      按钮
    </my-button> -->
    <p>
      val:
      {{ val }}
    </p>
  </div>
</template>

<script>
import {
  defineComponent,
  getCurrentInstance,
  inject
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
    // console.log(ctx)

    const data = inject('a')
    console.log('data', data)

    const changemsg = inject('msg', 333)

    const val = inject('values')

    const changeVal = inject('newVal')

    changeVal(3)

    return {
      data,
      changemsg,
      val,
      changeVal
    }
  }
})
</script>

<style scoped lang="scss">

</style>
