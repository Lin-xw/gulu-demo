<template>
  <div class="layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'GuluLayout',
    data(){
      return{
        layoutClass: {
          hasSider: false
        }
      }
    },
    mounted(){
      //对于每一个children的子组件都是一个vm，把vm的options.name打出来
      //如果等于GuluSider那么就给它自己加上class
      this.$children.forEach((vm)=>{
        if(vm.$options.name==='GuluSider'){
          this.layoutClass.hasSider = true
        }
      })
    }
  }
</script>
<style lang="scss" scoped>
  .layout{
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    &.hasSider{
      flex-direction: row;
    }
  }
</style>