<template>
  <div class="tabs-item" @click="xxx" :class="classes">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name:'GuluTabsItem',
  inject://注入
      ['eventBus'],
  data(){ //不需要用户传值，自身维护值
    return{
      active: false
    }
  },
  props:{
    disabled:{
      type: Boolean,
      default: false
    },
    name:{
      type:String|Number,
      required: true
    }
  },
  computed:{//计算属性，根据自己有没有被选中
    classes(){
      //如果被选中了，就有一个active
      return {
        active: this.active
      }
    }
  },
  created() {
    //监听事件
    //所有组件都需要监听selected事件
    this.eventBus.$on('update:selected',(name)=>{
      //如果选中的名字等于当前的名字
        this.active = name === this.name
    })
  },
  methods:{//触发使用的方法
    xxx(){//当用户点击了，就会说更新selected是this.name
      this.eventBus.$emit('update:selected',this.name)
    }
  }
}
</script>
<style lang="scss" scoped>
  .tabs-item{
    padding: 0 1em;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    cursor: pointer;//添加鼠标样式
    height: 100%;
    &.active{
      background: red;
    }
  }
</style>