<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name:'GuluTabs',
    props:{
      selected:{
        type:String,
        required:true
      },
      direction:'horizontal',
      validator(value){//验证方向
        return['horizontal','vertical'].indexOf(value) >= 0
      }
    },
    created() {
      //必须触发update:selected事件才能使.sync修饰符有用
      //this.$emit('update:selected','xxx')
    }
  }
</script>
<style>

</style>