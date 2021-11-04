
<template>
  <div></div>
</template>

<script>

export default {
  name: 'MixinsTestMain',
  components: {},
  props: {},
  data () {
    return {
      mixinData: 'mixin中的变量'
    }
  },
  computed: {},
  mounted () {
  },
  methods: {
    mixinFunction () {
      return '我是mixins里面的公共方法'
    }
  }
}
</script>

<style scoped>
</style>
