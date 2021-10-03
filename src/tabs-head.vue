<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="actions-wrapper">
      <slot name="actions" ></slot>
    </div>
  </div>
</template>
<script>
export default {
  name:'GuluTabsHead',
  inject://注入
      ['eventBus'],
  created() {
    //监听事件
    //所有组件都需要监听selected事件
    this.eventBus.$on('update:selected',(name)=>{

    })
  }
}
</script>
<style lang="scss" scoped>
  $tab-height:40px;
  .tabs-head{
    border: 1px solid red;
    display: flex;
    height: $tab-height;
    justify-content: flex-start;
    align-items: center;
    > .actions-wrapper{
      //把设置放右边
      margin-left: auto;
    }
  }
</style>