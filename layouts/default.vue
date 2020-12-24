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
.layout-wrap {
  position: relative;
  z-index: 1;
  width: 100%;
  .container {
    position: relative;
    width: 100%;
    max-width: 960px;
    min-height: 88vh;
    margin: 20px auto;
    padding-top: 60px;
  }
}

</style>
