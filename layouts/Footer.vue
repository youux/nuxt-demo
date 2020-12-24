<template>
  <footer class="footer-wrap">
    <ul>
      <li v-for="li in navList" :key="li">
        {{ li }}
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      navList: ['首页', '沸点', '小册', '活动', '探索掘金']
    }
  }
}
</script>

<style lang="scss" scoped>
.footer-wrap {
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    li {
      padding: 10px;
      cursor: pointer;
    }
  }
}
</style>
