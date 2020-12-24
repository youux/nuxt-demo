<template>
  <div class="home">
    <article>
      <nuxt-content :document="article" />
    </article>
  </div>
</template>

<script>
export default {
  name: 'Index',
  async asyncData ({ $content }) {
    const article = await $content('hello').fetch()

    return {
      article
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  align-items: center;
  flex-direction: column;
}

</style>
