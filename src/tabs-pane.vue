<template>
  <div class="tabs-pane" :class="classes" v-if="active">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'GuluTabsPane',
  inject://注入
      ['eventBus'],
  data() { //不需要用户传值，自身维护值
    return {
      active: false
    }
  },
  props: {
    name: {
      type: String | Number,
      required: true
    }
  },
  computed: {//计算属性，根据自己有没有被选中
    classes() {
      //如果被选中了，就有一个active
      return {
        active: this.active
      }
    }
  },
  created() {
    //监听事件
    //所有组件都需要监听selected事件
    this.eventBus.$on('update:selected', (name) => {
      this.active = name === this.name;

    })
  }
}
</script>
<style lang="scss" scoped>
  .tabs-pane{
    &.active{
      background: red;
    }
  }
</style>