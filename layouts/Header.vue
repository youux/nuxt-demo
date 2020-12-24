<template>
  <header class="header-wrap">
    <ul>
      <li v-for="li in navList" :key="li">
        {{ li }}
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      navList: ['首页', '沸点', '小册', '活动', '探索掘金']
    }
  }
}
</script>

<style lang="scss" scoped>
.header-wrap {
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
