<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>
<script>
import Vue from 'vue'
export default {
  name: 'GuluTabs',
  props: {
    selected: {//双向同步
      type: String|Array,
      required: true
    },
    direction: {//切换方向
      type: String,
      default:'horizontal',
      validator(value) {//验证方向
        return ['horizontal', 'vertical'].indexOf(value) >= 0
      }
    }
  },
  data(){
    //data做中转，来访问eventBus
    return{
      eventBus: new Vue()
    }
  },
  provide(){
    //eventBus做provide在传出去
    //跨组件都可以调用的属性
    return{
      eventBus:this.eventBus
    }
  },
  methods: {
    checkChildren () {
      if (this.$children.length === 0) {
        console && console.warn &&
        console.warn('tabs的子组件应该是tabs-head和tabs-nav，但你没有写子组件')
      }
    },
    selectTab () {
      this.$children.forEach((vm) => {
        if (vm.$options.name === 'GuluTabsHead') {
          vm.$children.forEach((childVm) => {
            if (childVm.$options.name === 'GuluTabsItem'
                && childVm.name === this.selected) {
              this.eventBus.$emit('update:selected', this.selected, childVm)
            }
          })
        }
      })
    }
  },
  mounted () {
    this.checkChildren();
    this.selectTab();
  }
}
</script>
<style lang="scss" scoped>
  .tabs{

  }
</style>