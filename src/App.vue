<template>
  <div id="nav">
    <!-- <router-link to="/">
        Home
      </router-link> |
      <router-link to="/about">
        About
      </router-link>
    </div>
    <router-view /> -->
    <router-view />
  </div>
</template>

<script>
import {
  defineComponent,
  getCurrentInstance
} from 'vue'

export default defineComponent({
  name: 'Xx',
  components: {},
  props: {},
  setup () {
  // Vuex store
    // const store = useStore()

    // this
    const { ctx } = getCurrentInstance()
    console.log(ctx)

    return {
    }
  }
})
</script>

<style scoped lang="sass">
@import '@/styles/index.scss'
</style>
