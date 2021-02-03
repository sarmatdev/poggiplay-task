<template>
  <v-text-field
    required
    ref="baseSearchBar"
    v-bind="$attrs"
    v-on="$listeners"
  ></v-text-field>
</template>

<script>
export default {
  name: 'BaseSearchBar',
  methods: {
    focus() {
      this.$refs.baseSearchBar.focus()
    },
    listenKey(e) {
      if (e.key === '/') {
        this.focus()
      }
      return
    },
  },
  mounted() {
    document.addEventListener('keyup', this.listenKey)
  },
  beforeDestroy() {
    document.removeEventListener('keyup', this.listenKey)
  },
}
</script>

<style></style>
