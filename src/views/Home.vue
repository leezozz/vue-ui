<template>
  <div class="Parent">
    <h3>home</h3>
    <Children
      :msg="varibe"
      @getData="isGetData"
    />
  </div>
</template>

<script>
// import mixin from '@/views/test/Mixin'

import Children from '@/views/Children.vue'
import { getCurrentInstance } from 'vue'
export default {
  name: 'Parent',
  components: {
    Children
  },
  // mixins: [mixin],
  setup () {
    const varibe = '6666666'

    const { proxy } = getCurrentInstance()
    console.log('Home-proxy', proxy)
    const isGetData = (data) => {
      console.log('data', data)
    }
    return {
      varibe,
      isGetData
    }
  }
}
</script>
