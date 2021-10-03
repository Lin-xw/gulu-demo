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
      type: String,
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
  mounted() {//找item
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
}
</script>
<style lang="scss" scoped>
  .tabs{

  }
</style>