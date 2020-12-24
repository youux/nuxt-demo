<template>
  <div class="layout-wrap">
    <Header />
    <main class="container">
      <Nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from './Header'
import Footer from './Footer'
export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss" scoped>
.layout-wrap{
  position: relative;
  width: 100%;
  height: 100%;
  .container{
    width: 100%;
    height: 100%;
  }
}
</style>
