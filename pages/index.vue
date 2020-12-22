<template>
  <div class="home">
    <NuxtLink to="/page1">
      去page1页面
    </NuxtLink>
    <NuxtLink to="/page2/1">
      去page2页面
    </NuxtLink>
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
