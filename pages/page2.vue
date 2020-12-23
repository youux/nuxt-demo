<template>
  <div>{{ params }}</div>
</template>

<script>
export default {
  name: 'Page2',
  asyncData ({ params }) {
    return { params }
  }
}
</script>
