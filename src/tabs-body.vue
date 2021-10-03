<template>
  <div class="tabs-body">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name:'GuluTabsBody',
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
<style>

</style>