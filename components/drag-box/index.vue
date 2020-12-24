<template>
  <div class="drag-wrap">
    <div
      v-for="(li,index) in dragList"
      :key="li.label"
      class="drag-item"
      draggable
      @dragstart="dragStart($event, index)"
      @drop="dropMove($event, index)"
      @dragover="dragOver($event)"
    >
      <slot :data="li" :index="index" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DragBox',
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      dragWrap: null,
      type: false
    }
  },
  computed: {
    dragList: {
      get () {
        return JSON.parse(JSON.stringify(this.data))
      },
      set () { }
    }
  },
  methods: {
    // 开始
    dragStart (event, index) {
      event.dataTransfer.setData('index', index)
    },
    // 移动
    dropMove (event, index) {
      event.preventDefault()
      const startIndex = parseInt(event.dataTransfer.getData('index'))
      const currentIndex = parseInt(index)

      const list = this.swapArr(this.dragList, startIndex, currentIndex)
      this.changeData(list)
    },
    // 结束
    dragOver (event) {
      event.preventDefault()
    },
    // 替换数组
    swapArr (arr, index1, index2) {
      arr[index1] = arr.splice(index2, 1, arr[index1])[0]
      return arr
    },
    // 提交父元素
    changeData (data) {
      this.dragList = data
      this.$emit('on-change', data)
    }
  }
}
</script>

<style lang="scss" scoped>
.drag-wrap {
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  .drag-item {
    cursor: pointer;
  }
}

</style>
