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

const useModules = async (store) => {
  // console.log(store)
  const getDemoList = computed(() => store.state.DemoTest.demoList)
  console.log('getDemoList', getDemoList)
  const { data, error } = await store.dispatch('DemoTest/getDemoTestData')
  console.log('error', error)
  console.log('data', data)

  return {

  }
}

export default defineComponent({
  name: 'Xxx',
  props: {

  },
  setup () {
    const store = useStore()
    const { proxy } = getCurrentInstance()
    console.log(proxy)

    return {
      ...useModules(store)
    }
  }
})

</script>

<style lang="scss" scoped>
.xxx-container {

}
</style>
