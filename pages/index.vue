<template>
  <div class="home">
    <nuxt-Link to="/page1">
      去page1页面
    </nuxt-Link>
    <nuxt-link to="/page2/1">
      去page2页面
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'Index'
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  align-items: center;
  flex-direction: column;
  a {
    font-size: 12px;
    display: block;
    margin-top: 20px;
  }
}
</style>
