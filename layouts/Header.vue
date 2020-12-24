<template>
  <header class="header-wrap">
    <ul>
      <li v-for="li in navList" :key="li.path">
        <nuxt-link :to="li.path">
          {{ li.label }}
        </nuxt-link>
      </li>
    </ul>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Header',
  asyncData () {
    return {}
  },
  computed: {
    ...mapGetters({
      navList: 'home/navList'
    })
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.header-wrap {
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .05);
  ul {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    li {
      padding: 20px 10px;
      list-style: none;
      cursor: pointer;
    }
  }
}

</style>
