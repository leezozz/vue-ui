<template>
  <div
    class="father"
    @click.capture="btnClick1"
  >
    <div
      class="children"
      @click.capture="btnClick2"
    >
      <div
        class="grandson"
        @click="btnClick3"
      ></div>
    </div>
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
  components: {},
  props: {},
  setup () {
  // Vuex store
    const store = useStore()

    // this
    // const { ctx } = getCurrentInstance()
    // console.log(ctx)
    const btnClick1 = () => {
      console.log('father')
    }
    const btnClick2 = () => {
      console.log('children')
    }
    const btnClick3 = () => {
      console.log('grandson')
    }
    return {
      btnClick1,
      btnClick2,
      btnClick3
    }
  }
})
</script>

<style scoped lang="scss">
.father {
  width: 500px;
  height: 500px;
  background-color: wheat;
  .children {
    width: 300px;
    height: 300px;
    background-color: yellowgreen;
  }
  .grandson {
    width: 100px;
    height: 100px;
    background-color: skyblue;
  }
}
</style>
