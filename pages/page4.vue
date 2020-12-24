<template>
  <div>
    <h1>Mountaiins</h1>
    <ul v-for="mountain in mountains" :key="mountain.slug">
      <li>{{ mountain.title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Page4',
  async asyncData ({ $axios, $config }) {
    const mountains = await $axios.$get('/mountains')
    return { mountains }
  }
}
</script>

<style lang="scss" scoped>
</style>
