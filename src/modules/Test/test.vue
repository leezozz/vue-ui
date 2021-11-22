<template>
  <div>
    <h2>test</h2>
    <my-button
      plain
      round
      loading
    >
      default
    </my-button>
    <my-button
      type="primary"
      plain
      circle
    >
      primary
    </my-button>
    <my-button
      type="success"
      plain
      @click="getClick"
    >
      success
    </my-button>
    <my-button
      type="info"
      plain
      disabled
    >
      info
    </my-button>
    <my-button
      type="danger"
      plain
      icon="copy"
      size="small"
    >
      danger
    </my-button>
    <my-button
      type="warning"
      plain
      size="mini"
    >
      warning
    </my-button>
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
    // const { ctx } = getCurrentInstance()
    // console.log(ctx)

    const getClick = () => {
      console.log('success')
    }

    return {
      getClick
    }
  }
})
</script>

<style scoped lang="scss">
.my-button {
  margin: 20px!important;
}
</style>
