<template>
  <div>
    <!-- :value="gender"
    @input="gender = $event" -->
    <my-radio
      v-model="gender"
      :disabled="true"
      :label="0"
    />

    <my-radio
      v-model="gender"
      :disabled="false"
      :label="1"
    >
      666
    </my-radio>
    <my-radio
      v-model="gender"
      :disabled="false"
      :label="2"
    >
      777
    </my-radio>
    <label>
      <input
        id="inputClass"
        type="radio"
      >
      {{ '原生input， type = radio' }}
    </label>
  </div>
</template>

<script>
import {
  defineComponent,
  getCurrentInstance,
  nextTick,
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
    // console.log(ctx)

    const gender = ref(2)
    console.log('gender', gender.value)

    // nextTick(() => {
    //   })

    // setTimeout(() => {
    //   gender.value = 2
    // }, 1000)

    return {
      gender
    }
  }
})
</script>

<style scoped lang="scss">

</style>
