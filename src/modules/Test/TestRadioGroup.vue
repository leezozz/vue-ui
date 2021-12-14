<template>
  <div>
    {{ gender }}
    <my-radio-group v-model="gender">
      <my-radio
        :disabled="true"
        :label="0"
      />

      <my-radio
        :disabled="false"
        :label="1"
      >
        666
      </my-radio>
      <my-radio
        :disabled="false"
        :label="2"
      >
        777
      </my-radio>
    </my-radio-group>

    <my-radio
      v-model="desc"
      :disabled="false"
      :label="3"
    >
      aaa
    </my-radio>

    <my-radio
      v-model="desc"
      :disabled="false"
      :label="4"
    >
      bbb
    </my-radio>
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
    // console.log(ctx)

    const gender = ref(2)
    console.log('gender', gender.value)

    const desc = ref(3)
    console.log('desc', desc)

    return {
      gender,
      desc
    }
  }
})
</script>

<style scoped lang="scss">

</style>
