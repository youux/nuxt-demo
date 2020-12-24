<template>
  <footer class="footer-wrap">
    <ul>
      <li v-for="li in navList" :key="li.path">
        <nuxt-link :to="li.path">
          {{ li.label }}
        </nuxt-link>
      </li>
    </ul>
  </footer>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Footer',
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
.footer-wrap {
  border-top: 1px solid rgba(178,186,194,.15);
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
