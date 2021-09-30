<template>
  <transition name="fade">
  <div class="sider" v-if="visible">
    <slot></slot>
    <button @click="visible=false">111111111111</button>
  </div>
  </transition>
</template>
<script>
  export default {
    name:'GuluSider',
    data(){
      //实现点击button后页面变没
      return {
        visible: true
      }
    },
    methods:{//钩子
      enter: function (el,done){
        //...
        done()
      },
      leave: function (el,done){
        //...
        done()
      },
    }
  }
</script>
<style lang="scss" scoped>
.sider{
  position: relative;
  >button{
    position: absolute;
    top: 0;
    right: 0;
  }
}
.fade-enter-active,.fade-leave-active{
  transition: all .5s;
}
.fade-enter,.fade-leave-to{
  margin-left: -200px;
}
</style>