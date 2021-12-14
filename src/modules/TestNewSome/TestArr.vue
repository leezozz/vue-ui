<template>
  <div>
    <h2>Arr</h2>
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
    console.log(ctx)

    const arr1 = ref([1, 2, 3])
    const a1 = arr1.value.push('a')
    console.log('arr1', arr1.value)
    console.log('a1', a1) // 返回数组长度 4

    const arr2 = ref(['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'])
    const a2 = arr2.value.pop()
    console.log('arr2', arr2.value) // ['broccoli', 'cauliflower', 'cabbage', 'kale']
    console.log('a2', a2) // 返回删除的数组中最后一个数组元素

    return {
      arr1,
      a1,
      arr2,
      a2
    }
  }
})
</script>

<style scoped lang="scss">

</style>
