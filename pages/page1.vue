<template>
  <drag-box :data="list" @on-change="changeCard">
    <template v-slot:default="{data}">
      <div class="box">
        {{ data.label }}
      </div>
    </template>
  </drag-box>
</template>

<script>
export default {
  name: 'Page1',
  data () {
    return {
      list: [
        {
          label: 'box1'
        },
        {
          label: 'box2'
        },
        {
          label: 'box3'
        },
        {
          label: 'box4'
        },
        {
          label: 'box5'
        },
        {
          label: 'box6'
        },
        {
          label: 'box7'
        },
        {
          label: 'box8'
        },
        {
          label: 'box9'
        }
      ]
    }
  },
  methods: {
    changeCard (data) {
      this.$nextTick(() => {
        this.list = data
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  width: 50px;
  height: 50px;
  margin: 10px;
  color: #fff;
  background-color: #fc0;
}

</style>
