<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-button>Default</el-button>
    <el-button type="primary">
      Primary
    </el-button>
    <el-button type="success">
      Success
    </el-button>
    <el-button
      type="info"
      @click="handleMixin"
    >
      Info
    </el-button>
  </div>
</template>
<script>
import Mixin from './test/Mixin.vue'
import {
  getCurrentInstance
} from 'vue'
export default ({
  name: 'About',
  components: {
  },
  mixins: [Mixin],
  setup () {
    const { proxy } = getCurrentInstance()
    console.log('this proxy', proxy)
    console.log('mixinData', proxy.mixinData) // undefined
    // const mixfun = proxy.mixinFunction()
    // console.log('mixinData', mixfun)

    const handleMixin = () => {
      console.log('mixinData', proxy.mixinData)
      const mixfun = proxy.mixinFunction()
      console.log('mixinData', mixfun)
    }
    return {
      handleMixin
    }
  }
})
</script>
