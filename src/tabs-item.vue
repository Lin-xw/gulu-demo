<template>
  <div class="tabs-item" @click="onClick" :class="classes" :data-name="name">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'GuluTabsItem',
  inject://注入
      ['eventBus'],
  data() { //不需要用户传值，自身维护值
    return {
      active: false
    }
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: String | Number,
      required: true
    }
  },
  computed: {//计算属性，根据自己有没有被选中
    classes() {
      //如果被选中了，就有一个active
      return {
        active: this.active,
        disabled: this.disabled
      }
    }
  },
  created() {
    //监听事件
    //所有组件都需要监听selected事件
    //如果选中的名字等于当前的名字
    if (this.eventBus) {
      this.eventBus.$on('update:selected', (name) => {
        this.active = name === this.name;
      })
    }
  },
  methods: {//触发使用的方法
    //当用户点击了，就会说更新selected是this.name
    onClick() {
      this.eventBus && this.eventBus.$emit('update:selected', this.name, this)

    }
  }
}
</script>
<style lang="scss" scoped>
$blue: blue;
$disabled-text-color: grey;
.tabs-item {
  padding: 0 1em;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  cursor: pointer; //添加鼠标样式
  height: 100%;

  &.active {
    color: $blue;
    font-weight: bold;
  }

}
</style>