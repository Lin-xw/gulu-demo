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
  mounted() {//只有mounted能保证子元素已经全都创建好了
    //通过this.eventBus就能访问到.eventBus
    //必须触发update:selected事件才能使.sync修饰符有用
    this.eventBus.$emit('update:selected',this.selected)
    //用户选中了一个selected
  }
}
</script>
<style lang="scss" scoped>
  .tabs{

  }
</style>